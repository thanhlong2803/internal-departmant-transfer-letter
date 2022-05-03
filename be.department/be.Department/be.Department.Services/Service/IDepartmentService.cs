using be.Data;
using be.Data.Model;

namespace be.Services
{
    public interface IDepartmentService
    {
        List<DepartmentResponse> GetAllDepartments();
        void CreateDepartment(Department department);
        Department GetDepartmentByEmployeeId(long departmentId);       
    }
}
