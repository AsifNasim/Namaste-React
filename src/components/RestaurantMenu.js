import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [ restMenu, setRestMenu ] = useState(null)

    useEffect( ()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5678553&lng=73.9143637&restaurantId=722840&catalog_qa=undefined&submitAction=ENTER';
        const promiseData = await fetch(url)
        const response = await promiseData.json();
        setRestMenu(response)
        console.log("restaurant menu response-->", response);
    }



    if(restMenu === null) return <Shimmer /> 

    const { text } = restMenu?.data?.cards[0]?.card?.card

    const {name, defaultPrice, finalPrice, id } = restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards[0]?.card?.info;

    return (
        <div className="restaurant-menu">
            <h1>{text}</h1>
            <h2>
                {name}
            </h2>

            <div>
                <li>{defaultPrice}</li>
                <li>{finalPrice}</li>
                <li>{id}</li>
            </div>
        </div>
    )
}

export default RestaurantMenu;