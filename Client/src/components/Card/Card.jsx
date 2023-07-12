import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFav, addFav} from "../../redux/actions/actions";
import { useState, useEffect } from "react";

function Card(props) {
   const {onClose , id} = props
   let name = "";
   let name2 = props.name;
   if(name2.length > 22){
      name = name2.slice(0,20) + "...";
    }else{
      name = name2;
   }

   const [isFav , setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      }else{
         setIsFav(true)
         props.addFav( props)
      }
   }

   const closeCard = () =>{
      setIsFav(false)
      props.removeFav(props.id)
   }

   return (

      <div className={styles.divBackground} key={props.id}>
         <div className={styles.divBackground2}>
            {
               isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
            }
            <button className={styles.button} onClick={()=> {onClose(id); closeCard()}}>X</button>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
               <h3 className={styles.nameCard}>{name}</h3>
               <img className={styles.image} src={props.image} alt="" />
               <h3 className={styles.speciesCard}>{props.species}</h3>
               <h3 className={styles.genderCard}> {props.gender}</h3>
            </Link>
         </div>
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}
function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps , mapDispatchToProps)(Card)




//class="shadow-none p-3 mb-5 bg-light rounded"
//type="button" class="btn btn-danger"
//onClick={console.log(props)}