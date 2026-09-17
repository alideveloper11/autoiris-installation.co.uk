export type MapEmbedProps = { src: string; title: string };

export default function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <section className="map-wrap">
      <iframe
        className="map-embed"
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
