import Categories from "../../../components/Rooms/Categories/Categories";
import Rooms from "../../../components/Rooms/Rooms";
import Container from "../../../components/Shared/Container/Container";

const Home = () => {
    return (
        <div>
           <Container>

            <div className="mb-10">
                <Categories></Categories>
            </div>
            
            <div>
                <Rooms></Rooms>
            </div>

           </Container>
        </div>
    );
};

export default Home;