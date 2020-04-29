import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect}from'react-router-dom'
import {connect} from 'react-redux'
import Cards from '../Cards'
import Form from '../Form'


class Amex extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{},
            cards:[],
            redirect:false
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.getCards()
    }
    getCards=()=>{
        if(this.state.user){
            axios.get('/api/cards/amex')
            .then(({data})=>{
                this.setState({
                    cards:data
                })
            })
            .catch(err=>{
                console.log('can not read cards')
            })
        }else{
            return <Redirect to="/"/>
        }
    }
    updateCards=(id)=>{
        axios.put('/api/editcards/${id}')
        .then(({data})=>{
            this.setState({
                cards:data
            })
        })
        .catch(err=>{
            console.log('edit failed')
        })
    }
    deleteCards=(id)=>{
        axios.delete('/api/deletecards/${id}')
        .then(({data})=>{
            this.setState({
                cards:data
            })
        })
        .catch(err=>{
            console.log('delete failed')
        })
    }

    render(){
        let{redirect} = this.state
        let{user} = this.props
        
        const mappedCards = this.state.cards.map(cards=><Cards
            key={cards.card_id}
            cards={cards}
            updateCard={this.updateCards}
            deleteCard={this.deleteCards}/>
            )
        return(
            <div className='cardslists' >
                Testing Amex 
                <Form bank='Amex'/>
               {mappedCards}
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Amex)

//amex re render, changing by states at amex