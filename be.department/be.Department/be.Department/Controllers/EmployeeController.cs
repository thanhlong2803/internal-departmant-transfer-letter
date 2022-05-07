using be.Services;
using Microsoft.AspNetCore.Mvc;
using be.Data;
using be.Data.Model.EmployeeModel;

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
        public ActionResult<List<EmployeeResponse>> GetAllEmployeeInDepartment(long employeeId, long departmentId)
        {
            var getAllEmployeeByDepartments = _employeeService.GetEmployeeByDepartmentId(employeeId, departmentId);
            return Ok(getAllEmployeeByDepartments);
        }

        [HttpPost("CreateEmployee")]
        public ActionResult<List<be.Data.Department>> CreateEmployee(Employee employee)
        {
            //var getAllEmployeeByDepartments = _employeeService.GetEmployeeByDepartmentId(employeeId, departmentId);
            return Ok();
        }

        [HttpPost("EditEmployee")]
        public ActionResult<List<be.Data.Department>> EditEmployee(Employee employee)
        {
            //var getAllEmployeeByDepartments = _employeeService.GetEmployeeByDepartmentId(employeeId, departmentId);
            return Ok();
        }
    }
}