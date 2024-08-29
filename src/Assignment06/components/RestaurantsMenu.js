import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useMenuData from '../config/useMenuData';

const RestaurantsMenu = ( ) => {


    const { resId } = useParams();
    const menuData = useMenuData(resId);

    

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