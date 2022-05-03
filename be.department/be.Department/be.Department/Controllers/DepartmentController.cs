using be.Services;
using Microsoft.AspNetCore.Mvc;
using be.Data;
using be.Data.Model;

namespace be.Department.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpGet("GetAllDepartment")]
        public ActionResult<List<DepartmentResponse>> GetAllDepartment()
        {
            var getAllDepartment = _departmentService.GetAllDepartments();
            return Ok(getAllDepartment);
        }
    }
}