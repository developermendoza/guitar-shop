import { ContactHero } from "../ui/heroes";
import ContactForm from "@/app/components/contact-form";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <div className="bg-white">
        <div className="wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
