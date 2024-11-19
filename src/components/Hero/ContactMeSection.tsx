import ContactMe from "./ContactMe";
import { Separator } from "@/components/ui/separator";

const ContactMeSection = () => (
    <div className="flex items-center justify-center flex-col">
        <ContactMe />
        <Separator className="bg-white w-[80%] mt-1" />
    </div>
);

export default ContactMeSection;
