import { useState } from "react";

/**
 * Page header
 */
export default function Header() {

    let [cityModalOn, setCityModalOn] = useState(false);

    return (
        <header>
            <nav className="hstack gap-2 p-2 bg-light border-bottom">
                <div>
                    <b>THE LOREM IPSUM JOURNALS</b>
                </div>
                <div className="vr"></div>
                <div className="me-auto">
                    <b>Select a city</b>
                    <i className="bi bi-chevron-down" role="button" onClick={() => alert("ciao")}></i>
                </div>
                <div>
                    <b>Sign In</b>
                    <i className="bi bi-chevron-down" role="button" onClick={() => alert("ciao")}></i>
                </div>
            </nav>
            <nav>

            </nav>
        </header>
    );
    {
        ```
        <header id="FlatNavigation" class="nav-header slate fixed-top">
        <div id="cxense_top_bar" style="display: none;">
            <div class="bg-white">
                <div class="d-flex flex-col flex-md-row justify-content-around px-4"
                    style="background-color: rgb(0, 0, 0); padding: 0px !important;">
                    <div class="
                d-flex flex-column flex-md-row justify-content-center
                text-white py-4 text-center m-auto
                ">
                        <div class="font-weight-bold" style="color: white; font-size: 24px;">

                        </div>
                        <div class="d-flex flex-column flex-md-row font-weight-bold">
                            <div class="mt-2 pl-md-5 pr-md-3 mx-1" style="color: white; font-size: 16px;">

                                <span class="pl-md-3" style="text-decoration: line-through;">

                                </span>
                            </div>
                            <div style="color: white; font-size: 24px;">

                            </div>
                        </div>
                        <div class="px-5 mx-0" style="color: white; font-size: 16px;">
                            <div class="
                            d-flex flex-md-row justify-content-around
                            text-monospace m-auto
                        " style="width: auto;"><span>00</span> <span>:</span> <span>00</span> <span>:</span>
                                <span>00</span></div>
                            <div class="
                            d-flex flex-md-row justify-content-around
                        "><span>H</span> <span>M</span> <span>S</span></div>
                        </div>
                        <div class="my-2"><a href="https://www.bizjournals.com/undefined"
                                data-ct="Top Bar : Marketing : undefined"
                                class="btn btn--primary px-4 font-weight-bold py-3" style="font-size: 14px;">
                                Save Now
                            </a></div>
                    </div>
                    <div style="width: 5%;"><button type="button" data-dismiss="alert" aria-label="Close"
                            class="close font-weight-lighter position-absolute"
                            style="color: white; opacity: 0.85; font-size: 34px; right: 2%; top: 10%;"><span
                                aria-hidden="true">×</span></button></div>
                </div>
            </div>
        </div>
        <nav id="SiteNav" class="border-bottom">
            <div role="navigation" class="d-flex justify-content-between align-items-center p-3 px-sm-0 site-nav ">
                <div class="mr-auto d-flex site-nav-contents">
                    <div id="SiteNavBranding" class="font-weight-bold text-uppercase text-center pr-3 pr-sm-0">The
                        Business Journals</div>
                    <div class="vertical-divider border-left ml-1 ml-sm-0">&nbsp;</div>
                    <div id="SelectCityDropdown" class="pl-3 pl-sm-4"><button href="#" id="SelectCityDropdownTrigger"
                            role="button" data-cy="nav-city-btn" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"
                            class="dropdown-toggle dropdown-toggle-remove-bs-icon border-0 rounded-0"><span
                                class="font-weight-bold">Select a City</span><i class="bi bi-chevron-down px-1"
                                style="font-size: 1rem;"></i></button>
                        <div id="SelectCityDropdownMenu" aria-labelledby="SelectCityDropdownTrigger"
                            class="dropdown-menu rounded-0 border-0 py-3 px-5 px-lg-4 m-0 shadow"><a
                                href="https://www.bizjournals.com/" data-ct="Nav : Select City : National"
                                data-cy="market-nav-2661" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">National</span></a> <a
                                href="https://www.bizjournals.com/albany" data-ct="Nav : Select City : Albany"
                                data-cy="market-nav-2251" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Albany</span></a> <a
                                href="https://www.bizjournals.com/albuquerque" data-ct="Nav : Select City : Albuquerque"
                                data-cy="market-nav-2261" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Albuquerque</span></a> <a
                                href="https://www.bizjournals.com/atlanta" data-ct="Nav : Select City : Atlanta"
                                data-cy="market-nav-2271" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Atlanta</span></a> <a
                                href="https://www.bizjournals.com/austin" data-ct="Nav : Select City : Austin"
                                data-cy="market-nav-2281" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Austin</span></a> <a
                                href="https://www.bizjournals.com/baltimore" data-ct="Nav : Select City : Baltimore"
                                data-cy="market-nav-2291" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Baltimore</span></a> <a
                                href="https://www.bizjournals.com/birmingham" data-ct="Nav : Select City : Birmingham"
                                data-cy="market-nav-2301" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Birmingham</span></a> <a
                                href="https://www.bizjournals.com/boston" data-ct="Nav : Select City : Boston"
                                data-cy="market-nav-2311" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Boston</span></a> <a
                                href="https://www.bizjournals.com/buffalo" data-ct="Nav : Select City : Buffalo"
                                data-cy="market-nav-2321" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Buffalo</span></a> <a
                                href="https://www.bizjournals.com/charlotte" data-ct="Nav : Select City : Charlotte"
                                data-cy="market-nav-2331" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Charlotte</span></a> <a
                                href="https://www.bizjournals.com/chicago" data-ct="Nav : Select City : Chicago"
                                data-cy="market-nav-2691" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Chicago</span></a> <a
                                href="https://www.bizjournals.com/cincinnati" data-ct="Nav : Select City : Cincinnati"
                                data-cy="market-nav-2341" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Cincinnati</span></a> <a
                                href="https://www.bizjournals.com/cleveland" data-ct="Nav : Select City : Cleveland"
                                data-cy="market-nav-2701" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Cleveland</span></a> <a
                                href="https://www.bizjournals.com/columbus" data-ct="Nav : Select City : Columbus"
                                data-cy="market-nav-2351" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Columbus</span></a> <a
                                href="https://www.bizjournals.com/dallas" data-ct="Nav : Select City : Dallas"
                                data-cy="market-nav-2361" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Dallas</span></a> <a
                                href="https://www.bizjournals.com/dayton" data-ct="Nav : Select City : Dayton"
                                data-cy="market-nav-2371" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Dayton</span></a> <a
                                href="https://www.bizjournals.com/denver" data-ct="Nav : Select City : Denver"
                                data-cy="market-nav-2381" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Denver</span></a> <a
                                href="https://www.bizjournals.com/triad"
                                data-ct="Nav : Select City : Greensboro/Winston-Salem" data-cy="market-nav-2611"
                                class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Greensboro/Winston-Salem</span></a> <a
                                href="https://www.bizjournals.com/pacific" data-ct="Nav : Select City : Honolulu"
                                data-cy="market-nav-2481" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Honolulu</span></a> <a
                                href="https://www.bizjournals.com/houston" data-ct="Nav : Select City : Houston"
                                data-cy="market-nav-2391" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Houston</span></a> <a
                                href="https://www.bizjournals.com/jacksonville"
                                data-ct="Nav : Select City : Jacksonville" data-cy="market-nav-2401"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Jacksonville</span></a> <a
                                href="https://www.bizjournals.com/kansascity" data-ct="Nav : Select City : Kansas City"
                                data-cy="market-nav-2411" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Kansas City</span></a> <a
                                href="https://www.bizjournals.com/losangeles" data-ct="Nav : Select City : Los Angeles"
                                data-cy="market-nav-2421" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Los Angeles</span></a> <a
                                href="https://www.bizjournals.com/louisville" data-ct="Nav : Select City : Louisville"
                                data-cy="market-nav-2431" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Louisville</span></a> <a
                                href="https://www.bizjournals.com/memphis" data-ct="Nav : Select City : Memphis"
                                data-cy="market-nav-2441" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Memphis</span></a> <a
                                href="https://www.bizjournals.com/southflorida"
                                data-ct="Nav : Select City : Miami/Fort Lauderdale" data-cy="market-nav-2581"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Miami/Fort
                                    Lauderdale</span></a> <a href="https://www.bizjournals.com/milwaukee"
                                data-ct="Nav : Select City : Milwaukee" data-cy="market-nav-2451"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Milwaukee</span></a> <a
                                href="https://www.bizjournals.com/twincities"
                                data-ct="Nav : Select City : Minneapolis/St. Paul" data-cy="market-nav-2631"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Minneapolis/St.
                                    Paul</span></a> <a href="https://www.bizjournals.com/nashville"
                                data-ct="Nav : Select City : Nashville" data-cy="market-nav-2461"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Nashville</span></a> <a
                                href="https://www.bizjournals.com/newyork" data-ct="Nav : Select City : New York"
                                data-cy="market-nav-2851" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">New York</span></a> <a
                                href="https://www.bizjournals.com/orlando" data-ct="Nav : Select City : Orlando"
                                data-cy="market-nav-2471" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Orlando</span></a> <a
                                href="https://www.bizjournals.com/philadelphia"
                                data-ct="Nav : Select City : Philadelphia" data-cy="market-nav-2491"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Philadelphia</span></a> <a
                                href="https://www.bizjournals.com/phoenix" data-ct="Nav : Select City : Phoenix"
                                data-cy="market-nav-2501" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Phoenix</span></a> <a
                                href="https://www.bizjournals.com/pittsburgh" data-ct="Nav : Select City : Pittsburgh"
                                data-cy="market-nav-2511" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Pittsburgh</span></a> <a
                                href="https://www.bizjournals.com/portland" data-ct="Nav : Select City : Portland"
                                data-cy="market-nav-2521" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Portland</span></a> <a
                                href="https://www.bizjournals.com/rhodeisland" data-ct="Nav : Select City : Providence"
                                data-cy="market-nav-2891" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Providence</span></a> <a
                                href="https://www.bizjournals.com/triangle" data-ct="Nav : Select City : Raleigh/Durham"
                                data-cy="market-nav-2621" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Raleigh/Durham</span></a> <a
                                href="https://www.bizjournals.com/sacramento" data-ct="Nav : Select City : Sacramento"
                                data-cy="market-nav-2531" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Sacramento</span></a> <a
                                href="https://www.bizjournals.com/sanantonio" data-ct="Nav : Select City : San Antonio"
                                data-cy="market-nav-2541" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">San Antonio</span></a> <a
                                href="https://www.bizjournals.com/sanfrancisco"
                                data-ct="Nav : Select City : San Francisco" data-cy="market-nav-2551"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">San Francisco</span></a>
                            <a href="https://www.bizjournals.com/seattle" data-ct="Nav : Select City : Seattle"
                                data-cy="market-nav-2571" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Seattle</span></a> <a
                                href="https://www.bizjournals.com/sanjose" data-ct="Nav : Select City : Silicon Valley"
                                data-cy="market-nav-2561" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Silicon Valley</span></a> <a
                                href="https://www.bizjournals.com/stlouis" data-ct="Nav : Select City : St. Louis"
                                data-cy="market-nav-2591" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">St. Louis</span></a> <a
                                href="https://www.bizjournals.com/tampabay" data-ct="Nav : Select City : Tampa Bay"
                                data-cy="market-nav-2601" class="dropdown-item p-0 m-0"><span
                                    class="line-height-reset">Tampa Bay</span></a> <a
                                href="https://www.bizjournals.com/washington"
                                data-ct="Nav : Select City : Washington, D.C." data-cy="market-nav-2641"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Washington,
                                    D.C.</span></a> <a href="https://www.bizjournals.com/wichita"
                                data-ct="Nav : Select City : Wichita" data-cy="market-nav-2651"
                                class="dropdown-item p-0 m-0"><span class="line-height-reset">Wichita</span></a></div>
                    </div>
                </div>
                <div class="py-3 pr-sm-2 site-nav-contents">
                    <div id="AccountDropdown">
                        <div class="vue-dropdown dropdown nav-top-dropdown nav-top-account-dropdown">
                            <div class="vue-dropdown-trigger dropdown-trigger"><button
                                    data-cy="nav-account-dropdown-activator" aria-haspopup="true" aria-expanded="false"
                                    tabindex="0" class="nav-top-btn nav-account-btn"><span>Sign In</span><i
                                        class="icon-custom nav-account-icon"></i></button></div>
                            <div class="vue-dropdown-contents" style="display: none;">
                                <div x-arrow=""></div>
                                <ul class="dropdown-content nav-top-dropdown-account-list">
                                    <li class="nav-top-dropdown-account-list-item"><a
                                            href="https://www.bizjournals.com/nashville/login?r=%2Fnashville%2F"
                                            data-ct="Nav : Account Anonymous User : Sign In"
                                            data-cy="nav-account-dropdown-login" class="nav-account-link"><b>Sign In</b>
                                            <small class="nav-account-link-sub">Existing Members</small></a></li>
                                    <li class="nav-top-dropdown-account-list-item"><a
                                            href="https://www.bizjournals.com/nashville/login?r=%2Fnashville%2F"
                                            data-ct="Nav : Account Anonymous User : Create Your FREE Account"
                                            data-cy="nav-account-dropdown-register" class="nav-account-link"><b>Become a
                                                Member</b> <small class="nav-account-link-sub">It’s FREE!</small></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav id="MarketNav" class="navbar border-bottom p-0  align-items-stretch">
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
            <div class="border-bottom d-none d-sm-flex order-sm-2 w-sm-100"></div>
            <div id="MarketSiteLinksBar" class="d-sm-flex align-items-center order-first order-sm-3"><button
                    id="MarketSiteLinksDropdownTrigger" type="button" data-toggle="collapse"
                    data-target="#MarketSiteLinksDropdownMenu" aria-controls="MarketSiteLinksDropdownMenu"
                    aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><i
                        class="bi bi-list nav-open-btn" style="font-size: 2.4rem;"></i> <span
                        class="sr-only">Menu</span> <i class="bi bi-x nav-close-btn" style="font-size: 2.4rem;"></i>
                    <span class="sr-only">Close</span></button>
                <div id="MarketSiteLinksMenuDesktop" role="presentation"
                    class="d-none d-sm-none align-items-center mr-auto">
                    <div class="topitems-dt-primary align-items-center"><a
                            href="https://www.bizjournals.com/nashville/news" data-ct="2021 Nav : Latest News"
                            class="dropdown-item px-3 ">Latest News</a> <a
                            href="https://www.bizjournals.com/nashville/datacenter"
                            data-ct="2021 Nav : Lists &amp; Leads" class="dropdown-item px-3 ">Lists &amp; Leads</a> <a
                            href="https://www.bizjournals.com/nashville/news/commercial-real-estate"
                            data-ct="2021 Nav : Commercial Real Estate" class="dropdown-item px-3 ">Commercial Real
                            Estate</a> <a
                            href="https://www.bizjournals.com/nashville/news/banking-and-financial-services"
                            data-ct="2021 Nav : Banking" class="dropdown-item px-3 ">Banking</a> <a
                            href="https://www.bizjournals.com/nashville/news/technology" data-ct="2021 Nav : Technology"
                            class="dropdown-item px-3 ">Technology</a> <a
                            href="https://www.bizjournals.com/nashville/news/residential-real-estate"
                            data-ct="2021 Nav : Residential Real Estate" class="dropdown-item px-3 ">Residential Real
                            Estate</a> <a href="https://www.bizjournals.com/nashville/news/food-and-lifestyle"
                            data-ct="2021 Nav : Food &amp; Lifestyle" class="dropdown-item px-3 ">Food &amp;
                            Lifestyle</a> <a href="https://www.bizjournals.com/nashville/inno"
                            data-ct="2021 Nav : Nashville Inno" class="dropdown-item px-3 ">Nashville Inno</a></div>
                    <div class="topitems-dt-secondary align-items-center"><span class="d-block px-3 py-1">|</span> <a
                            href="https://www.bizjournals.com/nashville/event" data-ct="2021 Nav : Events"
                            class="dropdown-item px-3 ">Events</a> <a
                            href="https://www.bizjournals.com/nashville/40-under-40" data-ct="2021 Nav : 40 Under 40"
                            class="dropdown-item px-3 ">40 Under 40</a> <a
                            href="https://www.bizjournals.com/nashville/best-places-to-work"
                            data-ct="2021 Nav : Best Places to Work" class="dropdown-item px-3 ">Best Places to Work</a>
                        <a href="https://www.bizjournals.com/nashville/women-of-influence"
                            data-ct="2021 Nav : Women of Influence" class="dropdown-item px-3 ">Women of Influence</a>
                        <a href="https://www.bizjournals.com/nashville/nomination" data-ct="2021 Nav : Nominations"
                            class="dropdown-item px-3 ">Nominations</a></div>
                </div>
            </div>
            <div id="MarketSiteLinksDropdownMenu" role="navigation"
                class="collapse navbar-collapse order-2 order-sm-last shadow border-top border-bottom">
                <div class="navbar-nav">
                    <div id="MarketSiteLinksMenuMobile" class="d-xl-none p-4 mx-4">
                        <div id="MarketSiteLinksMenuMobileInnerContainer"><a
                                href="https://www.bizjournals.com/nashville/news" data-ct="2021 Nav : Latest News"
                                class="dropdown-item p-0 m-0 "><span class="line-height-reset">Latest News</span></a> <a
                                href="https://www.bizjournals.com/nashville/datacenter"
                                data-ct="2021 Nav : Lists &amp; Leads" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Lists &amp; Leads</span></a> <a
                                href="https://www.bizjournals.com/nashville/news/commercial-real-estate"
                                data-ct="2021 Nav : Commercial Real Estate" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Commercial Real Estate</span></a> <a
                                href="https://www.bizjournals.com/nashville/news/banking-and-financial-services"
                                data-ct="2021 Nav : Banking" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Banking</span></a> <a
                                href="https://www.bizjournals.com/nashville/news/technology"
                                data-ct="2021 Nav : Technology" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Technology</span></a> <a
                                href="https://www.bizjournals.com/nashville/news/residential-real-estate"
                                data-ct="2021 Nav : Residential Real Estate" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Residential Real Estate</span></a> <a
                                href="https://www.bizjournals.com/nashville/news/food-and-lifestyle"
                                data-ct="2021 Nav : Food &amp; Lifestyle" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Food &amp; Lifestyle</span></a> <a
                                href="https://www.bizjournals.com/nashville/inno" data-ct="2021 Nav : Nashville Inno"
                                class="dropdown-item p-0 m-0 "><span class="line-height-reset">Nashville Inno</span></a>
                            <a href="https://www.bizjournals.com/nashville/event" data-ct="2021 Nav : Events"
                                class="dropdown-item p-0 m-0 "><span class="line-height-reset">Events</span></a> <a
                                href="https://www.bizjournals.com/nashville/40-under-40"
                                data-ct="2021 Nav : 40 Under 40" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">40 Under 40</span></a> <a
                                href="https://www.bizjournals.com/nashville/best-places-to-work"
                                data-ct="2021 Nav : Best Places to Work" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Best Places to Work</span></a> <a
                                href="https://www.bizjournals.com/nashville/women-of-influence"
                                data-ct="2021 Nav : Women of Influence" class="dropdown-item p-0 m-0 "><span
                                    class="line-height-reset">Women of Influence</span></a> <a
                                href="https://www.bizjournals.com/nashville/nomination" data-ct="2021 Nav : Nominations"
                                class="dropdown-item p-0 m-0 "><span class="line-height-reset">Nominations</span></a>
                        </div>
                        <div id="MarketSubBtnMobile" class="py-4 d-md-none"><a
                                href="https://www.bizjournals.com/nashville/subscribe?iana=csnav&amp;csrc=6310"
                                class="btn btn--primary btn--small d-block px-5 py-3">Subscribe</a></div>
                        <hr class="d-none d-md-block mt-1 mb-n5" style="border-color: rgb(221, 221, 221);"/>
                    </div>
                    <div id="MarketSiteLinksSubNav" class="accordion p-4 mx-4">
                        <div class="p-0 nav-item border-top border-bottom-0"><button type="button"
                                data-toggle="collapse" data-target="#dropdownMenuButtonIndustriesTopics"
                                aria-expanded="true" aria-controls="dropdownMenuButtonIndustriesTopics"
                                class="font-weight-bold text-left w-100 px-0 py-4 border-0 rounded-0 bg-transparent">
                                <div>
                                    Industries &amp; Topics <span class="float-right d-inline-block"><i
                                            class="bi bi-chevron-down"></i></span></div>
                            </button>
                            <div id="dropdownMenuButtonIndustriesTopics"
                                aria-labelledby="dropdownMenuButtonIndustriesTopics"
                                data-parent="#MarketSiteLinksSubNav"
                                class="border-0 rounded-0 bg-transparent p-0 m-0 rounded-0 w-100 collapse show">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3 order-sm-0">
                                        <div data-ct="2021 Nav : industries : Banking &amp; Financial Services"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/banking-and-financial-services">Banking
                                                &amp; Financial Services</a></div>
                                        <div data-ct="2021 Nav : industries : Career &amp; Workplace"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/career-and-workplace">Career
                                                &amp; Workplace</a></div>
                                        <div data-ct="2021 Nav : industries : Commercial Real Estate"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/commercial-real-estate">Commercial
                                                Real Estate</a></div>
                                        <div data-ct="2021 Nav : industries : Diversity, Equity and Inclusion"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/career-and-workplace/diversity-equity-and-inclusion">Diversity,
                                                Equity and Inclusion</a></div>
                                        <div data-ct="2021 Nav : industries : Education" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/education">Education</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-2 order-lg-1">
                                        <div data-ct="2021 Nav : industries : Energy" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/energy">Energy</a>
                                        </div>
                                        <div data-ct="2021 Nav : industries : Food &amp; Lifestyle"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/food-and-lifestyle">Food
                                                &amp; Lifestyle</a></div>
                                        <div data-ct="2021 Nav : industries : Government &amp; Regulations"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/government-and-regulations">Government
                                                &amp; Regulations</a></div>
                                        <div data-ct="2021 Nav : industries : Health Care" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/health-care">Health
                                                Care</a></div>
                                        <div data-ct="2021 Nav : industries : Manufacturing" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/manufacturing">Manufacturing</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-1 order-lg-2">
                                        <div data-ct="2021 Nav : industries : Media &amp; Marketing"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/media-and-marketing">Media
                                                &amp; Marketing</a></div>
                                        <div data-ct="2021 Nav : industries : Philanthropy &amp; Nonprofits"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/philanthropy-and-nonprofits">Philanthropy
                                                &amp; Nonprofits</a></div>
                                        <div data-ct="2021 Nav : industries : Professional Services"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/professional-services">Professional
                                                Services</a></div>
                                        <div data-ct="2021 Nav : industries : Residential Real Estate"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/residential-real-estate">Residential
                                                Real Estate</a></div>
                                        <div data-ct="2021 Nav : industries : Retailing" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/retailing">Retailing</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-3">
                                        <div data-ct="2021 Nav : industries : Sports Business" class="pt-1 pb-3 px-0 ">
                                            <a href="https://www.bizjournals.com/nashville/news/sports">Sports
                                                Business</a></div>
                                        <div data-ct="2021 Nav : industries : Technology" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/technology">Technology</a>
                                        </div>
                                        <div data-ct="2021 Nav : industries : Transportation" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/transportation">Transportation</a>
                                        </div>
                                        <div data-ct="2021 Nav : industries : Travel &amp; Tourism"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/travel-and-tourism">Travel
                                                &amp; Tourism</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 nav-item border-top border-bottom-0"><button type="button"
                                data-toggle="collapse" data-target="#dropdownMenuButtonPartnerInsightsSponsoredContent"
                                aria-expanded="true" aria-controls="dropdownMenuButtonPartnerInsightsSponsoredContent"
                                class="font-weight-bold text-left w-100 px-0 py-4 border-0 rounded-0 bg-transparent">
                                <div>
                                    Partner Insights (Sponsored Content) <span class="float-right d-inline-block"><i
                                            class="bi bi-chevron-down"></i></span></div>
                            </button>
                            <div id="dropdownMenuButtonPartnerInsightsSponsoredContent"
                                aria-labelledby="dropdownMenuButtonPartnerInsightsSponsoredContent"
                                data-parent="#MarketSiteLinksSubNav"
                                class="border-0 rounded-0 bg-transparent p-0 m-0 rounded-0 w-100 collapse show">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3 order-sm-0">
                                        <div data-ct="2021 Nav : sponsored_content : Partner Content"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/partner-content">Partner
                                                Content</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-2 order-lg-1">
                                        <div data-ct="2021 Nav : sponsored_content : Solutions for a Growing Middle TN"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/partners/solutions-for-a-growing-middle-tn/">Solutions
                                                for a Growing Middle TN</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-1 order-lg-2">
                                        <div data-ct="2021 Nav : sponsored_content : Leadership Insights"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/partners/business-matters/">Leadership
                                                Insights</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 nav-item border-top border-bottom-0"><button type="button"
                                data-toggle="collapse" data-target="#dropdownMenuButtonEvents"
                                aria-controls="dropdownMenuButtonEvents"
                                class="font-weight-bold text-left w-100 px-0 py-4 border-0 rounded-0 bg-transparent">
                                <div>
                                    Events <span class="float-right d-inline-block"><i
                                            class="bi bi-chevron-down"></i></span></div>
                            </button>
                            <div id="dropdownMenuButtonEvents" aria-labelledby="dropdownMenuButtonEvents"
                                data-parent="#MarketSiteLinksSubNav"
                                class="border-0 rounded-0 bg-transparent p-0 m-0 rounded-0 w-100 collapse ">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3 order-sm-0">
                                        <div data-ct="2021 Nav : events : NBJ Events" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/event">NBJ Events</a></div>
                                        <div data-ct="2021 Nav : events : Nominations" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/nomination">Nominations</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-2 order-lg-1">
                                        <div data-ct="2021 Nav : events : Event Photos" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/photo-center">Event
                                                Photos</a></div>
                                        <div data-ct="2021 Nav : events : Business Events Calendar"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/calendar">Business Events
                                                Calendar</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-1 order-lg-2">
                                        <div data-ct="2021 Nav : events : NBJ&#39;s Women of Influence"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/women-of-influence">NBJ's
                                                Women of Influence</a></div>
                                        <div data-ct="2021 Nav : events : NBJ&#39;s 40 Under 40 Awards"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/40-under-40">NBJ's 40 Under
                                                40 Awards</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 nav-item border-top border-bottom-0"><button type="button"
                                data-toggle="collapse" data-target="#dropdownMenuButtonMarketingSolutions"
                                aria-controls="dropdownMenuButtonMarketingSolutions"
                                class="font-weight-bold text-left w-100 px-0 py-4 border-0 rounded-0 bg-transparent">
                                <div>
                                    Marketing Solutions <span class="float-right d-inline-block"><i
                                            class="bi bi-chevron-down"></i></span></div>
                            </button>
                            <div id="dropdownMenuButtonMarketingSolutions"
                                aria-labelledby="dropdownMenuButtonMarketingSolutions"
                                data-parent="#MarketSiteLinksSubNav"
                                class="border-0 rounded-0 bg-transparent p-0 m-0 rounded-0 w-100 collapse ">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3 order-sm-0">
                                        <div data-ct="2021 Nav : products : Book of Lists" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/datacenter/lists">Book of
                                                Lists</a></div>
                                        <div data-ct="2021 Nav : products : Book of Lists Unlimited"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/datacenter/lists/book-of-lists-unlimited">Book
                                                of Lists Unlimited</a></div>
                                        <div data-ct="2021 Nav : products : People on the Move" class="pt-1 pb-3 px-0 ">
                                            <a href="https://www.bizjournals.com/nashville/potm">People on the Move</a>
                                        </div>
                                        <div data-ct="2021 Nav : products : BizSpotlight" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/press-release">BizSpotlight</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-2 order-lg-1">
                                        <div data-ct="2021 Nav : products : Property Showcase" class="pt-1 pb-3 px-0 ">
                                            <a href="https://www.bizjournals.com/nashville/listings/9">Property
                                                Showcase</a></div>
                                        <div data-ct="2021 Nav : products : Home of the Day" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/home-of-the-day">Home of the
                                                Day</a></div>
                                        <div data-ct="2021 Nav : products : Cool Spaces" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/listings/11">Cool Spaces</a>
                                        </div>
                                        <div data-ct="2021 Nav : products : BizEquity" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizequity.com/" target="_blank"
                                                rel="noopener">BizEquity</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-1 order-lg-2">
                                        <div data-ct="2021 Nav : products : Store" class="pt-1 pb-3 px-0 "><a
                                                href="https://promo.bizjournals.com/nashville/store/" target="_blank"
                                                rel="noopener">Store</a></div>
                                        <div data-ct="2021 Nav : products : Leads" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/datacenter/leads">Leads</a>
                                        </div>
                                        <div data-ct="2021 Nav : products : Crane Watch" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/feature/crane-watch">Crane
                                                Watch</a></div>
                                        <div data-ct="2021 Nav : products : Advertise With Us" class="pt-1 pb-3 px-0 ">
                                            <a href="https://advertise.bizjournals.com/brands/nashville/"
                                                target="_blank" rel="noopener">Advertise With Us</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-3">
                                        <div data-ct="2021 Nav : products : Leadership Trust" class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/leadership-trust">Leadership
                                                Trust</a></div>
                                        <div data-ct="2021 Nav : products : Research Intelligence"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/business-intelligence">Research
                                                Intelligence</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-0 nav-item border-top border-bottom-0"><button type="button"
                                data-toggle="collapse" data-target="#dropdownMenuButtonNewslettersSubscriptions"
                                aria-controls="dropdownMenuButtonNewslettersSubscriptions"
                                class="font-weight-bold text-left w-100 px-0 py-4 border-0 rounded-0 bg-transparent">
                                <div>
                                    Newsletters &amp; Subscriptions <span class="float-right d-inline-block"><i
                                            class="bi bi-chevron-down"></i></span></div>
                            </button>
                            <div id="dropdownMenuButtonNewslettersSubscriptions"
                                aria-labelledby="dropdownMenuButtonNewslettersSubscriptions"
                                data-parent="#MarketSiteLinksSubNav"
                                class="border-0 rounded-0 bg-transparent p-0 m-0 rounded-0 w-100 collapse ">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3 order-sm-0">
                                        <div data-ct="2021 Nav : publications : Newsletter Sign-Up"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/newsletters">Newsletter
                                                Sign-Up</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-2 order-lg-1">
                                        <div data-ct="2021 Nav : publications : Start a Subscription"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/subscribe">Start a
                                                Subscription</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-1 order-lg-2">
                                        <div data-ct="2021 Nav : publications : Subscriber-Only Content"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/news/subscribers">Subscriber-Only
                                                Content</a></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3 order-sm-3">
                                        <div data-ct="2021 Nav : publications : Weekly Digital Edition"
                                            class="pt-1 pb-3 px-0 "><a
                                                href="https://www.bizjournals.com/nashville/digital-edition?issue_id=40417">Weekly
                                                Digital Edition</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </header>
        ```
    }
}