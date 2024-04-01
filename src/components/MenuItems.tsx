import type { MenuItems} from "../types"

type MenuItemsProps = {
    item: MenuItems,
    addItem:(item: MenuItems) => void
}

export default function MenuItems({item, addItem} : MenuItemsProps) {
  return (
    
    <button className=" border-2 border-teal-300 w-full flex justify-between hover:bg-teal-200" onClick={()=> addItem(item)}>
    <p className=" py-4 text-2xl ">{item.name}</p>
    <p className=" font-black text-2xl py-2 px-4">${item.price}</p>
    
    </button>
    
  )
}
