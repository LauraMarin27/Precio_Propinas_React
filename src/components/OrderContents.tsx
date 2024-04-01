import { formarCurency } from "../helpers"
import { MenuItems, Order } from "../types"

type OrderContentsProps = {
    order: Order[],
    removeItem: (id:MenuItems['id']) => void
}

export default function OrderContents({order, removeItem}:OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className=" space-y-3 mt-10">
            {
                order.map(item => (
                    <div key={item.id}
                    className=" flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center">
                        <div className="">
                        <p className=" text-lg">
                            {item.name} - {formarCurency( item.price)}
                        </p>
                        <p className=" font-black">
                            Cantidad: {item.quantity} - {formarCurency(item.price * item.quantity)}
                        </p>
                        </div>
                        <button className=" bg-red-600  h-8 w-8 rounded-full text-white font-black"
                        onClick={()=>removeItem(item.id)}>
                            X
                        </button>

                    </div>
                ))
            
            }

        </div>

    </div>
  )
}
