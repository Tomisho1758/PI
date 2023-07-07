import React from "react";
import style from "./Formu.module.css"
import validation from "./validation";

function Formu(props){
    
      const [userData, setUserData] = React.useState({
        email: "",
        password: "",
      });
    
      const [errors, setErrors] = React.useState({});
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value,
        });
    
        setErrors(
          validation({
            ...userData,
            [name]: value,
          })
        );
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
      };


return(
  <div className={style.formContainer}>  
     <div className={style.formTitle}>
       <h1>Shut the fuck up about Moonmen!</h1>    
    </div>
 <forms onSubmit={handleSubmit}>
    <div className={style.credentials}>
        <label>Username</label>
        <input className={style.input}
         type="text" placeholder= "wabalabadubdub@flarg.com" name="email"
         value={userData.email}
         onChange={handleChange} />
         <p className={style.error}>{errors.email && errors.email}</p>
    </div>
    <div className={style.credentials}>
        <label>Password</label>
        <input className={style.input} type="password" name="password"
        value={userData.password}
        onChange={handleChange}/>
        <p className={style.error}>{errors.password && errors.password}</p>
    </div>
    <button type ="submit" className={style.submitBtn}>Submit</button>

 </forms>
  </div>

    )
}
export default Formu