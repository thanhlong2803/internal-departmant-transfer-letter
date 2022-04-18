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

        [HttpGet(Name = "Login")]
        public ActionResult<List<be.Data.Department>> Login()
        {
            var getAllDepartment = _departmentService.GetAllDepartments();
            return Ok(getAllDepartment);
        }
    }
}