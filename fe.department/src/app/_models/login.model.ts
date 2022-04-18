
export class LoginRequest {
    username: string | undefined;
    password: string | undefined;
}

export class LoginResponse {
    firstname: string | undefined;
    lastname: string | undefined;
    fullname: string | undefined;
    token : string | undefined;
    permission : Array<any> | undefined 
}