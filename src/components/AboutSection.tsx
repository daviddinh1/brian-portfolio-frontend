import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
export default function AboutSection() {
  const links = [
    { id: 0, route: "/photography", text: "Photography" },
    { id: 1, route: "/production", text: "Mixed Media" },
    { id: 2, route: "/videography", text: "Commercial" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-17 p-20">
      <div className="text-black font-bold text-5xl text-center">
        From cinematic videography to striking photography and innovative mixed
        media, here’s a showcase of projects crafted to inspire, engage, and
        leave a lasting impression. To explore more of these works, use the
        buttons below
      </div>
      <div className="flex justify-center items-center gap-10">
        {links.map((link) => (
          <Link key={link.id} href={link.route}>
            <InteractiveHoverButton className="text-2xl">
              {link.text}
            </InteractiveHoverButton>
          </Link>
        ))}
      </div>
    </div>
  );
}
