import { connect , useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCart,orderCard } from "../../redux/actions/actions"
import styles from "./Favorites.module.css"

function Favorites({myFavorites , onClose}) {
    const dispatch = useDispatch();

    const handleOrder = (event)=>{
        dispatch(orderCard(event.target.value))
    }

    function handleFiltert(event) {
        dispatch(filterCart(event.target.value))
    }
    return <div>
        <div>
            <select onChange={handleOrder}>
                <option value="">Order:</option>
                <option value="A">Ascendente</option>
                <option value="B">Desendente</option>
            </select>
            <select onChange={handleFiltert}>
                <option value="">Filter:</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="uknown">Unknown</option>
            </select>

        </div>
        <div className={styles.divCardsFav}>
        {myFavorites.map((character)=>{
                return <Card key={character.id}
                    id = {character.id}
                    name = {character.name} 
                    species = {character.species}
                    gender = {character.gender}
                    image = {character.image}
                    onClose = {onClose}
                />
            })}
        </div>
    </div>
}

function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps)(Favorites)
