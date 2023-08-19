
export interface LoginParams {
    username: string
    password: string
  }

  export interface RegisterParams {
    username: string,
    email:string,
    password: string,
    cPassword:string
  }

  export interface AuthInfo {
    token:string,
    userId:string
}


export interface User {
  _id?:string,
  email?:string,
  password:string,
  username:string,
  superadmin:boolean,
  profileImage?:string,
}