import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../public/slider1.avif'
import slider2 from '../../../public/slider5.avif'
import slider3 from '../../../public/slider2.jpg'
import slider4 from '../../../public/slider3.webp'
 

const Benner = () => {
    return (
        <div>
            <Carousel autoPlay = {Boolean}>
                <div>
                    <img src={slider4} />
                    
                </div>
                <div>
                    <img src={slider2} />
                  
                </div>
                <div>
                    <img src={slider3} />
                  
                </div>
                <div>
                    <img src={slider4} />
                    
                </div>
                <div>
                    <img src={slider1} />
                   
                </div>
                 
                 
            </Carousel>

 

        </div>
    );
};

export default Benner;