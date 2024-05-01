/**
 * Page footer's footer
 */
export default function FooterFooter() {
    return (
        <div style={{ backgroundColor: "#f8f5ef" }}>
            <div class="container text-center" style={{ fontSize: 10 }}>
                <nav className="hstack gap-2 justify-content-center py-2">
                    <div>
                        <a href="#">User Agreement</a>
                    </div>
                    <div className="vr"></div>
                    <div>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="vr"></div>
                    <div>
                        <a href="#">Ad Choices</a>
                    </div>
                    <div className="vr"></div>
                    <div>
                        <i class="bi bi-toggle-on"></i>
                    </div>
                    <div>
                        <a href="#">Cookie Settings</a>
                    </div>
                </nav>
                <p className="py-4 m-0">© In a maximus sem. Nullam <a href="#">User Agreement</a> tortor at elit vestibulum, id bibendum est pulvinar. Aenean consectetur a tortor ut sodales. 
                    Morbi varius ornare eros, id ultricies ante accumsan nec. Donec fermentum, massa sed tempor pharetra, sapien lacus dapibus diam, 
                    eu bibendum nulla dolor sed mi. Aenean ac auctor lorem, eget mollis sapien. Fusce sodales, nulla sit amet rutrum scelerisque, nisi ex commodo ante, 
                    ut venenatis dui mi ac orci. Donec cursus <a href="#">Privacy Policy</a> id orci posuere, a aliquet risus elementum. Sed diam turpis, elementum in felis ut, auctor accumsan mi. 
                    Aenean egestas suscipit sollicitudin. Proin sapien velit, tempus sit amet aliquam et, dignissim eu nisi. Nullam ut sapien fringilla, 
                    vehicula felis vulputate, aliquet ligula. Mauris nec tristique neque, sit amet finibus ante.
                </p>
            </div>
        </div>
    );
}