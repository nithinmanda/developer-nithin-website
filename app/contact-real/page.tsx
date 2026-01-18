import ContactReal from "../new-components/Contact-real";
import AgencyNavbar from "../new-components/AgencyNavbar";
import Footer from "../new-components/Footer";

export default function ContactRealPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white">
            <AgencyNavbar />
            <div className="pt-32">
                <ContactReal />
            </div>
            <Footer />
        </main>
    );
}
