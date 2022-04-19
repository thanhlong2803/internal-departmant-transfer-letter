using be.Department.Helpers;
using be.Department.Middleware;
using be.Service;
using be.Services;
using Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//register configugration 
ConfigurationManager configuration = builder.Configuration;

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add setting connection database

builder.Services.AddDbContext<SettingDbcontext>(opt => opt.UseSqlServer(configuration.GetConnectionString("MainConnection"),
    b => b.MigrationsAssembly("Api Department")));

// configure strongly typed settings object
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// Add services to the container.
builder.Services.AddScoped<IDepartmentService, DepartmentService>();
builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();

builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();

builder.Services.AddScoped<IJwtUtils, JwtUtils>();



var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(x => x
               .AllowAnyMethod()
               .AllowAnyHeader()
               .SetIsOriginAllowed(origin => true) // allow any origin
               .AllowCredentials()); // allow credentials

//global error handler
app.UseMiddleware<be.Department.Middleware.ErrorHandleerMiddleware>();

// custom jwt auth middleware
app.UseMiddleware<CustomMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();
