import logo from './logo.svg';
import '../src/scss/main.scss';
import Homepage from './screens/Homepage';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <BrowserRouter basename="/princessAkshata">
      <AppRoutes />
      <ToastContainer theme="colored" hideProgressBar={true} limit={3} autoClose={1000} />  
    </BrowserRouter>
  );
}

export default App;
