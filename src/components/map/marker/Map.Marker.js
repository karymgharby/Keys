import {Marker} from "react-map-gl";
import markericon from '../../../assets/Icons/home.icon.svg'
import test_img from "../../../assets/test_img.jpg";

export default function MarkerHome() {


    return(
        <div className="marker">    
            <Marker
            latitude={36.710161050637595}
            longitude={10.428860882171598}
            offsetLeft={0}
            offsetTop={0}
            className="marker--icon"
            >
                <img src={markericon} alt="home" className="map__marker--icon"/>
            </Marker>
            
            <Marker
            latitude={36.710161050637595}
            longitude={10.428860882171598}
            offsetLeft={-50}
            offsetTop={-160}
            className="marker__info"
            >
                    <img src={test_img} className="marker__info--img" alt="test" />
                    <p className="marker__info--title">Post Title</p>
                    <p className="marker__info--price">550DT/m</p>
            </Marker>
        </div>
    )

}