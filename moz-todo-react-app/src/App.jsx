import { createRoot } from 'react-dom/client'
import Home from '/src/pages/Home.jsx'
import Counter from '/src/pages/Counter.jsx'
import StopWatch from '/src/pages/StopWatch.jsx'
import ToDolist from '/src/pages/ToDolist.jsx'
import UserGreeting from '/src/pages/UserGreeting.jsx'
// import List from '/src/pages/List.jsx'

import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  // const Fruits=[
  //   {id:1 ,name:'apple', calories: 120}, {id: 2,name:'banana', calories: 303}, {id:3 ,name:'pineaaple', calories: 23}, {id: 4,name:'orange', calories: 233}];
   
  // const vegies=[
  //     {id:1 ,name:'brocolli', calories: 120}, {id: 2,name:'aubergine', calories: 303}, {id:3 ,name:'tomatto', calories: 23}, {id: 4,name:'potato', calories: 233}];


  const router= createBrowserRouter(
    [
      {
        path: '/', 
        element: <Home />
      },
      {
        path: '/counter', 
        element: <Counter />
      },
      {
        path: '/todo', 
        element: <ToDolist />
      },
      {
        path: '/stopwatch', 
        element: <StopWatch />
      },
    ]
  );
  return (
    <div>
      <UserGreeting isLoggedIn={true} username='Shrey' />
      <Navbar />
      <RouterProvider router={router} />
      <br />
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)