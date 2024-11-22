import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img style={para} src="img1.jpg" alt="na"/>
            <h3 style={word} className="text-center">Monochromatic Grey 2 BHK</h3>
            <p style={words} className="text-center">A calm,monochromatic palette of grey hues<br></br>creates a scences and professional atomsophere for<br></br>foucsed productivity</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src="img2.jpg" alt="na"/>
            <h3 style={word} className="text-center">Bohemian Home Office</h3>
            <p style={words} className="text-center">Eclectic and free-spirited,with vibrant colors,patterns,and plants,this space encourages<br></br>creativity and individuality</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src="img3.jpg" alt="na"/>
            <h3 style={word} className="text-center">Industrial Home Office</h3>
            <p style={words} className="text-center">Exposed brick,metal accents, and dark tone<br></br> create a raw,industrail atomsphere for a modern<br></br>and edgy workspace</p>
            <button style={wordss}type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img  style={para} src="img4.jpg" alt="na"/>
            <h3 style={word} className="text-center">Royal & Elegant3 BHK</h3>
            <p style={words} className="text-center">Embrace regel elegance with luxurious<br></br>finishes and rich textures,perfect for adding<br></br>sophistication to any home office.</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src=" img8.jpg" alt="na"/>
            <h3 style={word} className="text-center">Tech-Savvy Home Office</h3>
            <p style={words} className="text-center">Seamlessly INtegrate the lateset gadegets an<br></br>technology into ur workspace,providing a<br></br>a modern and efficient working environment</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src="img5.jpg" alt="na"/>
            <h3 style={word} className="text-center">Traditonal Home Office</h3>
            <p style={words} className="text-center">Timeless and elegant,with classic wooderr<br></br>furniture and intricate details,this office<br></br>excudes professionalism and sophistication</p>
            <button style={wordss}type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src="img6.jpg" alt="na"/>
            <h3 style={word} className="text-center">Scandinavian Home Office</h3>
            <p  style={words} className="text-center">Light wood,natural light,and minimalit<br></br>furiniture create a clean and functional space<br></br>with a touch of Nordic elegance</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src="img9.jpg" alt="na"/>
            <h3 style={word} className="text-center">Rustic Home Office</h3>
            <p  style={words} className="text-center">Warm wood tones and vintage decor bring<br></br>cozy,earthy charm to your workspace,perfect<br></br>for creating a relaxing environment</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
          <div>
            <img style={para} src="img7.jpg" alt="na"/>
            <h3 style={word} className="text-center">Modern Minimilastic Home Office</h3>
            <p style={words} className="text-center">Sleek lines,neutral colors,and clutte-free<br></br>design promote focus and efficiency in this<br></br>minimalist setup</p>
            <button style={wordss} type="button" className="btn btn-danger">Get Free Quote</button>
          </div>
        </Slider>
      </div>
    </>
  );
}


const para={
   width:"220px",
   height:"200px",
   marginLeft:"120px",
   marginTop:"15px",
   borderRadius:"15px"
}

const word={
  marginTop:"10px",
  fontSize:"20px",
  fontWeight: "700"
}
const words={
  fontWeight: "500"
}
const wordss={
  marginLeft:"160px"

}