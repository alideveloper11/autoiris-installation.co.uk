import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <Image src={site.logo} alt={`${site.name} logo`} width={288} height={405} priority />
      <span className="logo-text">
        <strong>
          Auto <span>Iris</span>
        </strong>
        <small>Installations</small>
      </span>
    </Link>
  );
}
