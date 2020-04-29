import React , {Component} from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            bank:'',
            type:'',
            annual_fee:'',
            points:'',
            img:''
        }
        this.submitHandler=this.submitHandler.bind(this)
    }
   
  submitHandler(e){
        e.preventDefault()
        this.props.addCards(this.state)
    }

    changeHandler(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <span>
                    <p>name</p>
                    <input
                    type ="text"
                    name = "name"
                    value = {this.state.name}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Card name"/>
                    <p>bank</p>
                    <input
                    type ="text"
                    name = "bank"
                    value = {this.state.banl}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Bank"/>
                    <p>type</p>
                    <input
                    type ="text"
                    name = "type"
                    value = {this.state.type}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Biz or Personal"/>
                    <p>annaul fee</p>
                    <input
                    type ="number"
                    name = "annual_fee"
                    value = {this.state.annaul_fee}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Annual Fee"/>
                    <p>points</p>
                    <input
                    type ="number"
                    name = "points"
                    value = {this.state.points}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Points"/>
                    <p>img</p>
                    <input
                    type ="text"
                    name = "img"
                    value = {this.state.img}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "image"/>
                </span>
                <button >add</button>
                </form>
            </div>
        )
    }
}
export default Form