import { useContext } from "react"
import { TripSpotContext } from "../Context/TripSpotProvider"
import {useNavigate} from "react-router-dom";


export function Country()
{
    const {countryData,setDestinationData} = useContext(TripSpotContext);
    const navigate = useNavigate();
    const handleContClick = (spot)=>{
        setDestinationData(spot);
        navigate("/destination");
    }
    return (<div>
        <button onClick={()=>navigate("/continent")} className="backButton">Back</button>
        <header>
            <h2>Top Spots in {countryData?.name} for your next holiday</h2>
        </header>
        <div className="continent-container">{countryData?.destinations?.map((spot)=>{
            const {id,name,image}=spot
            return (<div onClick={()=>handleContClick(spot)} className="continent-card"> 
                <img src={image} alt="country-cover" />
                <p className="continent-name-detail">
            <span>
                <i class="fas fa-map-marker-alt"></i>
           </span>
            <span className="cont-name">{name}</span>
           </p>
            </div>)

        })}</div>
    </div>)
}