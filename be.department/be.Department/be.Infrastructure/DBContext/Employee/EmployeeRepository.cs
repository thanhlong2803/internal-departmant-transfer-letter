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
            var employeeEntity = _departmentDbcontext.Employee
                                               .Where(z => z.Id == employeeId)
                                               .FirstOrDefault();

            return employeeEntity;
        }

        public Employee GetEmployeeByEmail(AuthenticateRequest authenticateRequest)
        {
            var employee = _departmentDbcontext.Employee
                                               .Where(z => z.Email == authenticateRequest.Email)
                                               .FirstOrDefault();
            return employee;
        }

        public List<Employee> GetEmployeeByDepartmentId(long employeeId, long departmentId)
        {
            var positionType = _departmentDbcontext.Department.Where(z => z.Id == departmentId).Select(c => c.PositionType).FirstOrDefault();
            if (positionType == PositionType.Admin)
                return _departmentDbcontext.Employee.Where(z => z.Manage == departmentId).OrderBy(c => c.CreatedOn).ToList();
            else
                return _departmentDbcontext.Employee.Where(z => z.Id == employeeId && z.DepartmentId == departmentId).OrderBy(c => c.CreatedOn).ToList();
        }
    }
}
