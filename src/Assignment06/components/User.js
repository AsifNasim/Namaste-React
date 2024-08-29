import { useState } from 'react';
const User = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return (
        <div className="user-component">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name: Asif Nasim</h2>
            <h3>Location: Pune, Maharashtra</h3>
            <h3>User: AsifNasim</h3>
        </div>
    )
}

export default User;