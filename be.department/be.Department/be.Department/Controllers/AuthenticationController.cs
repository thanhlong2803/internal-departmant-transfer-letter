using be.Services;
using Microsoft.AspNetCore.Mvc;

using be.Data;

namespace be.Department.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class AuthenticationController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public AuthenticationController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpPost()]
        public ActionResult<AuthenticateResponse> Login(AuthenticateRequest auth)
        {            
            return Ok(null);
        }

    }
}