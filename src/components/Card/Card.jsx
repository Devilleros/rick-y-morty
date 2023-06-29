import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   const {onClose , id} = props
   let name = "";
   let name2 = props.name;
   if(name2.length > 22){
      name = name2.slice(0,20) + "...";
    }else{
      name = name2;
   }
   return (

      <div className={styles.divBackground} key={props.id}>
         <div className={styles.divBackground2}>
            <button className={styles.button} onClick={()=> onClose(id)}>X</button>
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

//class="shadow-none p-3 mb-5 bg-light rounded"
//type="button" class="btn btn-danger"
//onClick={console.log(props)}