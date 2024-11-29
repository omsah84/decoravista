function Offer() {
    return (
        <div>
            <div style={{
                backgroundColor:"#fbf5f5",
                color:"black",
                width:"100%",
                height:"fit-content"
            }} >
                <h1 className="text-center"> What we offer </h1>
                <p className="text-center" style={{ padding: "0px 100px" }}>
                    <p> our strenght of proficient execution is backend by
                        experienced designers and project and project managers with  rich experience in interior designing,space planning,and project execution services,turning any space into a powerful expression of the clients personality.</p>
                </p>
                <div className="d-flex flex-column  flex-sm-column  flex-lg-row justify-content-center gap-5">
                    <div className="card text-center  p-3 m-3" style={{ height: "fit-content",boxShadow:"0px 0px 3px red" }}>
                        <h1 className="text-center">Warranty</h1>
                        <li style={{ listStyle: "none" }}>FLAT 10-Year Warranty on Modular Products</li>
                        <li style={{ listStyle: "none" }}>Up to 1-Year on-site Service Warranty</li>
                        <li style={{ listStyle: "none" }}>5-Year Warranty on Workmanship and installation</li>
                        <li style={{ listStyle: "none" }}>Lifetime Warranty on hardware Components</li>
                        <li style={{ listStyle: "none" }}>Dedicated Customer Support for Warranty Claims</li>
                    </div>
              

                <div className="card text-center p-3 m-3" style={{ height: "fit-content",boxShadow:"0px 0px 3px red" }}>
                    <h2 className="text-center">Our Services</h2>
                    <li style={{ listStyle: "none" }}>Modular Kitchens</li>
                    <li style={{ listStyle: "none" }}>Modular Wardrobes</li>
                    <li style={{ listStyle: "none" }}>lighting</li>
                    <li style={{ listStyle: "none" }}>Flooring</li>
                    <li style={{ listStyle: "none" }}>Electrical Work</li>
                    <li style={{ listStyle: "none" }}>Civil Work</li>
                    <li style={{ listStyle: "none" }}>False Ceiling</li>
                    <li style={{ listStyle: "none" }}>Wall Design & Painting</li>
                </div>
                <div className="card text-center  p-3 m-3" style={{ height: "fit-content",boxShadow:"0px 0px 3px red" }}>
                    <h3 className="text-center">Technology & Science </h3>
                    <li style={{ listStyle: "none" }}>AquaBloc Technology</li>
                    <li style={{ listStyle: "none" }}>DuraBuild Technology</li>
                    <li style={{ listStyle: "none" }}>Design Science</li>
                    <li style={{ listStyle: "none" }}>Eco-friendly Materials for Sustainable Design</li>
                    <li style={{ listStyle: "none" }}>3D Visualization and Planning Software</li>
                    <li style={{ listStyle: "none" }}>Smart Home Intergration Solutions</li>
                    <li style={{ listStyle: "none" }}>Ergonomic Design Principles for Comfort</li>
                </div>
                </div>
            </div>
        </div>


    );
}


export default Offer;