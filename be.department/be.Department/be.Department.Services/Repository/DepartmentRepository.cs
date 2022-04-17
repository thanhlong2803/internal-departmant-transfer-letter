using be.Data;

namespace be.Service
{
    public interface IDepartmentRepository
    {
        List<Department> GetAllDepartment();
        Department CreateDepartment(Department department); 
    }
}
