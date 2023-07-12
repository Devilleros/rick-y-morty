import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (evento) =>{
      //console.log(evento.target.value);
      setId(evento.target.value);
   }

   const search = (id) =>{
      props.onSearch(id);
      setId ("");
   }

   return (
      <div className={styles.divNavBar}>
         <input className={styles.input} type='search' onChange={handleChange} value={id}/>
         <button className={styles.button} onClick={() => search(id)}>Agregar</button>
      </div>
   );
}
