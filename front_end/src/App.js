import dotenv from 'dotenv';
import './App.css'
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Addmechanic from './components/add_mechanic/layout_form.js'
import MechanicByLocation from './components/MechanicByLocation';
import Footer from './components/Footer';
import Header from'./components/Header';
dotenv.config();
function App() {
  return (
   <Router basename={process.env.REACT_APP_BASENAME}>
  
  <Switch>
   
   <Route path='/addmechanic' component={Addmechanic} />
  
   <Route path='/:location'   component={MechanicByLocation}/>
   <Route path='/'   component={Frontpage}/>
   </Switch>
  <Footer />
   </Router>
   
    );
}

export default App;
