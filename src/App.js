import logo from './logo.svg';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CalculatorCard from './components/CalculatorCard'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className='content'>
        <CalculatorCard/>
    </Container>
  );
}

export default App;
