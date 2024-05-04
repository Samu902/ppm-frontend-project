/**
 * Page first header
 */
export default function FirstHeader() {
    return (
        <nav className="hstack gap-2 p-2 bg-secondary-subtle border-bottom" style={{ fontSize: 12 }}>
            <div>
                <b>THE LOREM IPSUM JOURNALS</b>
            </div>
            <div className="vr"></div>
            <div className="me-auto">
                <b>Citius altius fortius</b>
                <i className="bi bi-chevron-down" role="button" onClick={() => alert("ciao")}></i>
            </div>
            <div>
                <b>Arem toribus</b>
                <i className="bi bi-chevron-down" role="button" onClick={() => alert("ciao")}></i>
            </div>
        </nav>
    );
}