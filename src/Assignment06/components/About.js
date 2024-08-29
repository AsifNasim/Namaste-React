import User from "./User";
import UserClass from "./UserClass";
import React from "react"

class About extends React.Component {
    render () {
        return (
            <div>
                <h1>About Us</h1>
                {/* <User/> */}
                <UserClass name={"Asif Nasim"} 
                           location={"Pune"} 
                           username={"AsifNasim"}/>
            </div>
        );
    }
}
// const About = () => {

  
//     return (
//         <div>
//             <h1>About Us</h1>
//             <User/>
//             <UserClass name={"Asif Nasim"} 
//                        location={"Pune"} 
//                        username={"AsifNasim"}/>
//         </div>
//     );
// }

export default About;