import React from "react";
import { connect } from "react-redux";
import {addFavorite, removeFavorite } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from './Card.module.css';


// const  navigate = useNavigate()
// {navigate(`/detail/${character.id}`)}
//  function navigateHandler(){
//   navigate(`/detail/${character.id}`)
//  }
const Card = ({ 
  name,
 species,
 onClose,
 gender,
 status,
 origin,
 image,
 key,
 id,
 favorites,
 character}) =>{
const [fav, setFav] = useState(false);
function handleFavorite(character){
  if (!fav){setFav(true)}
else{removeFavorite(character)
setFav(false)}
}



  return (
    <div className={styles.div}>
      <button className={styles.btn} onClick={()=>onClose(id)}> X </button>
      {
  fav ? (
     <button onClick={()=>handleFavorite(character.id)}>❤️</button>
  ) : (
     <button onClick={()=>handleFavorite(character)}>🤍</button>
  )
}
      <Link to={`/detail/${id}`} ><img className={styles.image} src={image} alt={name} /></Link>
      <h1 className={styles.name}>{name}</h1>

      <div className={styles.data} >
        <h4 >{species}</h4>
        <h4 >{gender}</h4>
        {<h4 className={styles.text}>{origin}</h4> }
        { <h4 className={styles.text}>{status}</h4>  }
      </div>
    </div>
  );





};

const mapDispachToProps = ( dispatch) => {
  return{
    addFavorite: (character)=> dispatch(addFavorite(character)),
    removeFavorite: (id)=> dispatch(removeFavorite(id))
  }
  
  }
  const mapStateToProps = ( state ) => {
    return {
      favorites: state.myFavorites
    }
  }
export default connect(mapStateToProps, mapDispachToProps)(Card)
