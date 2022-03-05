import './App.css';

import AddTransaction from './components/AddTransaction/AddTransaction';
import Balance from './components/Balance/Balance';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header/Header';
import TransactionList from './components/Transactions/TransactionList';

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <Balance />
        <AddTransaction />
        <TransactionList />
      </GlobalProvider>
    </div>
  );
}

export default App;
