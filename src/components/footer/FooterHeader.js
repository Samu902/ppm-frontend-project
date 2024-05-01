/**
 * Page footer's header
 */
export default function FooterHeader() {
    return (
        <div className="bg-light border">
            <div className="container">
                <div className="text-end">
                    <a className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover" href="javascript:void(0);" onClick={() => alert("Scrolla su!") /* window.scrollTo(0, 0) */}>
                        Back to Top
                        <i className="bi bi-caret-up-fill"></i>
                    </a>
                </div>
                <div className="fw-bold text-dark">
                    <ul className="nav">
                        <li className="nav-item me-auto">
                            <a className="nav-link link-dark active" aria-current="page" href="#">CITYVILLE <b>BUSINESS JOURNAL</b></a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">News</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">Lists &amp; Leads</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">People</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">Company</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">Events</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link link-dark" href="#">Store</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}