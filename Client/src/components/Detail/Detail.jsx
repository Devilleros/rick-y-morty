import React from "react";
import axios from "axios";
import styles from "./Detail.module.css"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function Detail() {
    const {id} = useParams ();
    //console.log(id);
    const [charDetail , setCharDetail] = useState({});

    useEffect(()=>{
        axios(`http://rickandmortyapi.com/api/character/${id}`)
        .then((({data}) =>{
            if(data.name){
                setCharDetail(data);
            }else{
                window.alert("No hay personaje con ese ID")
            }
        })).catch(err => alert(err.response.data.error))
    },[id])
    return <div className={styles.div}>
        <h1>{charDetail.name}</h1>
        <h2>{charDetail.status}</h2>
        <h2>{charDetail.origin?.name}</h2>
    </div>
}

export default Detail;