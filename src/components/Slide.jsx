function Slide() {
  return (
    <>
      <h5 style={hed} className="text-center">
        Your Trust Factor
      </h5>
      <div
        style={bodystyle}
        className="d-flex justify-content-center flex-column  flex-sm-column flex-md-row align-items-center"
      >
        <div style={divstyle}>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/fluency/48/house-with-a-garden.png"
            alt="house-with-a-garden"
          />
          <p style={para}>100,000+happy homes</p>
        </div>
        <div style={divstyle1}>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/fluency/48/building-with-rooftop-terrace.png"
            alt="building-with-rooftop-terrace"
          />
          <p style={para}>60+ cities</p>
        </div>
        <div style={divstyle2}>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/dotty/80/home-page.png"
            alt="home-page"
          />
          <p style={para}>3 countries</p>
        </div>
        <div style={divstyle3}>
          <svg
            style={svg}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar4"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <p style={para}>
            20 lakh+catalogue <br></br>products
          </p>
        </div>
        <div style={divstyle4}>
          <img
            width="55"
            height="55"
            src="https://img.icons8.com/color/48/office.png"
            alt="office"
          />
          <p style={para}>3,500+designers</p>
        </div>
      </div>
      <div style={divv}>
        <h4 className="text-center">Home Office to Match Every Style</h4>
        <p style={divv1} className="text-center">
          Explore productive and creative spaces tailored to your needs
        </p>
      </div>
    </>
  );
}
const hed = {
  marginTop: "20px",
  fontSize: "25px",
};
const divv = {
  marginTop: "50px",
};
const divv1 = {
  marginTop: "20px",
  fontWeight: "600",
};
const bodystyle = {
  fontSize: "17px",
  fontWeight: "700",
};
const divstyle = {
  width: "350px",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "8px 8px 5px #bccec4",
};
const divstyle1 = {
  width: "350px",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "8px 8px 5px #bccec4",
};
const divstyle2 = {
  width: "350px",
  height: "120px",
  boxShadow: "8px 8px 5px #bccec4",
  padding: "10px",
  textAlign: "center",
};
const divstyle3 = {
  width: "350px",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "8px 8px 5px #bccec4",
};
const divstyle4 = {
  width: "350px",
  height: "120px",

  padding: "10px",
  textAlign: "center",
  boxShadow: "8px 8px 5px #bccec4",
};
const svg = {
  width: "80px",
  height: "45px",
  padding: "3px",
};
const para = {
  padding: "13px",
  fontSize: "15px",
};

export default Slide;
