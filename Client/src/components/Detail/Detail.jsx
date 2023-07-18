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
        //axios(`http://rickandmortyapi.com/api/character/${id}`)
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((({data}) =>{
            if(data.name){
                setCharDetail(data);
            }else{
                window.alert("No hay personaje con ese ID")
            }
        })).catch(err => alert(err.message)/*alert(err.response.data.error)*/)
    },[id])
    return <div className={styles.div}>
        <h1>Name: {charDetail.name}</h1>
        <h2>Status: {charDetail.status}</h2>
        <h2>Origin: {charDetail?.origin}</h2>
    </div>
}

export default Detail;