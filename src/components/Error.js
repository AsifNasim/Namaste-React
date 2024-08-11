import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    {console.log("better error",err)}
    return (
        <div>
            <h1>
                Error Page
            </h1>
            <h2>Something went wrong</h2>
            <h3>{err.message}</h3>
        </div>
    );
}

export default Error;