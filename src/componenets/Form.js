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
                    <label>Card name</label>
                    <input
                    type ="text"
                    name = "name"
                    value = {this.state.name}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Card name"/>
                </span>
                {/* <span>
                    <label>Bank</label>
                    <input
                    type ="text"
                    name = "bank"
                    value = {this.state.banl}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Bank"/>
                </span> */}
                <span>
                    <label>Type</label>
                    <input
                    type ="text"
                    name = "type"
                    value = {this.state.type}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Biz or Personal"/>
                </span>
                <span>
                    <label>Annual Fee</label>
                    <input
                    type ="number"
                    name = "annual_fee"
                    value = {this.state.annaul_fee}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Annual Fee"/>
                </span>
                <span>
                    <label>Points</label>
                    <input
                    type ="number"
                    name = "points"
                    value = {this.state.points}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "Points"/>
                </span>
                <span>
                    <label>img</label>
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