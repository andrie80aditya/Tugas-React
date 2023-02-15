import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Login Page</p>
      </header>
      <body className='App-body'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="email" placeholder="Masukan alamat E-Mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Ingat Saya" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </body>
    </div>
  );
}

export default App;
