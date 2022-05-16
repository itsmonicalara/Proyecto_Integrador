import { GoogleMap,withGoogleMap,withScriptjs,Marker} from "react-google-maps"


const CardMap = (props, lat,long) =>{
    return(
        <GoogleMap
        defaultZoom={10}
        defaultCenter ={{ lat:19.28579882762938, lng:-99.13354888945426}}>
        <Marker position={{ lat:19.28579882762938, lng:-99.13354888945426}} />
        </GoogleMap>

     
    );
};


export default withScriptjs(
    withGoogleMap(
        CardMap
    )
)