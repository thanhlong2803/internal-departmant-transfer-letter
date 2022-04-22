using be.Data;

namespace be.Service
{
    public interface IDepartmentRepository
    {
        Department GetDepartmentByEmployeeId(long departmentId);
        List<Department> GetAllDepartment();
        Department DepartmentById(long departmentId);
        Department CreateDepartment(Department department);
    }
}
