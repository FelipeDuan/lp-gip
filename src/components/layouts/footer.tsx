import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import { SocialIcon } from "../ui/social-icon";

export function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col justify-center items-center text-white gap-4 p-5 lg:flex-row lg:justify-between lg:px-8 xl:px-20">
      <div className="flex items-center">
        <Image
          src="/SEPLAN.svg"
          alt="Logo da SEPLAN"
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </div>

      <div className="flex justify-center items-center gap-5">
        <SocialIcon icon={Instagram} href="https://instagram.com" />
        <SocialIcon icon={Mail} href="mailto:gip@landingpage.com" />
        <SocialIcon icon={Youtube} href="https://youtube.com" />
        <SocialIcon icon={Phone} />
      </div>
    </footer>
  );
}
