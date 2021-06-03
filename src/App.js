import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Navbar/>
      
      
      <Switch>
      <Route path = "/" component={Home} exact />

      </Switch>
   
      <Footer/>

    </Router>
  );
}

export default App;

