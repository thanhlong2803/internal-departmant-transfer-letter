using be.Data;
using be.Service;

namespace Infrastructure
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private SettingDbcontext _departmentDbcontext;

        public EmployeeRepository(SettingDbcontext departmentDbcontext)
        {
            _departmentDbcontext = departmentDbcontext;
        }

        public Employee GetEmployeeById(long employeeId)
        {
            var employee = _departmentDbcontext.Employee.Where(z => z.Id == employeeId).FirstOrDefault();
            return employee ?? new Employee();
        }

    }
}
