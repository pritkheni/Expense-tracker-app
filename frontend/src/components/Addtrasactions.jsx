import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Addtrasactions() {
    const {addTransaction,lastindex} = useContext(GlobalContext)
    console.log(`=================================================`);
    console.log(lastindex);
    console.log(`=================================================`);
    const [transaction,setTrasaction] = useState({
        text:'',
        amount:0
    })

    const onSubmit = e =>{
        e.preventDefault();
        const newTrasaction = {
            ...transaction,id:lastindex+1
        }
        console.log(newTrasaction);
        addTransaction(newTrasaction)
        setTrasaction({
            text:'',
            amount:0
        })
    }


    return (
    <div className='divide-y-2 divide-slate-300'>
        <h3 className='text-xl font-bold'>Add new Trasactions</h3>
        <form onSubmit={onSubmit}>
            <div className='my-3'>
                <label className='font-bold my-1 inline-block text-base mb-1' htmlFor='text'>
                    Text
                </label>
                <input className="block border border-gray-300 shadow-lg w-full p-1 text-base rounded" type="text" id="text" placeholder='Enter text...' value={transaction.text} onChange={e => setTrasaction((prev) => ({...prev,text:e.target.value}))}/>
            </div>
            <div className='my-3'>
                <label className='font-bold my-1 inline-block text-base mb-1' htmlFor='text'>
                    Amount <br />
            (negative - expense, positive - income)
                </label>
                <input className='block border border-gray-300 shadow-lg w-full p-1 text-base rounded' type="number" id="text" placeholder='Enter Amount...' value={transaction.amount} onChange={e => setTrasaction(prev => ({...prev,amount:parseInt(e.target.value)}))}/>
            </div>
            <button className="cursor-pointer bg-violet-500 p-2 w-full rounded shadow-md mt-5 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none">Add transaction</button>
        </form>
    </div>
  )
}
