export class Login {
    constructor(
        public email: string = "",
        public password: string = "",
    ) { }
}

export class Employee {
    constructor(
        public email: string = "",
        public fullname: string = "",
        public token: string = "",
        public permission: string = "",
    ) { }
}