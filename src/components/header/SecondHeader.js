/**
 * Page second header
 */
export default function SecondHeader() {
    return (
        <nav className="hstack gap-4 bg-light border-bottom" style={{ fontSize: 12 }}>
            <div className="uppercase px-3 py-2 text-white text-center" style={{ fontSize: 18, backgroundColor: "#256686" }}>
                Rebellis <br /><b>augem partii</b>
            </div>
            <div className="me-auto">
                <b>Fors: erta est dura</b>
                <i className="bi bi-chevron-right" role="button" onClick={() => alert("ciao")}></i>
            </div>
            <div className="uppercase">
                Rebellis augem
            </div>
            <div>
                <button className="btn text-white uppercase bt-rounded-0" style={{ backgroundColor: "#256686" }}>Troii bastenti</button>
            </div>
            <div className="pe-4" style={{ fontSize: 15 }}>
                <i className="bi bi-search" role="button" onClick={() => alert("ciao")}></i>
            </div>
        </nav>
    );
}