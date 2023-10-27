import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import './Banner.css'

// Slider Image
import s1 from '../../../assets/home/01.jpg'
import s2 from '../../../assets/home/02.jpg'
import s3 from '../../../assets/home/03.png'
import s4 from '../../../assets/home/04.jpg'
import s5 from '../../../assets/home/05.png'
import s6 from '../../../assets/home/06.png'
const Banner = () => {
//    const s1 ="https://ibb.co/JpknYZP" 
//    const s2 ="https://ibb.co/c6zHDdz" 
//    const s3 ="https://ibb.co/gV6bNk9" 
//    const s4 ="https://ibb.co/Zfxqkbs" 
//    const s5 ="https://ibb.co/tKTpkTx" 
//    const s6 ="https://ibb.co/bNXvFZB" 
    return (
        <div>
            <Carousel>
                <div>
                    <img src={s1}/>
                </div>
                <div>
                    <img src={s2} />
                </div>
                <div>
                    <img src={s3} />
                </div>
                <div>
                    <img src={s4} />
                </div>
                <div>
                    <img src={s5} />
                </div>
                <div>
                    <img src={s6} />
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;