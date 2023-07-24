import { useContext } from "react"
import { TripSpotContext } from "../Context/TripSpotProvider"
import {useNavigate} from "react-router-dom";


export function Destination()
{
    const {destinationData} = useContext(TripSpotContext);
    const navigate = useNavigate();
    return (<div>
        
        <button onClick={()=>navigate("/country")} className="backButton">Back</button>
        <header>
        <h2>{destinationData?.name}</h2>
        </header>
        <div className="destination-detail-container">
            <img height="300px" width="300px" src={destinationData?.image} alt="spot-cover" />
            <div style={{marginLeft:"20px"}} className="other-details">
                <div><span className="heading">Description:</span> {destinationData?.description}</div>
                <div><span className="heading">Ratings:</span> {destinationData?.ratings}</div>
                <div><span className="heading">Reviews: </span>{destinationData?.reviews}</div>
                <div><span className="heading">Location: </span>{destinationData?.location}</div>
                <div><span className="heading">Opening Hours:</span> {destinationData?.openingHours}</div>
                <div><span className="heading">Ticket Price:</span> {destinationData?.ticketPrice}</div>
                <a style={{color:"pink"}} href={destinationData?.website}>Website</a>
            </div>
        </div>
    </div>)
}