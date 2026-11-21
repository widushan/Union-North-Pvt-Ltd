import Navbar from "@/components/shared/Navbar";
import PageHeader from "@/components/shared/PageHeader";
import ContactFormAndInfo from "@/components/contact-us/ContactFormAndInfo";
import Footer from "@/components/shared/Footer";
import { contactUsData } from "@/data/contactUs";

export default function ContactUsPage() {
  const { header } = contactUsData;

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pb-12">
        <PageHeader
          breadcrumbs={header.breadcrumbs}
          title={header.title}
          subtitle={header.subtitle}
        />
        <ContactFormAndInfo />
      </main>

      <Footer />
    </div>
  );
}
