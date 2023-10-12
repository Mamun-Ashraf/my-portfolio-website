import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routers';

function App() {
  return (
    <div className="min-h-screen bg-[#0e1729]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;