import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.divBackground}>
         <div className={styles.divPortal}>
            <button type="button" class="btn btn-danger" className={styles.button} onClick={props.onClose}>X</button>
            <h2 class="shadow-none p-3 mb-5 bg-light rounded">{props.name}</h2>
            <h2 class="shadow-none p-3 mb-5 bg-light rounded">{props.species}</h2>
            <h2 class="shadow-none p-3 mb-5 bg-light rounded">{props.gender}</h2>
            <img className={styles.image} src={props.image} alt="" />
         </div>
      </div>
   );
}
