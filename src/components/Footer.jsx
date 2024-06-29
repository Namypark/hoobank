import { logo } from "../assets";
import { layout } from "../styles";
import styles from "../styles";
import { footerLinks, socialMedia } from "../constants";
export default function Footer() {
  return (
    <section
      className={`${styles.flexCenter} flex-col ${styles.paddingY} flex-col`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col ,b-8 w-full `}>
        <div className="flex flex-1 flex-col justify-center items-start md:mb-0 mb-6">
          <img
            src={logo}
            alt="logo"
            className="max-w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[312px] mt-10 ml-3`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-[1.5]  w-full justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(({ title, links }) => (
            <div
              className="flex flex-col justify-start sm:items-start items-center flex-wrap ss:my-0 my-6 min-w-[150px]"
              key={title}
            >
              <h4
                className={`font-poppins font-medium text-[18px] text-white leading-[27px] mb-4`}
              >
                {title}
              </h4>

              {links.map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  className={`font-poppins font-normal text-[16px] text-dimWhite mb-2 cursor-pointer hover:text-secondary leading[24px]
                  `}
                >
                  {name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${styles.marginY} flex flex-wrap w-full h-[1px] bg-dimWhite`}
      />
      <div
        className={`text-white w-full flex justify-between items-center sm:flex-row flex-col`}
      >
        <div className="flex w-[450px] justify-between items-center sm:flex-row flex-col">
          <p
            className={`font-abel font-normal text-dimWhite text-[18px] leading-[30.8px]`}
          >
            Copyright
          </p>
          <p className={`text-white text-[18px] leading-[30.8px] font-normal`}>
            ©
          </p>
          <p className={`${styles.paragraph}`}>
            2024 HookBank. All Rights Reserved.
          </p>
        </div>
        <div className="flex w-[178px] justify-between items-center sm:mt-0 mt-4">
          {socialMedia.map((images) => (
            <a key={images.id} href={images.link}>
              <img
                src={images.icon}
                className="w-[21px] h-[21px] object-contain"
                alt="social-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
