import img1 from "../assets/download.jpg"
import img2 from "../assets/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152152.avif"
import img3 from "../assets/interior-design-photo_1115474-29430.avif"
import img4 from "../assets/interior-design-hd-image_1012565-24237.jpg"
function Card() {
  return (
    <div>
      <h4 className="text-center">
        Your ultimate Destination for Interior Designs
      </h4>
      <div className="container d-flex flex-column flex-sm-row  gap-3 text-center mt-5">
        <div className="card" style={{flexBasis:"24%"}}>
          <img
            src={img1}
            height="200px"
            width="100%"
            objectFit="cover"
          />
          <h6 className="mt-3">Modular Interiors</h6>
          <p>
            Functional Kitchen,Wardrobe and Storage
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Learn More
          </a>
        </div>
        <div className="card" style={{flexBasis:"24%"}}>
          <img
            src={img2}
            height="200px"
            width="100%"
            objectFit="cover"
          />
          <h6 className="mt-3">Full Home Interiors</h6>
          <p>
              TurnKey Interiors solutions for your home
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Learn More >
          </a>
        </div>
        <div className="card" style={{flexBasis:"24%"}}>
          <img
            src={img3}
            height="200px"
            width="100%"
            objectFit="cover"
          />
          <h6 className="mt-3">Luxury Interiors</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a
            consequuntur sunt tempora quis.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Learn More 
            </a>
        </div>
        <div className="card" style={{flexBasis:"24%"}}>
          <img
            src={img4}
            height="200px"
            width="100%"
            objectFit="cover"
          />
          <h6 className="mt-3">Renovations</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a
            consequuntur sunt tempora quis.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Learn More >
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
