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

    pointschanger=e=>{
        const {value, points} = e.target
        this.setState({
            [points]: value
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
                <Form/>
               {mappedCards}
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Amex)