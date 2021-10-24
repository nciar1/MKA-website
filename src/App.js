import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage'
import ContactPage from './pages/contactPage'

function App() {
  return (
    <Router>
      <Navbar/> 
      
      <Switch>
      <Route path = "/" component={Home} exact />
      <Route path = "/Contact" component = {ContactPage} />
      <Route component = {ErrorPage} />
    </Switch>
    
    <Footer/>
 </Router>
);
}
export default App;

