import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import NavbarTw from './layout/navbar/NavbarTw';
import Footer from './layout/footer/Footer';
import Home from './pages/home/Home.jsx';
import Gig from './pages/gig/Gig.jsx';
import Gigs from './pages/gigs/Gigs.jsx';
import Orders from './pages/orders/Orders.jsx';
import MyGigs from './pages/myGigs/MyGigs.jsx';
import Add from './pages/add/Add.jsx';
import Messages from './pages/messages/Messages.jsx';
import Message from './pages/message/Message.jsx';

function App() {
  const Layout = () => {
    return (
      <>
        <NavbarTw />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/gigs', element: <Gigs /> },
        { path: '/gig/:id', element: <Gig /> },
        { path: '/orders', element: <Orders /> },
        { path: '/mygigs', element: <MyGigs /> },
        { path: '/add', element: <Add /> },
        { path: '/messages', element: <Messages /> },
        { path: '/message/:id', element: <Message /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
