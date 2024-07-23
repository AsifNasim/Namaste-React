import Restaurant from "./Restaurant";
import restobj from "../utils/mock-data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const SearchBar = () => {

   

    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    //     // event.preventDefault();
    // }

    // async function fetchSearchedData(searchTerm){
    //     const searchUrl = "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.61610&lng=73.72860&str="+ searchTerm+"&trackingId=undefined" 
    //     const response = await fetch(searchUrl);
    //     const data = await response.json();
    //     console.log("Searched Response Data: ", data);
    //     return data?.data?.suggestions;

    // }


    // const handleSearch = async (inputValue) => {
    //     console.log('Search Term:', inputValue);
    //     const searchResp = await fetchSearchedData(inputValue);
    //     console.log("Search Response: ", searchResp); 

    // }


    const [searchText, setSearchText] = useState('');
    return (
        <div id='search'>
            {/* <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Search' />
            <button onClick={ () => handleSearch(inputValue)}>Search</button> */}

            <input type="text"
            value={searchText}
            onChange = { (e) => {
                setSearchText(e.target.value);
            }}
            placeholder="Search" />
        </div>
    )
}




const Body = () => {

    let restData = [
        {
            "info": {
                "id": "11110",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Hafeezpet",
                "areaName": "Miyapur",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 3.9,
                "parentId": "721",
                "avgRatingString": "3.9",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-07-12 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-hafeezpet-miyapur-hyderabad-11110",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "549032",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
                "locality": "Madinaguda",
                "areaName": "Miyapur",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "4961",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-07-12 01:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-madinaguda-miyapur-hyderabad-549032",
                "type": "WEBLINK"
            }
        }
    ]
const [restState, setRestState] = useState([]);



// async function fetchData() {
//     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//     const data = await response.json();
//     const resp = data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     return resp;
// }

useEffect(async () => {
    async function fetchData() {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        const resp = data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return resp;
    }
    setRestState(await fetchData());
}, []);


// if(restState.length === 0){
//     return <Shimmer />
// }

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log("Geolocation is not supported by this browser.")
  }


    return (restState.length === 0) 
    ? <Shimmer /> 
    :
    (
        <div id='body'>
            < SearchBar/>
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={async () => {
                    // const filteredData = restState.filter( rest => rest.info.avgRating > 4);
                    const fetchedData = await fetchData();
                    const filteredData = fetchedData.filter( rest => rest.info.avgRating >= 4);
                    setRestState(filteredData);
                    
                }}
                 >Top Rated Rrestaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    restState.map( (respData) => <Restaurant key={respData.info.id} {...respData.info}/>)
                }
            </div>
        </div>
    )

}

export default Body;