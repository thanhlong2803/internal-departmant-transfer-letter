using be.Data;
using be.Data.Model.EmployeeModel;
using be.Service;

namespace be.Services
{
    //Create and Validate JWT Tokens + Use Custom JWT Middleware
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IDepartmentRepository _departmentRepository;

        public EmployeeService(IEmployeeRepository employeeRepository, IDepartmentRepository departmentRepository)
        {
            _employeeRepository = employeeRepository;
            _departmentRepository = departmentRepository;
        }

        public Employee GetEmployeeByEmail(AuthenticateRequest model)
        {
            var employee = _employeeRepository.GetEmployeeByEmail(model);
            return employee;
        }

        public List<EmployeeResponse> GetEmployeeByDepartmentId(long employeeId, long departmentId)
        {
            var employeeByDepartmentServices = _employeeRepository.GetEmployeeByDepartmentId(employeeId, departmentId);
            var department = _departmentRepository.DepartmentById(departmentId);

            var employeeResponses = new List<EmployeeResponse>();

            foreach (var employeeByDepartment in employeeByDepartmentServices)
            {
                var employeeResponse = new EmployeeResponse();
                employeeResponse.Id = employeeByDepartment.Id;
                employeeResponse.Email = employeeByDepartment.Email;
                employeeResponse.Firstname = employeeByDepartment.FirstName;
                employeeResponse.Lastname = employeeByDepartment.LastName;
                employeeResponse.PostionId = department.PositionType;
                employeeResponses.Add(employeeResponse);
            }

            return employeeResponses;
        }
    }
}
