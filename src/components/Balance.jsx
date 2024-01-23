import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function Balance() {
  const {transactions} = useContext(GlobalContext)
  const total = transactions.reduce((prev,obj) => prev + obj.amount,0).toFixed(2)
  console.log(total);
  return (
    <>
        <h4 className='uppercase'>Your Balance</h4>
        <h1 id="balance" className='tracking-wide font-bold text-2xl'>${total}</h1>
    </>
  )
}
