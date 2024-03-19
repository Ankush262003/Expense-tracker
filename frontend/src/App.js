import './App.css';

// Pages:
import AddExpenseForm from './pages/AddExpenseForm';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Transection from './pages/Transection';



function App() {
  return (
    <div className="App">
      <Layout/>
      <Home/>
      <Profile/>
      <Transection/>
      <Setting/>
      <AddExpenseForm/>
    </div>
  );
}

export default App;
