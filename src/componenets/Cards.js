import React from 'react'

export default function Cards(props){
    console.log(props)
    let{card_id,name, type, annual_fee,points,img} =props.cards
    return<div>
        <span>{name}</span>
        <span>{type}</span>
        <span>{annual_fee}</span>
        <span>{points}</span>
        <img src={img} alt="cards pics"/>
        <button onClick={()=>props.deleteCard(card_id)}>Delete</button>
    </div>
}