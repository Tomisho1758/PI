import axios from "axios";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/navbar/Nav.jsx"
import About from "./components/about/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import "./App.css";

// aqui

function App() { 
  const navigate = useNavigate(); // Importar useNavigate !!!!!
  const [access, setAccess] = React.useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "123456";

  function logout() {
    setAccess(false);
  }
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);
 const [characters, setCharacters]=  useState([]);
  function onSearch(id){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
           
         }
      }).catch(()=>window.alert('¡No hay personajes con este ID!'));
   }
   function onClose (id){
 
    setCharacters (
      characters.filter((pj)=>{
        return pj.id !== Number(id);
      })
    )
  }
  // const [characters, setCharacters] = useState(); // [{}]

  const location = useLocation();



  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
    
    

    <Routes>
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path= "/home" element={<Home characters={characters} onClose={onClose}/>}></Route>
       <Route path="/about"element={<About/>}> </Route>
       <Route path="/detail/:id"element={<Detail/>}> </Route>
       <Route path="*" element={""}></Route>     
    </Routes>
      
   
    </div> 
  );


}

export default App;
