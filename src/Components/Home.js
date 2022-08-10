import axios from "axios";
import React, {Component} from "react";

export default class Home extends Component{
    componentDidMount(){
        axios.post('posts').then(res=>console.log(res.data))
    }
    render(){
        
        
        if(this.props.user){
            return(
                <>Welcome {this.props.user.first_name}</>
            )
        }
        return (
            <>Home</>
        )
    }
}