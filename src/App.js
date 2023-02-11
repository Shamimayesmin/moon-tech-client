
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import LongForm from './components/pages/LongForm';
import ProductProvider from './context/ProductProvider';
import routes from './routes/routes';
// import ShortForm from './components/pages/ShortForm';

function App() {
  return (
    <div className="App">
      {/* <ShortForm></ShortForm> */}
      {/* <LongForm></LongForm> */}

      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
