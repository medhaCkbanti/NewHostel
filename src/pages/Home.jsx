
import Banner from "../components/Banner";
import Commitment from "../components/Commitment";
import Donate from "../components/Donate";
import DonteMain from "../components/DonteMain";
import Galary from "../components/Galary";
import Impact from "../components/Impact";
import Management from "../components/Management";


import Mission from "../components/Mission";
import NewSection from "../components/NewSection";
import NewsEvent from "../components/NewsEvent";
import Success from "../components/Success";
import Teacher from "../components/Teacher";
import Work from "../components/Work";


const Home = () => {
    return (
        <div>
               <Banner/>
              
               <NewSection/>
               <Work/>
               <Impact/>
               <Mission/>
               <NewsEvent/>
               <Galary/>
               <Success/>
               <Commitment/>
               <DonteMain/>
               <Management/>
               <Teacher/>
          

        </div>
    );
};

export default Home;