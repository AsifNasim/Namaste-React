import { useState, useEffect } from "react";

const useMenuData = (resId) => {

    const [menuData, setMenuData] = useState([]);

    useEffect(()=> {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5678553&lng=73.9143637&restaurantId=${resId}`);
        const data = await response.json();
        console.log("TestData -->", data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        );
        setMenuData(data?.data?.cards[2]?.card?.card);
    }

    return menuData;
}

export default useMenuData;