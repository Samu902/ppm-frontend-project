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
    ```
    <div id="MarketSearch" role="search" class="dropdown order-1 order-sm-4"><button
        id="MarketSearchDropdownTrigger" type="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"
        class="border-0 px-4 rounded-0 dropdown-toggle dropdown-toggle-remove-bs-icon"><span
            class="nav-open-btn"><i class="bi bi-search"></i><span class="sr-only">Search Form</span></span>
        <span class="nav-close-btn"><i class="bi bi-x"></i><span
                class="sr-only">Close</span></span></button>
    <div id="MarketSearchDropdownMenu" aria-labelledby="MarketSearchDropdownTrigger"
        class="rounded-0 p-5 m-0 border-0 vw-100 dropdown-menu dropdown-menu-right">
        <div class="container">
            <form id="search" name="search" action="https://www.bizjournals.com/nashville/search/results"
                method="get" class="vw-100">
                <div id="SearchForm" class="position-relative input--overlay form-item form-item--group">
                    <label for="SearchInput" class="sr-only">Search</label> <i id="SearchIconDisplay"
                        class="bi bi-search position-absolute text-muted px-1"></i> <input id="SearchInput"
                        name="q" type="text" placeholder="Search" aria-label="search term"
                        class="form-item__control header__search__input" /> <span
                        class="form-item--group__add-on form-item--group__add-on--btn"><button
                            id="SearchButton" type="submit" aria-label="Submit search" name="search__button"
                            data-ct="OPT : List Landing : Search Lists"
                            class="search__button bg-white px-2 btn"><i class="bi bi-arrow-right px-2"></i>
                            <span class="sr-only"> Search</span></button></span></div>
            </form>
        </div>
    </div>
    </div>
    <div id="MarketBranding" role="link" class="order-0 flex-grow-1 flex-md-grow-0 text-center header__logo"><a
        href="https://www.bizjournals.com/nashville" data-ct="Logo"
        class="d-flex align-items-center text-center mx-auto h-100 logo-link"><img
            src="./Nashville Business News - Nashville Business Journal_files/nashville-logo.svg"
            alt="Nashville Business Journal" data-cy="nav-banner-brand-img"
            onerror="this.onerror=null;this.src=this.src.replace(&#39;.svg&#39;,&#39;.png&#39;);"
            class="nav-banner-brand-img m-auto"/></a></div>
    <div id="MarketPromo" role="link"
    class="d-none d-sm-none order-sm-0 d-md-flex flex-sm-grow-1 align-items-center">
    <div class="px-4 ml-2"><a href="https://www.bizjournals.com/nashville/feature/crane-watch">
            <div class="d-flex align-items-stretch">
                <div class="align-self-center pr-2">
                    <div class="promo-title font-weight-bold">
                        Crane Watch: The Big Map of Projects <i class="bi bi-chevron-right"></i></div>
                </div>
            </div>
        </a></div>
    </div>
    <div class="border-bottom d-sm-none order-3 w-100"></div>
    <div id="MarketSubOffer" role="link"
    class="order-last order-sm-1 d-flex flex-sm-grow-1 flex-lg-grow-0 justify-content-center justify-content-sm-end w-100 w-sm-auto">
    <div id="cxense_marketing_nav_sub_offer" class="p-sm-4 py-md-2 p-lg-4 d-flex align-items-center"
        style="">
        <div class="text-uppercase mr-sm-4">ACCESS ALL ARTICLES</div>
        <a data-campaign="183" data-widget="6fe160d6915313f82bf0efa26dc5fbc799d1ad75"
            class="d-sm-inline-block btn btn--primary btn--small px-5 cx-adobeClickTracking"
            id="cXLinkIdlvm554rylwr3rnd1"
            href="https://www.bizjournals.com/marketredirect/subscribe?iana=csnav&amp;csrc=6310&amp;cpncd=cx0224feb&amp;redirectmarket=nashville"
            style="background-color: undefined;">SUBSCRIBE NOW
        </a>
    </div>
    </div>
    ```
}