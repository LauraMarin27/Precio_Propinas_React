import { useMemo } from "react"
import { Order } from "../types"
import { formarCurency } from "../helpers"

type OrderTotalsProps = {
    order: Order[],
    tip: number,
    placeOlder : () => void
}
export default function OrderTotals({order,tip,placeOlder}: OrderTotalsProps) {

    const subtotal = useMemo(() => order.reduce((total,item)=>total+ (item.quantity * item.price),0), [order])
    const tipAmount = useMemo(()=> subtotal * tip,[tip, order])
    const totalPagar = useMemo(() => subtotal + tipAmount, [tip,order])
  return (
    <>
    <div className="space-y-3">
        <h2 className=" font-black text-2xl">Totales y Propina</h2>
        <p>Subtotal a pagar:{''}
            <span className=" font-bold">{formarCurency(subtotal)}</span>
        </p>
        <p>Propina:{''}
            <span className=" font-bold">{formarCurency(tipAmount)}</span>
        </p>
        <p>Total a pagar:{''}
            <span className=" font-bold">{formarCurency(totalPagar)}</span>
        </p>
        
    </div>
    <div className="">
    <button className="w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-10"
    
    disabled = {totalPagar===0}
    onClick={placeOlder}
    >
        Guardar orden
    </button>
    <button className="h-8 ">
        Reiniciar
    </button>
    </div>
    </>
  )
}
