import { mapEmbedSrc } from "@/data/contact";

export default function MapEmbed() {
  return (
    <section className="map-wrap">
      <iframe
        className="map-embed"
        title="Auto Iris Installations location map"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
