import Carousel from 'react-bootstrap/Carousel';
import pic1 from '/dealsorb/src/assets/1.jpg';
import pic2 from '/dealsorb/src/assets/2.jpg';
import pic3 from '/dealsorb/src/assets/3.jpg';


function SubCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        
        <div style={{height:'450px', width:'100%',borderRadius:'50%'}}>
        <img src={pic1}  height="100%" width='100%' alt="" srcset="" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height:'450px', width:'100%',borderRadius:'50%'}}>
        <img src={pic2}  height="100%" width='100%' alt="" srcset="" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height:'450px', width:'100%',borderRadius:'50%'}}>
        <img src={pic3}  height="100%" width='100%' alt="" srcset="" />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SubCarousel;