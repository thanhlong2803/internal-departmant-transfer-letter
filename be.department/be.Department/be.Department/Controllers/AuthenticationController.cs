using be.Services;
using Microsoft.AspNetCore.Mvc;
using be.Department.Models;

namespace be.Department.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //Create and Validate JWT Tokens + Use Custom JWT Middleware
    public class AuthenticationController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public AuthenticationController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpPost(Name = "Login")]
        public ActionResult<List<be.Data.Employee>> Login(Login login)
        {            
            return Ok(null);
        }
    }
}