import { useMemo } from 'react'

export default function Transaction({transaction,deleteTransaction}) {
    const sign = useMemo(() => (transaction.amount<0)? '-' : '+',[transaction.amount])
    console.log('hi there');
    console.log(deleteTransaction);
  return (
    <li className={`group bg-white shadow-md text-gray-500 flex justify-between relative p-2 my-4 border-r-4 ${sign=='-'? 'border-red-500':'border-green-500'}`}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className='cursor-pointer bg-red-500 text-white text-xl px-2 text-center absolute opacity-0 top-1/2 left-0 -translate-x-full -translate-y-1/2 transition-opacity ease delay-150 group-hover:opacity-100' onClick={() => deleteTransaction(transaction._id)}>x</button>
    </li>
  )
}
