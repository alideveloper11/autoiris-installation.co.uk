import Image from "next/image";
import { Icon } from "@/components/icons";
import { whyPoints } from "@/data/home";
import { site } from "@/data/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media reveal">
            <span className="frame" aria-hidden="true" />
            <Image
              src="/images/engineer-branded-service.jpeg"
              alt="Auto Iris engineer in branded uniform on site"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="about-badge">
              <strong>10+</strong>
              Years of
              <br />
              Experience
            </div>
          </div>

          <div className="about-text">
            <span className="eyebrow reveal">Why Choose Us</span>
            <h2 className="reveal">
              A Security Company You Can <span className="highlight">Trust &amp; Rely On</span>
            </h2>
            <p className="reveal">
              Based in Barking and trusted by hundreds of homeowners and businesses across
              the UK, Auto Iris Installations delivers professional security installations.
              Done right the first time, priced fairly, and guaranteed for a minimum of 12
              months.
            </p>
            <p className="reveal">
              Whether you&apos;re protecting your family, your home or your business, we come
              to you from London to Norfolk, Folkestone and Portsmouth, with a no-nonsense,
              quality-first approach.
            </p>
            <ul className="why-list">
              {whyPoints.map((point, index) => (
                <li key={point.title} className={`reveal reveal-delay-${index + 1}`}>
                  <Icon name={point.icon} />
                  <span>
                    <strong>{point.title}</strong> {point.text}
                  </span>
                </li>
              ))}
            </ul>
            <a href={site.phoneHref} className="btn btn-dark reveal reveal-delay-2">
              Call for a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
