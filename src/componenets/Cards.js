import React ,{useState} from 'react'

export default function Cards(props){
    console.log(props)
    let{card_id,name, type, annual_fee,img} =props.cards
    const [points, newpoints] = useState(props.cards.points)
    return<div>
        <span>Card:{name}</span>
        <span>Type:{type}</span>
        <span>Fee:${annual_fee}</span>
        <span>Points:{props.cards.points}</span>
        <img src={img} alt="cards pics"/>
        <button onClick={()=>props.updateCard(card_id,points)}>Edit</button>
        <input name='points' placeholder='newpoints' onChange={(event)=>{
            newpoints(event.target.value)
        }}/>
        <button onClick={()=>props.deleteCard(card_id)}>Delete</button>
    </div>
}

// state  newpoints , input box  states
//change  class componenet 