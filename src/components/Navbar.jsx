import logo from "../assets/logo.jpg"
import mylogo from "../assets/mylogo.jpg"
function Navbar() {
    return (<>
        <nav class="navbar">
            <div className="d-flex justify-content-between gap-2">
                <img src={logo}></img>
                <div style={item} className="d-flex justify-content-between gap-3">
                    <div>INTERIORS</div>
                    <div>DESIGN IDEAS</div>
                    <div>CITIES</div>
                    <div>MORE</div>
                </div>
            </div>
        </nav>
            <div>
                <img style={pic} src={mylogo}alt="logoo"></img>
            </div>
        


    </>
    );
};
const item = {
    fontWeight: "700",
    marginTop:"9px"
}
const pic={
    width:"100%",
    height:"400px",
   
}

export default Navbar;