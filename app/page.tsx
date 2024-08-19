import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, WhatsAppIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
      <div className=" w-full max-w-lg text-center px-4 sm:px-6 lg:px-8">
        <h1
          className={`${title()} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          Kevin&nbsp;
        </h1>
        <h1
          className={`${title({ color: "blue" })} text-3xl sm:text-2xl md:text-5xl lg:text-6xl`}
        >
          Elyan&nbsp;
        </h1>
        <br />
        <h1
          className={`${title({ color: "cyan" })} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
        >
          Website&nbsp;
        </h1>
        <h1
          className={`${title()} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
        >
          Developer&nbsp;
        </h1>
        <h2
          className={`${subtitle({ class: "mt-4" })} text-base sm:text-lg md:text-xl lg:text-2xl`}
        >
          I Build Beautiful, Fast, and Modern Websites.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full px-4 sm:px-6 lg:px-8">
        <Link
          isExternal
          className={buttonStyles({
            radius: "full",
            variant: "ghost",
            className: "w-full sm:w-auto text-center",
          })}
          href={siteConfig.links.projects}
        >
          My Projects
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "ghost",
            radius: "full",
            className: "w-full sm:w-auto text-center",
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          Kevin Elyan
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "ghost",
            radius: "full",
            className: "w-full sm:w-auto text-center",
          })}
          href="https://wa.link/nmbcj5"
        >
          <WhatsAppIcon size={20} />
          WhatsApp
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full px-4 sm:px-6 lg:px-8">
        <Link
          isExternal
          className={buttonStyles({
            radius: "full",
            variant: "shadow",
            className: "w-full sm:w-auto text-center",
          })}
          href="https://docs.google.com/document/d/1jIJb4dZb9q2z58GkaGiU3nDey4QF3slih-ckTp_YSzs/edit?usp=sharing"
        >
          CV
        </Link>
      </div>
    </section>
  );
}
