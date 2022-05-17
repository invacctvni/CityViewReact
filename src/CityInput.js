// // component
import {useState} from "react";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";

const CityInput = () => {
    // Use hook to save state (with params)
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    const cbInput = evt => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&
        //make sure new city is different from old city to avoid CPU consumption.
        newCity !== city &&
        (() => {
            // console.log("searchCity Result is ==>", searchCity)
            setCity(newCity) //async function (may not be updated immediately).
            console.log('new city is===>', city, newCity)
            fetchCity()

        })() //() force the function to execute.
    }

    const fetchCity = () => {
        //axios -3rd part lib. google it pls.
        //m is a method, p is a property oo.
        axios.get(BasicUrl, {
            params: {
                query: city,
                orientation: "landscape",
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            console.log("raw data", res)
            //destruction using object.
            let {data: {results}} = res
            console.log('results--->',results)
            // add () to return object
            let imageList = results.map(item => ({
                des: item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb
            }))
            let {data:{total}} = res
            console.log("total is ", total)
            console.log("image list is ", imageList)
            setImages(imageList)
        }).catch(err => console.log('fetch city http error!', err))
    }

    return <div>
        <input type="text" onKeyDown={cbInput}/>
        {/*convert shu zu to string*/}
        {JSON.stringify(images)}
    </div>
}

export default CityInput;


// const CityInput = () => {
//     // callback function event handler for key down
//     const cbInput = evt => {
//         evt.key === 'Enter' &&
//         (()=>{
//             //target get events.
//             let city = evt.target.value.trim()
//             console.log('new city input' , city)
//         })()
//     }
//
//
//     return <div>
//         <input type="text"
//                placeholder="Search City here..."
//                onKeyDown={cbInput}
//         />
//     </div>
// }
//
// export default CityInput