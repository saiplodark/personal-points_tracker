import React from 'react'

export default function Cards(props){
    console.log(props)
    let{card_id,name, type, annual_fee,points,img} =props.cards
    return<div>
        <span>Card:{name}</span>
        <span>Type:{type}</span>
        <span>Fee:${annual_fee}</span>
        <span>Points:{points}</span>
        <img src={img} alt="cards pics"/>
        <button onClick={()=>props.updateCard(card_id)}>Edit</button>
        <button onClick={()=>props.deleteCard(card_id)}>Delete</button>
    </div>
}