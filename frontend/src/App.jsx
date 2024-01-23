import Addtrasactions from "./components/Addtrasactions"
import Balance from "./components/Balance"
import IncomeExpances from "./components/IncomeExpances"
import TransactionList from "./components/TransactionList"
import { GlobalProvider } from "./context/GlobalState"

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
      <h1 className="tracking-widest font-bold text-xl">Expance Tracker</h1>
      <div className="w-96 mx-auto my-10">
        <GlobalProvider>
          <Balance/>
          <IncomeExpances/>
          <TransactionList/>
          <Addtrasactions/>
        </GlobalProvider>

      </div>
    </div>
  )
}

export default App
