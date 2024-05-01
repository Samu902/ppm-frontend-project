import FooterBody from "./footer/FooterBody";
import FooterFooter from "./footer/FooterFooter";
import FooterHeader from "./footer/FooterHeader";

/**
 * Page footer
 */
export default function Footer() {
    return (
        <footer>
            <FooterHeader />
            <FooterBody />
            <FooterFooter />
        </footer>
    );
}