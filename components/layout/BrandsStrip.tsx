import Image from "next/image";
import { brands } from "@/data/site";

export default function BrandsStrip() {
  return (
    <section className="brands-strip" aria-label="Alarm brands we work with">
      <div className="container brands-strip-inner">
        <Image
          src={brands.logo}
          alt="Orisec"
          className="brands-logo"
          width={1320}
          height={514}
        />
        <div className="brands-text">
          <span className="brands-label">{brands.label}</span>
          <span className="brands-list">{brands.list}</span>
        </div>
      </div>
    </section>
  );
}
