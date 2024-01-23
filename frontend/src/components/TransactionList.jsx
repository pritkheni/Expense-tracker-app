import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction";
export default function TransactionList() {
  const {transactions,deleteTransaction} = useContext(GlobalContext)
  console.log(transactions);
  return (
    <div className='divide-y-2 divide-slate-300 my-7'>
        <h3 className='text-xl font-bold'>History</h3>
        <ul>
          {transactions.map(transaction => <Transaction key={transaction._id} transaction={transaction} deleteTransaction={deleteTransaction}/>)}
        </ul>
    </div>
  )
}
