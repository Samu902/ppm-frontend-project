import FirstHeader from "./header/FirstHeader";
import SecondHeader from "./header/SecondHeader";
import ThirdHeader from "./header/ThirdHeader";

/**
 * Page header
 */
export default function Header() {

    return (
        <header>
            <FirstHeader />
            <SecondHeader />
            <ThirdHeader />
        </header>
    );
}