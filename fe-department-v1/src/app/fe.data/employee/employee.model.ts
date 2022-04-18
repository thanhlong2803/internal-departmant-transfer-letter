export class Login {
    constructor(
        public username: string = "",
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