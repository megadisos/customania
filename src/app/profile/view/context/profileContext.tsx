import { SideBarMenu } from "@/shared/models/shared";
import { faCreditCard, faHeart, faScrewdriverWrench, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { createContext, Dispatch, FC, SetStateAction,useState } from "react";



type ProfileContext = {
    totalPurchases: number
    setTotalPurchases: Dispatch<SetStateAction<number>>
     menus: SideBarMenu[]
     setMenus: Dispatch<SetStateAction<SideBarMenu[]>>
      onCLickMenu: (menuName: string) => void
};
const menusAvailables:SideBarMenu[] = [
  {name:'Mis compras',icon:faCreditCard,enabled:true,selected:true},
  {name:'Me gusta',icon:faHeart,enabled:true,selected:false},
  {name:'Mi cuenta',icon:faUserLarge,enabled:true,selected:false},
  {name:'Admin',icon:faScrewdriverWrench,enabled:false,selected:false},
]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProfileContext = createContext<ProfileContext>(
  {} as ProfileContext
);

export const ProfileProvider = ({ children }:any) => {
    const [totalPurchases,setTotalPurchases] = useState(0)
    const [menus,setMenus] = useState(menusAvailables)
    const onCLickMenu = (menuName:string) =>{
    const updateMenus = menus.map(menu=>{
      if(menu.name !== menuName) return {...menu,selected:false}
      return {...menu,selected:true}
    })
    setMenus(updateMenus)
}
  return (
    <ProfileContext.Provider
      value={{
        totalPurchases,
        setTotalPurchases,
        menus,
        setMenus,
        onCLickMenu
    }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
