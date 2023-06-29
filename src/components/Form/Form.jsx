import { useState } from "react"
import styles from "./Form.module.css"
import validate from "./validation"

export default function Form ({login}){
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors , setErrors] = useState({
        email: "",
        password: ""
    })

    function handleChange (e){
        setUserData({...userData , [e.target.name]: e.target.value})
        setErrors(validate({...userData , [e.target.name]: e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(userData)
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input type="text" value={userData.email} name="email" onChange={handleChange}/>
        <p>{errors.email}</p>
        <label >Password:</label>
        <input type="password" value={userData.password} name="password" onChange={handleChange}/>
        <p>{errors.password}</p>
        {/* <input type="submit" value="Login"/> */}
        <button className={styles.button}>Login</button>
    </form>
}