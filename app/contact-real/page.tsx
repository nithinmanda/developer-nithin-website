import ContactReal from "../new-components/Contact-real";
import AgencyNavbar from "../new-components/AgencyNavbar";
import Footer from "../new-components/Footer";

export default function ContactRealPage() {
    return (
        <div className="bg-background text-foreground transition-colors duration-300">
            <AgencyNavbar />
            <div className="pt-32">
                <ContactReal />
            </div>
            <Footer />
        </div>
    );
}
