import '/src/css/Navbar.css';
// import Button from '/src/pages/Button.jsx'

function Navbar() {
  return (
    <>
        {/* <Button /> */}
        <nav className="navbar">
           <button><a href="/">Home</a></button> 
           <button><a href="/counter">Fetch</a></button> 
           <button><a href="/todo">ToDolist</a></button> 
           <button><a href="/stopwatch">Stop Watch</a></button> 
           <button><a href="/form">Hook Form</a></button> 
           <button><a href="/task-form">Task Form</a></button> 
        </nav>
    </>
  )
}

export default Navbar
