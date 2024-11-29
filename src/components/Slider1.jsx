import Slider from "react-slick";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

export default function Slider1() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="interior" className=" my-4">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="p-3">
          <div className="d-flex flex-column align-items-center">
            <div className="w-100" style={{ height: "200px" }}>
              <img
                src={img1}
                alt="Monochromatic Grey 2 BHK"
                className="img-fluid w-100 h-100"
                style={{objectFit: "cover", borderRadius:"20px" }}
              />
            </div>
            <h3 className="mt-2 text-center fw-bold">
              Monochromatic Grey 2 BHK
            </h3>
            <p className="text-center text-muted">
              A calm, monochromatic palette of grey hues creates a serene and
              professional atmosphere for focused productivity.
            </p>
            <button className="btn btn-danger">Get Free Quote</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="p-3">
          <div className="d-flex flex-column align-items-center">
            <div className="w-100" style={{ height: "200px" }}>
              <img
                src={img2}
                alt="Bohemian Home Office"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover", borderRadius:"20px"}}
              />
            </div>
            <h3 className="mt-2 text-center fw-bold">Bohemian Home Office</h3>
            <p className="text-center text-muted">
              Eclectic and free-spirited, with vibrant colors, patterns, and
              plants, this space encourages creativity and individuality.
            </p>
            <button className="btn btn-danger">Get Free Quote</button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="p-3">
          <div className="d-flex flex-column align-items-center">
            <div className="w-100" style={{ height: "200px" }}>
              <img
                src={img3}
                alt="Industrial Home Office"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" ,borderRadius:"20px"}}
              />
            </div>
            <h3 className="mt-2 text-center fw-bold">Industrial Home Office</h3>
            <p className="text-center text-muted">
              Exposed brick, metal accents, and dark tones create a raw,
              industrial atmosphere for a modern and edgy workspace.
            </p>
            <button className="btn btn-danger">Get Free Quote</button>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="p-3">
          <div className="d-flex flex-column align-items-center">
            <div className="w-100" style={{ height: "200px" }}>
              <img
                src={img5}
                alt="Minimalist Home Office"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover",borderRadius:"20px" }}
              />
            </div>
            <h3 className="mt-2 text-center fw-bold">Minimalist Home Office</h3>
            <p className="text-center text-muted">
              Clean lines, neutral colors, and simple furnishings create a
              clutter-free and inspiring workspace.
            </p>
            <button className="btn btn-danger">Get Free Quote</button>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="p-3">
          <div className="d-flex flex-column align-items-center">
            <div className="w-100" style={{ height: "200px" }}>
              <img
                src={img6}
                alt="Scandinavian Home Office"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover",borderRadius:"20px" }}
              />
            </div>
            <h3 className="mt-2 text-center fw-bold">
              Scandinavian Home Office
            </h3>
            <p className="text-center text-muted">
              Light wood tones, pastel accents, and functional designs create a
              cozy and efficient workspace.
            </p>
            <button className="btn btn-danger">Get Free Quote</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
