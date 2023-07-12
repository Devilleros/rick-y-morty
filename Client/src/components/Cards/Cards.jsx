import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters , onClose } = props;
   return <div className={styles.divCards}>
      {characters.map(character =>{
         return <Card key={character.id}
            id = {character.id}
            name = {character.name} 
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            onClose = {onClose}
            />
            
            // return <div key={character.id}>
         //    <h3>{character.name}</h3>
         //    <h3>{character.species}</h3>
         //    <h3>{character.gender}</h3>   
         //    <img src={character.image} alt="" />
         // </div>
      })}
   </div>;
}
