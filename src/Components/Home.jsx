import { useContext } from "react"
import { TripSpotContext } from "../Context/TripSpotProvider";
import {useNavigate} from "react-router-dom";

export function Home()
{
    const {spotData,setContinentData} = useContext(TripSpotContext);
    const navigate = useNavigate();

    const handleContClick=(continent)=>{
        setContinentData(continent);
        navigate("/continent");
    }   
    return (<div>
        <header className="header">
            <h1>Welcome to Trip Advisor</h1>
            <h4>Top Continents for your next holiday</h4>
        </header>
        <div className="continent-container">{spotData?.map((continent)=>
        
        <div onClick={()=>handleContClick(continent)} className="continent-card">
            <img src={continent?.image} alt="continent-cover" />
            <p className="continent-name-detail">
            <span>
                <i class="fas fa-map-marker-alt"></i>
           </span>
            <span className="cont-name">{continent?.name}</span>
           </p>
        </div>)} </div>

    </div>)
}