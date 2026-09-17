import Image from "next/image";
import { aboutChecklist } from "@/data/about";

export default function AboutWhoWeAre() {
  return (
    <section className="section about-who" id="who-we-are">
      <div className="container">
        <div className="about-who-head">
          <span className="eyebrow-plain reveal">Who We Are</span>
          <h2 className="reveal reveal-delay-1">A Trusted Team For The Job</h2>
        </div>

        <div className="about-who-grid">
          <div className="about-who-copy reveal">
            <p>
              Auto Iris combines practical advice, tidy installation and responsive aftercare,
              serving homeowners, landlords, shops, offices and commercial properties.
            </p>
            <ul className="about-who-list">
              {aboutChecklist.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-who-media reveal reveal-delay-1">
            <Image
              src="/images/connected-protection-card.png"
              alt="Auto Iris Installations connected protection: home linked to cameras, alarms and locks"
              width={562}
              height={357}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
