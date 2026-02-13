import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-7 pb-12 text-base text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex items-center justify-center ml-8">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} className="group flex items-center justify-center p-2 rounded-md hover:bg-black-300 transition-all duration-300">
            <img src={social.icon} className={`${social.name === "Github" ? "w-10 h-10" : "w-8 h-8"} invert brightness-0 opacity-100 group-hover:opacity-70 transition-all duration-300`} alt={social.name} />
          </a>
        ))}
      </div>

      <p className="text-lg">© 2025 Kanishkhan. All rights reserved.</p>
    </section>
  );
};

export default Footer;
