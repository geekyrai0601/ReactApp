import logo from './logo.svg';
import './App.css';
import UserCard from './Usercards';
function App() {
const users = [
    {
        name: "George Bluth",
        email: "george.bluth@reqres.in",
        imageUrl: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        name: "Janet Weaver",
        email:"janet.weaver@reqres.in",
        imageUrl: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        name: "Emma Wong",
        email: "emma.wong@reqres.in",
        imageUrl: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      name: "Eve Holt",
      email: "eve.holt@reqres.in",
      imageUrl: "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    name: "Charles Morris",
    email: "charles.morris@reqres.in",
    imageUrl: "https://reqres.in/img/faces/5-image.jpg"
  },
  {
  name: "Tracey Morris",
  email: "tracey.ramos@reqres.in",
  imageUrl: "https://reqres.in/img/faces/6-image.jpg"
  }
  ];
  return (
    <div className="card-container">
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
  );
}

export default App;
