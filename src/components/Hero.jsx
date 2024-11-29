import heroimg from "../assets/heroimg.jpg";
function Hero() {
  return (
    <>
      <div style={{ width: "100%", height: "400px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={heroimg}
          alt="logoo"
        ></img>
      </div>
    </>
  );
}

export default Hero;
