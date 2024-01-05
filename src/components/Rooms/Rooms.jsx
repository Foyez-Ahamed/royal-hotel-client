import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";


const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    const [params, setParams] = useSearchParams();

    const category = params.get('category'); 

    useEffect( () => {
        fetch('./rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filtered = data.filter(room => room.category === category)
                setRooms(filtered)
            } else{
                setRooms(data)
            }
        })
    } ,[category])

    return (
        <div>
            
           {
             rooms && rooms.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {
                 rooms.map(room => <Card key={room._id} room = {room} ></Card>)
             }
         </div> : 
          
          <div>
            <Heading center={true} title={'No rooms available in this category'} subtitle={'Please select others category'}></Heading>
          </div>
           }

        </div>
    );
};

export default Rooms;