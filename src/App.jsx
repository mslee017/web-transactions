import './App.css';
import { useEffect, useState } from 'react';
import { fetchData } from './api/data';
import Input from './components/Input';
import TransactionDisplay from './components/TransactionDisplay';

function App() {
  const [data, setData] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  const callMockData = async () => {
    const response = await fetchData();
    setData(response);
  };

  const handleChange = event => {
    setUserSearch(event.target.value);
  };

  useEffect(() => {
    callMockData();
  }, []);

  return (
    <>
      <div className="container">
        <Input handleChange={handleChange} value={userSearch} />
        <TransactionDisplay values={data} searchValue={userSearch} />
      </div>
    </>
  );
}

export default App;
