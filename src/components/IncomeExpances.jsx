import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export default function IncomeExpances() {
  const {transactions} = useContext(GlobalContext)
  console.log(`tr from income expance`);
  console.log(transactions);
  const [expanse,income] = transactions.reduce((pre,obj) =>{
    if(obj.amount < 0){
      return [pre[0]+Math.abs(obj.amount),pre[1]]
    }else{
      return [pre[0],pre[1]+obj.amount]
    }
  },[0,0])
  return (
    <div className='flex justify-between shadow-md p-4 mx-5 divide-x-2 divide-slate-200 my-4'>
        <div className='flex-1 text-center'>
          <h4 className='uppercase'>Income</h4>
          <p id="money-plus" className="text-xl tracking-wider my-1 text-green-500">+${income.toFixed(2)}</p>
        </div>
        <div className='flex-1 text-center'>
          <h4 className='uppercase'>Expense</h4>
          <p id="money-minus" className="text-xl tracking-wider my-1 text-red-500">-${expanse.toFixed(2)}</p>
        </div>
    </div>
  )
}
