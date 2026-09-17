import WhyChoose from "@/components/sections/WhyChoose";
import { serviceWhyPoints } from "@/data/services";

/** "Why Choose Auto Iris?" section used on the services pages. */
export default function ServicesWhyChoose() {
  return (
    <WhyChoose
      eyebrow="Our Services"
      heading={
        <>
          Why Choose <span className="highlight">Auto Iris</span>?
        </>
      }
      text="From the first site survey to ongoing maintenance, we make protecting your home or business simple, reliable and completely stress-free"
      items={serviceWhyPoints}
    />
  );
}
