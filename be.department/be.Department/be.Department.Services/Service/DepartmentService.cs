using be.Data;
using be.Service;
using be.Data.Model;
namespace be.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IDepartmentRepository _departmentRepository;

        //create init contructor dependency injection
        public DepartmentService(IDepartmentRepository departmentRepository)
        {
            _departmentRepository = departmentRepository;
        }

        #region Get or Create or Update or Delete for department

        public List<DepartmentResponse> GetAllDepartments()
        {
            var getAllDepartmentEntitys = _departmentRepository.GetAllDepartment();
            var departmentResponses = getAllDepartmentEntitys.Select(x => new DepartmentResponse
            {
                Id = x.Id,
                DepartmentName = x.Name,
                PostionId = x.PositionType
            }) ;
            return departmentResponses.ToList();
        }

        public void CreateDepartment(Department department)
        {
            _departmentRepository.CreateDepartment(department);
        }

        public Department GetDepartmentByEmployeeId(long departmentId)
        {
            return _departmentRepository.GetDepartmentByEmployeeId(departmentId);
        }

        #endregion
    }
}
