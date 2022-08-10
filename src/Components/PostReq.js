import React from "react";
import axios from "axios";

export default class PostReq extends React.Component {

    state = {
        userId: '',
        title: '',
        body: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(res => console.log(res))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserID</label>
                        <input
                            type='text'
                            name="userId"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Title</label>
                        <input
                            type='text'
                            name="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Body</label>
                        <input
                            type='text'
                            name="body"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}