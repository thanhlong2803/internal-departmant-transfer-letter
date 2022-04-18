using be.Data;
using be.Service;

namespace Infrastructure
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private SettingDbcontext _departmentDbcontext;

        public DepartmentRepository(SettingDbcontext departmentDbcontext)
        {
            _departmentDbcontext = departmentDbcontext;
        }

        public Department CreateDepartment(Department department)
        {
            _departmentDbcontext.Add(department);
            _departmentDbcontext.SaveChanges();

            return department;
        }

        public List<Department> GetAllDepartment()
        {
            return _departmentDbcontext.Department.ToList();
        }
    }
}
