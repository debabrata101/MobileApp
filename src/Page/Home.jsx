import { useLoaderData } from "react-router-dom";
import Banner from "../Component/Home/Banner";
import About from "./About";
import Product from "./Product";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner/>
            <About/>
            <Product data={data}/>
           
        </div>
    );
};

export default Home;