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
                <div className="detail-container"><span className="heading">Description:</span> <span className="content">{destinationData?.description}</span></div>
                <div className="detail-container"><span className="heading">Ratings:</span> <span className="content">{destinationData?.ratings}</span></div>
                <div className="detail-container"><span className="heading">Reviews: </span><span className="content">{destinationData?.reviews}</span></div>
                <div className="detail-container"><span className="heading">Location: </span><span className="content">{destinationData?.location}</span></div>
                <div className="detail-container"><span className="heading">Opening Hours:</span> <span className="content">{destinationData?.openingHours}</span></div>
                <div className="detail-container"><span className="heading">Ticket Price:</span><span className="content"> {destinationData?.ticketPrice}</span></div>
                <a style={{color:"pink"}} href={destinationData?.website}>Website</a>
            </div>
        </div>
    </div>)
}