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

export enum PositionType {
    Admin = 1,
    Nember = 2
}