using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Elmah;

namespace TheDwarf.Controllers
{
    public class DwarfController : Controller
    {

      [Serializable]
      public class JavaScriptErrorException : Exception
      {
        public JavaScriptErrorException(string message)
          : base(message)
        {
        }
      }

        // GET: Dwarf
        public ActionResult Index()
        {

            return View();
        }

        [HttpPost]
        public void LogJavaScriptError(string message)
        {
          ErrorSignal.FromCurrentContext().Raise(new JavaScriptErrorException(message));
        }
    }
}