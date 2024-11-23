import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import dc from "../../../assets/discord-footer.png";
import footerLogo from "../../../assets/footer-logo.png";
import instagram from "../../../assets/social_instagram-footer.png";
import linkedin from "../../../assets/social_linkedin-footer.png";
import youtube from "../../../assets/social_youtube-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#17181c] relative">
      <div className="max-w-[980px] mx-auto">
        <section className="w-full pt-10 flex items-center justify-center xl:justify-start">
          <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
            <Link href={"/"}>
              <Image
                src={footerLogo}
                alt="footerLogo"
                className="w-[142px] h-[25px]"
              />
            </Link>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center">
              <Link href={"#"} className="text-sm text-white">
                Mentions légales
              </Link>
              <span className="text-white hidden md:block mx-2 lg:mx-5">|</span>
              <Link href={"#"} className="text-sm text-white">
                Politique de confidentialité
              </Link>
              <span className="text-white hidden md:block mx-2 lg:mx-5">|</span>
              <Link href={"#"} className="text-sm text-white">
                Archives
              </Link>
              <span className="text-white hidden md:block mx-2 lg:mx-5">|</span>
              <Link href={"#"} className="text-sm text-white">
                Agence
              </Link>
              <span className="text-white hidden md:block mx-2 lg:mx-5">|</span>
              <Link href={"#"} className="text-sm text-white">
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
        <section
          id="social"
          className="w-full flex items-center justify-center"
        >
          <div className="py-10 flex items-center">
            <div className="mx-2 sm:mx-4">
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={dc} alt="Discord" />
              </Link>
            </div>

            <div className="mx-2 sm:mx-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={28} className="text-white" />
              </Link>
            </div>

            <div className="mx-2 sm:mx-4">
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={28} className="text-white" />
              </Link>
            </div>

            <div className="mx-2 sm:mx-4">
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtube} alt="YouTube" />
              </Link>
            </div>

            <div className="mx-2 sm:mx-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="LinkedIn" />
              </Link>
            </div>

            <div className="mx-2 sm:mx-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagram} alt="Instagram" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="absolute bottom-1 left-2">
        <button className="bg-white px-2.5 py-1 rounded-full text-black text-sm flex items-center justify-center">
          Cookies
        </button>
      </div>
    </footer>
  );
};

export default Footer;
