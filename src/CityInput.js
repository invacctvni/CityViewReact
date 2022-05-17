// // component
import {useState} from "react";

const CityInput = ()=> {
    // Use hook to save state
    const [city,setCity] = useState('Toronto')
    const cbInput = evt => {
        let newCity = evt.target.value.trim().toLowerCase()

        evt.key === 'Enter' &&
        (()=>{
            // target get events
            let searchCity = evt.target.value.trim().toLowerCase()
            console.log("searchCity Result is ==>",searchCity)
            fetchCity
        })()
    }
    return <div>
        <input type="text"onKeyDown={cbInput}/>
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