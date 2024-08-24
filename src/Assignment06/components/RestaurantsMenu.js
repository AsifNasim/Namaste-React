import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const RestaurantsMenu = ( ) => {

    const [menuData, setMenuData] = useState([]);
    const { resId } = useParams();
   


    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5678553&lng=73.9143637&restaurantId=${resId}`);
        const data = await response.json();
        console.log("TestData -->", data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        );
        setMenuData(data?.data?.cards[2]?.card?.card);
    }
    console.log("Menu : ", menuData);
    

    if(menuData.length === 0){
        return <div>Loading...</div>
    }
    const { name, costForTwoMessage, cuisines, isOpen, avgRating } = menuData?.info;
    console.log("Menu Data: ", menuData.info);
    

    return (
        <div>
            <h1>{name}</h1>
            <h3>{avgRating}*</h3>
            <h3>{costForTwoMessage}</h3>
            <p>{isOpen ? <p>Restaurant is Open now</p> : <p>Restaurant is Closed</p>} </p>
            <ul>
                {cuisines?.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
                }
            </ul>

        </div>
    )
}

export default RestaurantsMenu;