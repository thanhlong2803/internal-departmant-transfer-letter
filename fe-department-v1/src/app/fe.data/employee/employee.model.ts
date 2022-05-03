export class Login {
    constructor(
        public email: string = "",
        public password: string = "",
    ) { }
}

export class Employee {
    constructor(
        public id: number,
        public email: string = "",
        public fullName: string = "",
        public token: string = "",
        public permission: string = "",
        public departmentId: number,
        public departmentName: string = "",
        public postionName: string = "",
        public postionId: number
    ) { }
}


export class EmployeeList {
    constructor(
        public email: string = "",
        public fullname: string = "",
        public lastname: string = "",
        public firstname: string = "",
        public postionName: string = ""
    ) { }
}

export class CreateEmployee {
    constructor(
        public id: number,
        public firstname: string = "",
        public lastname: string = "",
        public email: string = "",
        public fullname: string = "",
        public password: string = "",
        public confirmPassword: string = "",
        public active: boolean = false, 
        public departmentId: number,
        
        public postionName: string = "",
        public postionId: number
    ) { }
}

export enum PositionType {
    Admin = 1,
    Nember = 2
}