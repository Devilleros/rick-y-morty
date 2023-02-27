import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.divBackground}>
         <div className={styles.divPortal}>
            <button onClick={props.onClose}>X</button>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <img className={styles.image} src={props.image} alt="" />
         </div>
      </div>
   );
}
