using be.Data;
using be.Services;

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
            var employee = _departmentDbcontext.Employee
                                               .Where(z => z.Id == employeeId)
                                               .FirstOrDefault();

            return employee;
        }

        public Employee GetEmployeeByEmail(AuthenticateRequest authenticateRequest)
        {
            var employee = _departmentDbcontext.Employee
                                               .Where(z => z.Email == authenticateRequest.Email)
                                               .FirstOrDefault();
            return employee;
        }

    }
}
