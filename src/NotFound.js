import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Ooops! Sorry</h2>
            <p>That page cannot be found</p>
           <button><Link to = "/">Get back to the homepage...</Link></button> 

            </div>
     );
}
 
export default NotFound;