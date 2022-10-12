import React from "react";
class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    //Counter Function
    counterFun(){
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return(
            <>
                <h1>COUNT: {this.state.count}</h1>
                <button onClick={()=>{this.counterFun()}}>Increase</button>
            </>
        )
    }
}

export default Home;