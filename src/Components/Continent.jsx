import { useContext } from "react"
import { TripSpotContext } from "../Context/TripSpotProvider"
import {useNavigate} from "react-router-dom";


export function Continent()
{
    const {continentData,setCountryData} = useContext(TripSpotContext);
    const handleContClick = (country)=>{
        setCountryData(country);
        navigate("/country");
    }
    const navigate = useNavigate();
    return (<div>
        <button onClick={()=>navigate("/")} className="backButton">Back</button>
        <header>
        <h2>Top Countries in {continentData?.name} for your next holiday</h2>
        </header>
        <div className="continent-container">{continentData?.countries?.map((country)=>{
            const {id,name,image}=country
            return (<div onClick={()=>handleContClick(country)} className="continent-card"> 
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