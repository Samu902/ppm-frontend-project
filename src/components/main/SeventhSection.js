/**
 * Page seventh content section
 */
export default function SeventhSection() {
    return (
        <section className="my-4 border-top" style={{ backgroundColor: "#f8f5ef" }}>
            <a href="#" className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover serif">
                <nav className="hstack gap-2 pt-2 px-2 pb-0" style={{ fontSize: 12 }}>
                    <div className="me-auto">
                        <h3>Porta bellis</h3>
                    </div>
                    <div>
                        <b>Lilium norium</b>
                        <i className="bi bi-chevron-right" role="button" onClick={() => alert("ciao")}></i>
                    </div>
                </nav>
            </a>
            <div className="row pt-3 px-3 pb-4">
                <div className="col-12 col-md-6">
                    <h4 style={{ fontSize: 15, fontWeight: "bold" }}>Andis portius materuim est interim</h4>
                    <p className="pb-4 my-0" style={{ fontSize: 14 }}>
                        Mauris efficitur bibendum lacus sit amet finibus. Proin ligula sapien, hendrerit eu mauris eget,
                        pulvinar volutpat nisi. Mauris eu dolor eu odio viverra mattis id a ligula.
                        Curabitur sed pulvinar neque. Proin ultrices, magna a venenatis fringilla, tortor nibh tincidunt orci.
                    </p>
                    <button className="btn text-white bt-rounded-0 px-5" style={{ backgroundColor: "#256686" }}>Depesque broii lastenti</button>
                </div>
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-wrap">
                        <div className="col-6 text-center">
                            <span className="fs-3 serif fw-bold me-1">$2.2M</span><i className="bi bi-cash text-warning fs-2"></i><br />
                            <span className="uppercase fw-bold" style={{ fontSize: 12 }}>Gorgi gorgi</span>
                        </div>
                        <div className="col-6 text-center">
                            <span className="fs-3 serif fw-bold me-1">$228M</span><i className="bi bi-receipt text-warning fs-2"></i><br />
                            <span className="uppercase fw-bold" style={{ fontSize: 12 }}>Torbidus forgem</span>
                        </div>
                        <div className="col-6 text-center">
                            <span className="fs-3 serif fw-bold me-1">85%</span><i className="bi bi-mortarboard text-warning fs-2"></i><br />
                            <span className="uppercase fw-bold" style={{ fontSize: 12 }}>Binim enim</span>
                        </div>
                        <div className="col-6 text-center">
                            <span className="fs-3 serif fw-bold me-1">62%</span><i className="bi bi-person-standing-dress text-warning fs-2"></i><br />
                            <span className="uppercase fw-bold" style={{ fontSize: 12 }}>Posque coque</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}