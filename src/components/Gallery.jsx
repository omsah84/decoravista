import img1 from "../assets/cozy-contemporary-lounge-with-lush-foliage-minimal-interior-design_198067-7218.avif";
import img2 from "../assets/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.avif";
import img3 from "../assets/sofa-collection_1197721-94436.avif";
import img4 from "../assets/beautiful-kitchen-interior-design_23-2150976603.avif";
import img5 from "../assets/small-garden-landscape-interior-design_1091270-42655.avif";
function Gallery() {
  return (
    <>
      <div id="gallery" className="container">
        <h4 className="text-center mt-5">
          Evaluate Your Home with Stylish Interior Design Ideas
        </h4>
        <div>
          <div className="d-flex flex-column flex-sm-row justify-content-around pt-1 gap-1">
            <img src={img1} height="300px" width="100%" />
            <img src={img2} height="300px" width="100%" />
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-around pt-1 gap-1">
            <div>
              <img src={img3} height="100%" width="100%" />
            </div>
            <div>
              <img src={img4} height="100%" width="100%" />
            </div>
            <div>
              <img src={img5} height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
