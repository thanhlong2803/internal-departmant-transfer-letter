using be.Data;
using be.Service;

namespace be.Services
{
    public class DepartmentService : IDepartmentService
    {
        public IDepartmentRepository _departmentRepository;

        //create init contructor dependency injection
        public DepartmentService(IDepartmentRepository departmentRepository)
        {
            _departmentRepository = departmentRepository;
        }

        #region Get or Create or Update or Delete for department

        public List<Department> GetAllDepartments()
        {
            var getAllDepartments = _departmentRepository.GetAllDepartment();
            return getAllDepartments;
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
