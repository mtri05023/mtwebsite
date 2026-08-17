import Image from "next/image";

type ProjectImageFrameProps = {
  src: string;
  alt: string;
  compact?: boolean;
  gallery?: boolean;
  priority?: boolean;
};

export function ProjectImageFrame({ src, alt, compact = false, gallery = false, priority = false }: ProjectImageFrameProps) {
  return (
    <div className={`project-image-frame ${compact ? "project-image-frame-compact" : ""} ${gallery ? "project-image-frame-gallery" : ""}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" priority={priority} />
    </div>
  );
}
