using be.Services;
using Microsoft.AspNetCore.Mvc;
using be.Data;

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

        [HttpGet(Name = "GetAllDepartment")]
        public ActionResult<List<be.Data.Department>> GetAllDepartment()
        {
            var getAllDepartment = _departmentService.GetAllDepartments();
            return Ok(getAllDepartment);
        }


    }
}