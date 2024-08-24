// import { useEffect, useState } from 'react';


// const Search = () => {

//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         fetchSearchedData(search);
//     }, [search]);


//    async function fetchSearchedData(searchTerm){
//         const searchUrl = "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.61610&lng=73.72860&str="+ searchTerm+"&trackingId=undefined" 
//         const response = await fetch(searchUrl);
//         const data = await response.json();
//         console.log("Searched Response Data: ", data);
//         setSearchData(data?.data?.suggestions);
//         return data?.data?.suggestions;
//     }
//     return (
//         <div>
//             <input type="text" placeholder="Search..." onChange={ (e) => {
//                 setSearch(e.target.value);
//                 e.preventDefault();
//             }}/>

//             <button onClick={() => {
//                 console.log("Search Term:", search);
//                 fetchSearchedData(search)
//             }}>Search</button>
          
//         </div>
//     );
// }

// export default Search;