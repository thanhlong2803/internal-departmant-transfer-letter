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
        private readonly IDepartmentService _departmentService;
        private readonly IJwtUtils _jwtUtils;
        public AuthenticationController(IEmployeeService employeeService,IJwtUtils jwtUtils,
            IDepartmentService departmentService)
        {
            _employeeService = employeeService;
            _jwtUtils = jwtUtils;
            _departmentService = departmentService;
        }

        [HttpPost()]
        [AllowAnonymous] //Do you think ?
        public ActionResult<AuthenticateResponse> Login(AuthenticateRequest auth)
        {
            var departmentOfEmployee = new be.Data.Department();
            var employee = _employeeService.GetEmployeeByEmail(auth);
            if (employee == null)
            {
                throw new KeyNotFoundException("Email : '" + auth.Email + "' is not exits");
            }

            //validate
            //if (Employee == null || !BCrypt.Verify(model.Password, user.PasswordHash))
            //    throw new AppException("Username or password is incorrect");
            //authentication successful

            //Select employee contain of (department , role)
            if (employee != null)
            {
                departmentOfEmployee = _departmentService.GetDepartmentByEmployeeId(employee.DepartmentId);
            }

            var authenticateResponse = new AuthenticateResponse
            {
                Email = employee?.Email,
                FirstName = employee?.FirstName,
                LastName = employee?.LastName,
                Id = employee.Id
            };

            authenticateResponse.DepartmentId = departmentOfEmployee.Id;
            authenticateResponse.DepartmentName = departmentOfEmployee.Name;
            authenticateResponse.Token = _jwtUtils.GenerateToken(employee);

            return Ok(authenticateResponse);
        }
    }
}