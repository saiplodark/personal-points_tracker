import React ,{useState} from 'react'
import './Cards.scss'

export default function Cards(props){
    console.log(props)
    let{card_id,name, type, annual_fee,img} =props.cards
    const [points, newpoints] = useState(props.cards.points)
    return<div className='cards'>
        <img className='img' src={img} alt="cards pics"/>
        <span>Card:{name}</span>
        <span>Type:{type}</span>
        <span>Fee:${annual_fee}</span>
        <span>Points:{props.cards.points}</span>
        <input name='points' placeholder='newpoints' onChange={(event)=>{
            newpoints(event.target.value)
        }}/>
        <button onClick={()=>props.updateCard(card_id,points)}>Update</button>
        <button onClick={()=>props.deleteCard(card_id)}>Delete</button>
    </div>
}

// state  newpoints , input box  states
//change  class componenet 