import { Component } from "react";
import "./Buy.css";
import cart from "../assets/cart.png";


export class Buy extends Component {
    state = {
        userInput: '',
        userList: [],
    }

    onChangeEvent(e) {
        this.setState({ userInput: e })
    }

    addItem(input) {
        if (input === "") {
            alert ("Please enter text!")
        }
        else {
            let listArray = this.state.userList;
            listArray.push(input);
            this.setState({ userList: listArray, userInput: ""})
        }
    }

    deleteItem() {
        let listArray = this.state.userList;
        listArray = [];
        this.setState({ userList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="block">
                    <input 
                    type="text" 
                    placeholder="What do you want to buy?"
                    onChange={ e => {this.onChangeEvent(e.target.value)}}
                    value={ this.state.userInput}
                    />
                </div>
                <div className="block">
                    <button className="btn add" onClick={ () => this.addItem(this.state.userInput)}>Add</button>
                </div>

                <ul>
                    {this.state.userList.map((item, index) => ( 
                    <li key={index} onClick={ this.crossedWord }>
                        <img src={cart} width='40px' alt="Cart"/> 
                        
                        {item}</li>)
                    )}
                </ul>
                <div className="block">
                    <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
                </div>
            </form>
        )
    }
}