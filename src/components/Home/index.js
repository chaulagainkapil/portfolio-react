import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I am
                <img src={LogoTitle} alt="developer"/>
                Lorem Ipsum <br /> web developer</h1>
                <br />
                <h2>Frontend Developer/ Web Developer/ Web Designer</h2>
                {/* AT 31:50 of video */}
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home