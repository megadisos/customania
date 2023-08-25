import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

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


export interface SideBarMenu {
    name:string,
    icon:IconDefinition,
    enabled:boolean,
    selected:boolean
}


export interface Tabs {
    id:string
    name:string
    enabled:boolean
}