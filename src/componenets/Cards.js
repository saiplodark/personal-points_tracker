import React from 'react'

export default function Cards(props){
    console.log(props)
    let{name, type, annaul_fee,points,img} =props.cards
    return<div>
        <span>{name}</span>
        <span>{type}</span>
        <span>{annaul_fee}</span>
        <span>{points}</span>
        <span>{img}</span>
    </div>
}