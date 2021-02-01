
import './App.css'
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Addmechanic from './components/add_mechanic/layout_form.js'
import MechanicByLocation from './components/MechanicByLocation';
import Footer from './components/Footer';
function App() {
  return (
   <Router>
  <Switch>
   
   <Route path='/addmechanic' component={Addmechanic} />
   <Route path='/:location'   component={MechanicByLocation}/>
   <Route path='/' exact  component={Frontpage}/>
   </Switch>
  <Footer />
   </Router>
   
    );
}

export default App;
