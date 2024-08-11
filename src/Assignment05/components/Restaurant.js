import { SWIGGY_API_URL, RESTAURANT_IMAGE_URL } from "../../utils/utils";
import { useEffect, useState } from "react";

const Restaurant = () => {
    const [restState, setRestState] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [address, setAddress] = useState("");
    
    // To get the current location of the user
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) =>{
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    },[]);

    // To get the address of the user
    useEffect(() => {
        if (latitude && longitude) {
            fetch(`https://www.swiggy.com/dapi/misc/address-recommend?latlng=${latitude},${longitude}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Address Data-->", data.data[0].formatted_address);
                setAddress(data.data[0].formatted_address);
            });
        }
    }, [latitude, longitude]);

    // To get the restaurant data as per the location
    useEffect(() => {
        // fetch(SWIGGY_API_URL)

        if(latitude && longitude){
            fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            .then((response) => response.json())
            .then((data) => {
                
                if(data.data?.cards[4] === undefined){
                    const noServiceData = data.data?.cards;
                    setRestState(noServiceData);
                }else{
                    const resp = data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                console.log(resp);
                setRestState(resp);
                }
            }); 
        }
    }, [latitude, longitude]);


    return (restState === undefined) ? <h1>Location Unserviceable</h1> : (
        console.log(restState),
        <div className="restaurant-container">
            {restState.map((rest) => (
                console.log(rest),
                    <div className="restaurant-card">
                        <div key={rest?.info?.id}>
                            <h1>{rest?.info?.name}</h1>
                            <img className="image-style" src={RESTAURANT_IMAGE_URL + rest?.info?.cloudinaryImageId} alt={rest.name} />
                            <p>{rest?.info?.avgRating} * </p>
                            <p>{rest?.info?.sla?.slaString}</p>
                            <p>{rest?.info?.cuisines.join(', ')}</p>
                            <p>{rest?.info?.areaName}</p>
                            <a href={rest?.cta?.link} target="_blank" rel="noreferrer">
                                Order Now
                            </a>
                    </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Restaurant;