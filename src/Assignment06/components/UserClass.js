import React from 'react';

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        console.log("UserClass constructor-->", props);

        this.state = {
            userInfo: {
                name:"dummyName",
                location:"default location",
                avatar_url:"https:google.com"
            }
        }
        console.log("Contructor gets loaded")

    }

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/AsifNasim")
        const dataResp = await response.json();
        console.log("github api response --> ", dataResp);
        this.setState({
            userInfo: dataResp
        })
    }
    render() {

        // const {name, location, username} = this.props;
        // const {count, count2} = this.state;

        const {name, location, login, avatar_url } = this.state.userInfo;
        // console.log(this.state.userInfo)

        console.log("Render method gets loaded")
        
        return (
            <div className="user-component">
            {/* <h1>Count : {count}</h1> */}
            {/* <button className='increase-btn' onClick={() => {
                // NEVER UPDATE THE STATE DIRECTLY
                this.setState({
                    // count: this.state.count + 1
                    count: count + 1
                })
            }}>Increment</button> */}
            {/* <h1>Count2 : {count2}</h1>  */}
            <img src={avatar_url}></img>
            <h2>Name: {login}</h2>
            <h3>Location: {location}</h3>
            <h3>User: {login}</h3>
        </div>
    )
    }
}

export default UserClass;