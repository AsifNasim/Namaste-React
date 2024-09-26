import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useMenuData from '../config/useMenuData';
import RestaurantCategory from './RestaurantCategory';

const RestaurantsMenu = ( ) => {


    const { resId } = useParams();
    const menuData = useMenuData(resId);
    

    

    if(menuData.length === 0){
        return <div>Loading...</div>
    } else{
        console.log("Restaurant menu data from hook :", menuData)
    }
    const { name, costForTwoMessage, cuisines, isOpen, avgRating } = menuData[2]?.card?.card?.info;
    // console.log("Menu Data: ", menuData.info);
    

    return (
        <div className='text-center'>
            <h1 className='font-extrabold text-2xl my-6'>{name}</h1>
            <p className='font-bold text-xl'>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <RestaurantCategory props={menuData}/>

            {/* {
                menuData?.info.map( CategoryResponse => {
                    <RestaurantCategory />
                })
            } */}
            {/* <h1>{name}</h1>
            <h3>{avgRating}*</h3>
            <h3>{costForTwoMessage}</h3>
            <p>{isOpen ? <p>Restaurant is Open now</p> : <p>Restaurant is Closed</p>} </p>
            <ul>
                {cuisines?.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
                }
            </ul> */}

        </div>
    )
}

export default RestaurantsMenu;