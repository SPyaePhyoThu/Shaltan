'use client'
import {MapContainer , TileLayer , Marker ,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import icon from '../public/images/hiclipart.com.png'

const Map=()=>{
  const customIcon = L.icon({
    iconUrl: '/images/hiclipart.com.png',
    iconSize: [20, 25], // adjust size as needed
    iconAnchor: [12, 20], // adjust anchor as needed
  });

  
    return (
    <MapContainer style={{height: '75vh' , width: '50vw' , borderRadius : '10px' }}  center={[16.9, 96.16]} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    />
  
    <Marker position={[16.897230985724956, 96.16016992528374]} icon={customIcon}>/
      <Popup>
        ShalTan | Step With Confidence
      </Popup>
    </Marker>
  </MapContainer>)
}

export default Map;