export interface CityInfo {
    region:string,
    c_digo_dane_del_departamento:string,
    departamento:string,
    c_digo_dane_del_municipio:string,
    municipio:string
}

export type NotiStyck = "default" | "error" | "success" | "warning" | "info" | undefined

export type ModalTypes = "Login" | "Logout" | 'Register'
export type ModalOpts = "Open" | "Close"

export interface ModalData {
    type:ModalTypes,
    opts:ModalOpts,
    msg?:string
}
