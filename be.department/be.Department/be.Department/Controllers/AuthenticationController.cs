using Microsoft.AspNetCore.Mvc;
using be.Data;
using be.Department.Middleware;
using be.Services;

namespace be.Department.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public AuthenticationController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpPost()]
        [AllowAnonymous] //Do you think ?
        public ActionResult<AuthenticateResponse> Login(AuthenticateRequest auth)
        {
            var response = _employeeService.Authenticate(auth);
            return Ok(response);
        }
    }
}