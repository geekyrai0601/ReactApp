import logo from './logo.svg';
import './App.css';
import Login from './login';
import Demo from './demo';
import CitiesList from './citieslist'
import DeptDetails from './deptdetails'

function App() {
  let uname="Swapz";
  return (


    
    <div>
      <h1>
        username: {uname}
      </h1>
      {/* <Login/>

      <h3>
        Developing web component in react
      </h3> */}
      
      {/* <Demo/> */}
      <CitiesList/>
      <DeptDetails/>      
      
    </div>
  );
}

export default App;
