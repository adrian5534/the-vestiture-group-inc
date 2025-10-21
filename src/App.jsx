import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/route.jsx';
import './App.css';
import './styles/home.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;