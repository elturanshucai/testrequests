import React, {Component} from "react";
import axios from "axios";

export default class GetReq extends Component{
    state={
        list: []
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            this.setState({
                list: res.data
            })
        })
    }
    render(){
        return(
            <>
                {this.state.list?.map(item=>(
                    <>
                      <h1>{item.title}</h1>  
                      <h2>{item.body}</h2>
                    </>
                    
                ))}
            </>
        )
    }
}