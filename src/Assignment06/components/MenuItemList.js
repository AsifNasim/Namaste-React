import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE_URL } from "../config/config";
import { addItem } from "../config/cartSlice";
const MenuItemList = (props) => {
    
    console.log("item list Props-->", props?.props)
    const testData = props?.props;
    // // console.log("inside Menu item list -->", props?.props);
    // console.log("inside Menu test data ..... -->", testData);

    const dispatch = useDispatch(); 
    const handleAddItem =(item) => {
        // Dispatch an action
         dispatch(addItem(item))
        //  this additem here is action.payload
    } 
    return (
        <div>
            <div>
                {testData.map( item => {
                   return <div className="flex justify-around">
                        <div className=" w-9/12 text-left mx-6 py-2">
                            <div className="font-bold">
                                <span >
                                    {item?.card?.info?.name}
                                </span>
                                <span className="px-2">
                                    ₹ {item?.card?.info?.defaultPrice 
                                    ? item?.card?.info?.defaultPrice/100
                                    : (item?.card?.info?.price
                                    ? item?.card?.info?.price/100
                                    : item?.card?.info?.finalPrice/100 )}   
                                </span>
                            </div>
                            
                            <div className="py-2">
                                {item?.card?.info?.description}
                            </div>

                        </div>

                        <div className="w-3/12" >
                                        <div className="py-3 absolute">
                                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                                            onClick={() => handleAddItem(item)}
                                            >
                                                Add +
                                            </button>
                                        </div>
                            <img className="w-16" src={RESTAURANT_IMAGE_URL + item?.card?.info?.imageId} />
                        </div>
                   </div>
                })}
            </div>
        </div>
    )
}

export default MenuItemList;