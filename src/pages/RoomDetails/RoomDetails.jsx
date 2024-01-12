import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const RoomDetails = () => {

    const {id} = useParams();

    const [room, setRoom] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
        .then(res => res.json())
        .then(data => {
            const singleRoom = data.find(room => room._id === id);
            setRoom(singleRoom)
            setLoading(false)
        })
    },[id])

    if(loading) {
        return <Loader></Loader>
    }

    return (
        <div>

            <Container>

                <div>
                    <h1>{room?.title}</h1>
                </div>

            </Container>
            
        </div>
    );
};

export default RoomDetails;