import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(character =>{
         return <Card key={character.id}
            name = {character.name} 
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
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
