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
        public AuthenticationController(IEmployeeService employeeService, IJwtUtils jwtUtils,
            IDepartmentService departmentService)
        {
            _employeeService = employeeService;
            _jwtUtils = jwtUtils;
            _departmentService = departmentService;
        }

        [HttpPost()]
        [AllowAnonymous] 
        public ActionResult<AuthenticateResponse> Login(AuthenticateRequest auth)
        {
            var departmentOfEmployee = new be.Data.Department();
            var employee = _employeeService.GetEmployeeByEmail(auth);

            if (employee == null)
                throw new AppException("Email '" + auth.Email + "' is not exits");

            if (employee != null)
            {
                departmentOfEmployee = _departmentService.GetDepartmentByEmployeeId(employee.DepartmentId);
                if (departmentOfEmployee == null)
                    throw new AppException("Department of employee is not exits");
            }

            var authenticateResponse = new AuthenticateResponse
            {
                Id = employee.Id,
                Email = employee?.Email,
                FirstName = employee?.FirstName,
                LastName = employee?.LastName,
                PostionId = departmentOfEmployee.PositionType,
                FullName = employee?.FullName
                //after show role
            };

            authenticateResponse.DepartmentId = departmentOfEmployee.Id;
            authenticateResponse.DepartmentName = departmentOfEmployee.Name;
            authenticateResponse.Token = _jwtUtils.GenerateToken(employee);

            return Ok(authenticateResponse);
        }
    }
}