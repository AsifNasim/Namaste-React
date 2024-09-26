import { useState, useEffect } from "react";

const useMenuData = (resId) => {

    const [menuData, setMenuData] = useState([]);

    useEffect(()=> {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5678553&lng=73.9143637&restaurantId=${resId}`);
        const data = await response.json();
        // console.log("TestData -->", data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        // );
        setMenuData(data?.data?.cards);
        // setMenuData(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        // console.log("Rest Menu-->", data?.data?.cards)
        // let allData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // let categories = allData.filter( (cd) => {
        //     return cd?.card?.card?.["@type"] === `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory`;
        // })

        // console.log("Categories Data -->", categories);
    }

    return menuData;
}

export default useMenuData;