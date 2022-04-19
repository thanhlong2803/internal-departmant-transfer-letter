using be.Data;

namespace be.Service
{
    public interface IDepartmentRepository
    {
        Department GetDepartmentByEmployeeId(long departmentId);
        List<Department> GetAllDepartment();
        Department CreateDepartment(Department department);
    }
}
