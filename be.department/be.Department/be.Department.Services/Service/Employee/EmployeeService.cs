using be.Data;
using be.Data.Model.EmployeeModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace be.Services.Service.Employee
{
    //Create and Validate JWT Tokens + Use Custom JWT Middleware
    public class EmployeeService : IEmployeeService
    {
        public EmployeeService()
        {

        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            throw new NotImplementedException();
        }

        public List<EmployeeResponse> GetEmployeeInDepartments(long departmentId)
        {
            throw new NotImplementedException();
        }
    }
}
