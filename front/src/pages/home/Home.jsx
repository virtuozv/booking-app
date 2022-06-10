import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Header from '../../components/header/Header';
import Mail from '../../components/mail/Mail';
import Navbar from '../../components/navbar/navbar';
import PropertyList from '../../components/propertyList/propertyList';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                {/* <Footer/> */}
            </div>
            <Mail />
        </div>
    )
}

export default Home;
