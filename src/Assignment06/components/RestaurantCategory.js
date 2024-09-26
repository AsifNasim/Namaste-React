
import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = (props) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    console.log("Restaurant Category Response -->", props);
    const menuAccordian = props?.props[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log("Menu Accordian -->", menuAccordian);
    let allData = props?.props[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let categories = allData.filter((cd) => {
        return cd?.card?.card?.["@type"] === `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory`;
    });

    // handleClick now accepts an index and updates the state based on it
    const handleClick = (index) => {
        setExpandedIndex(prevIndex => prevIndex === index ? null : index);
    };
    console.log("All data -->", categories);
    return (
        <div>
            <div className="w-6/12 p-4 my-4 bg-gray-50 m-auto shadow-lg">
                {categories.map((item, index) => {
                    return (
                        <div key={index} onClick={() => handleClick(index)}>
                            <div>
                                <div className="flex justify-between mx-6 py-4">
                                    <div className="font-bold text-lg cursor-pointer">
                                        <span>{item?.card?.card?.title}</span>
                                        <span>({item?.card?.card.itemCards?.length})</span>
                                    </div>
                                    <span>⬇️</span>
                                </div>
                                <div>
                                    {/* Check if the current item's index matches expandedIndex to decide expansion */}
                                    {expandedIndex === index && <MenuItemList props={item?.card?.card?.itemCards} />}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RestaurantCategory;