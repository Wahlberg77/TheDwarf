﻿using System.Web.Mvc;
using Elmah;

namespace TheDwarf.Filter
{
  public class ElmahHandledErrorLoggerFilter : IExceptionFilter
  {
    public void OnException(ExceptionContext context)
    {
      // Long only handled exceptions, because all other will be caught by ELMAH anyway.
      if (context.ExceptionHandled)
        ErrorSignal.FromCurrentContext().Raise(context.Exception);
    }
  }
}