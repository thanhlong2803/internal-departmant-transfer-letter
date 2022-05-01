# How to Internal department transfer letter
 Web Management Internal department transfer letter  using Angular 12, NET6 Web API CRUD Operation With Entity Framework Core And SQL Server

# Firstly, I can draw a lot of description and i can do it.

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/InternalDepartment.png)

# Create a table in the SQL server and write the description per table.

 **Below is all table created and the description for the project Internal Department Transfer Letter.**

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/struct_diagram.png)

Do you know the project internal department transfer letter has tabled the department and table employee? So per the department will many the employee. The employee position the descriptions the most important aspects of each position. The position description outlines the purpose, minimum requirements, and essential functions.
The table employee_file has contained files for employees and per employee will use many files. The employee is created, delete, edit so the employees can internal department transfer letter. The employee_role description per employee will have many roles.
Finally, The table settingtransferletter description is the most important in a sent document, it helps to set up config between department and  example ( from department A sent document to  department B, from department B can not be sent the document to department C)

# Show struct web api and front-end.
| Description build Net 6   | Description build angular |
|--|--|
| ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/be2.png) | ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/fe3.png) |

# Love Angular 12 and NET6. I read a lot of books about it. We should create many projects. Let me start to create a small the project 
| Task | Description | Mockup ui/ux |
|--|--|--|
|  1| User Registration and Login|![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/login.png) How is create the function login and apply WJT for project ? The first, we need install **System.IdentityModel.Tokens.Jwt** after setting for middleware can check validate token of user after is logined, set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later) ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/validate.png) **After we creare the function CustomMiddleware:**  ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/invoke.png) **After we create the function GenerateToken(), It help generate token that is valid for 7 days when user is logined** ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/GenerateToken.png) **How is handle error displaying in middware?  we are create the function ErrorHandlerMiddleware() show error in middleware**  ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/invokeErrorMiddware.png) and **custom exception class for throwing application specific exceptions** ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/AppException.png) **I never forget configuration middware in program.cs** ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image3/middware.png)  |
|2|Page main home see file of user within department|status : pending|
|3|Upload and download file for department |status : pending|
|4|Setting sent file for department |status : pending|




