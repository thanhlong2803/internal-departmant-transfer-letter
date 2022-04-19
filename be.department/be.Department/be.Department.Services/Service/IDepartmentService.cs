using be.Data;

namespace be.Services
{
    public interface IDepartmentService
    {
        List<Department> GetAllDepartments();
        void CreateDepartment(Department department);
        Department GetDepartmentByEmployeeId(long departmentId);
    }
}
