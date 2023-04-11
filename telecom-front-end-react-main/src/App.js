import './App.css';
import Navbar from './components/Navbar';
import MobilePlans from './components/MobilePlans';
import Login from './components/Login';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,
          Routes,
          Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Orders from './components/Orders';
import BroadBandPlans from './components/BroadBandPlans';
import Account from './components/Account';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <ToastContainer position="bottom-center" autoClose={1000}/>
        <Routes>
        <Route exact path="/"  element={<Home key = "home"/>}/>
        <Route exact path="/orders"  element={<Orders key = "orders"/>}/>
        <Route exact path="/plans"  element={<MobilePlans   key = "plans"/>}/>
        <Route exact path="/broadband"  element={<BroadBandPlans   key = "broadband"/>}/>
        <Route exact path="/account"  element={<Account   key = "account"/>}/>
        <Route exact path="/login"  element={<Login   key = "login"/>}/>
        <Route exact path="/cart"  element={<Cart   key = "cart"/>}/>

        <Route exact path="/signup"  element={<SignUp   key = "signup"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
