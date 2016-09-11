using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Elmah;
using TheDwarf.Filter;

namespace TheDwarf
{

  public class MvcApplication : System.Web.HttpApplication
  {
    public static void RegisterGlobalFilters(GlobalFilterCollection filters)
    {
      filters.Add(new ElmahHandledErrorLoggerFilter());
      filters.Add(new HandleErrorAttribute());
    }
    protected void Application_Start()
    {
      AreaRegistration.RegisterAllAreas();
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RouteConfig.RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);
    }
    // ELMAH Filtering
    protected void ErrorLog_Filtering(object sender, ExceptionFilterEventArgs e)
    {
      FilterError404(e);
    }

    protected void ErrorMail_Filtering(object sender, ExceptionFilterEventArgs e)
    {
      FilterError404(e);
    }

    // Dismiss 404 errors for ELMAH
    private void FilterError404(ExceptionFilterEventArgs e)
    {
      if (e.Exception.GetBaseException() is HttpException)
      {
        HttpException ex = (HttpException)e.Exception.GetBaseException();
        if (ex.GetHttpCode() == 404)
          e.Dismiss();
      }
    }
  }
}
