import { connect } from "react-redux"
import Card from "../Card/Card"

function Favorites({myFavorites , onClose}) {
    return <div>
        {
            myFavorites.map((character)=>{
                return <Card key={character.id}
                    id = {character.id}
                    name = {character.name} 
                    species = {character.species}
                    gender = {character.gender}
                    image = {character.image}
                    onClose = {onClose}
                />
            })
        }
    </div>
}

function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps)(Favorites)
