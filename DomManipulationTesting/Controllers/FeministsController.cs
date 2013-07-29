using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DomManipulationTesting.Controllers
{
    public class FeministsController : ApiController
    {
        private readonly string[] _feminists = {
                "Marie De France",
                "Eleanor of Aquitaine",
                "Bettisia Gozzadini",
                "Nicola De Lay Haye",
                "Christine de Pizan",
                "Jadwiga of Poland",
                "Laura Cereta",
                "La Malinche"
            }; 

        // GET api/feminists
        public IEnumerable<string> Get()
        {
            return _feminists;
        }

        // GET api/feminists/5
        public string Get(int id)
        {
            if (id < 0 || id > _feminists.Length)
            {
                //really want this to be 422 not 400
                Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            return _feminists.ElementAt(id);
        }
    }
}