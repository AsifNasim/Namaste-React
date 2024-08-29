import { useState, useEffect } from "react"
import { RESTAURANT_IMAGE_URL } from "../config/config";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";

import useOnlineStatus from "../config/useOnlineStatus";


const Body = () => {
    const [restData, setRestData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const isOnline = useOnlineStatus();

//     useEffect(() => {
//         fetchSearchedData(search);
//     }, []);


//    async function fetchSearchedData(searchTerm){
//         const searchUrl = "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.61610&lng=73.72860&str="+ searchTerm+"&trackingId=undefined" 
//         const response = await fetch(searchUrl);
//         const data = await response.json();
//         console.log("Searched Response Data: ", data);
//         setFilteredData(data?.data?.suggestions);
//         return data?.data?.suggestions;
//     }



    useEffect(()=>{
        const fetchData = async () => {
            setLoaded(true);
            try {
                const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5678553&lng=73.9143637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
                if (!response.ok) throw new Error('Data could not be fetched!');
                const data = await response.json();
                setRestData(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                setFilteredData(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            } catch (error) {
                setError(error.message);
            }
        }
    fetchData();
        
    }, [])

    if(isOnline === false) return <h1>Looks like you are offline!!! please check your internet connection.</h1>

    

    return restData.length === 0 ? <div>loading ...</div> : (
        <div className="body-container">

        <div>
            <input type="text" placeholder="Search..." onChange={ (e) => {
                setSearch(e.target.value);
                e.preventDefault();
            }}/>

            <button onClick={() => {
                console.log("Search Term:", search);
                const filteredData = restData.filter((item) => item?.info?.name.toLowerCase().includes(search.toLowerCase()));
                setFilteredData(filteredData);
            }}>Search</button>
            <div></div>

            <button onClick={() => {
                const filterLogic = restData.filter( (item) => {
                    console.log("average rating -->", item?.info?.avgRating);
                    return item?.info?.avgRating > 4.1;
                });

                console.log("Filtered Data-->", filterLogic);   
                setFilteredData(filterLogic);
            }}>top rated restaurants</button>
            <div></div>

            <button onClick={() => {
                const filterLogic = restData.filter( (item) => {
                    console.log("average rating -->", item?.info?.avgRating);
                    return item?.info?.avgRating < 4.1;
                });

                console.log("Filtered Data-->", filterLogic);   
                setFilteredData(filterLogic);
            }}>low rated restaurants</button>
          
        </div>

            <div className="restaurant-container">
                 <div className="card-info-container">
                    {
                        filteredData.map( resp => {
                            return <Link to={"/restaurants/"+ resp?.info?.id} key={resp?.info?.id}>
                                 <Restaurant  {...resp?.info} />
                            </Link>
                            //  
                        })
                    }
            </div>
            </div>
        </div>
    )

}

export default Body