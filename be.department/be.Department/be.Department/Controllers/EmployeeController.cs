using be.Services;
using Microsoft.AspNetCore.Mvc;
using be.Data;

namespace be.Department.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet("GetAllEmployeeInDepartment")]
        public ActionResult<List<be.Data.Department>> GetAllEmployeeInDepartment(long employeeId, long departmentId)
        {
            var getAllEmployeeByDepartments = _employeeService.GetEmployeeByDepartmentId(employeeId, departmentId);
            return Ok(getAllEmployeeByDepartments);
        }
    }
}