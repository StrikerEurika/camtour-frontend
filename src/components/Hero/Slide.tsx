import Image from "next/image";

export default function Slide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-full h-screen relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
