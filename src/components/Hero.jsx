import { arrowUp, discount, robot } from "../assets";
import styles from "../styles";
import GetStarted from "./GetStarted";

export default function Hero() {
  return (
    <section
      id="Home"
      className={`flex  md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`sm:px-16  xl:px-0 flex-1  items-start px-4 py-6 flex-col rounded-[10px]  ${styles.flexStart}`}
      >
        <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={` ${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            DISCOUNT FOR
            <span className="text-white"> 1 MONTH </span>
            ACCOUNT
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <h1
            className={`flex-1 text-left text-white font-poppins ss:text-[68px] text-[52px] font-semibold ss:leading-[100px] leading-[75px]`}
          >
            The Next
            <br />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="sm:flex hidden md:mr-4 ">
            <GetStarted />
          </div>
        </div>
        <h1
          className={` text-left text-white font-poppins ss:text-[68px] text-[52px] font-semibold ss:leading-[100px] leading-[75px] w-full`}
        >
          Payment Method
        </h1>
        <p className={`mt-5  ${styles.paragraph} max-w-[470px] mt-5 text-left`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} relative md:my-0 my-10`}
      >
        <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="pink__gradient w-[40%] absolute z-[0] h-[35%] top-0 rounded-full"></div>
        <div className="white__gradient w-[80%] absolute z-[1] h-[80%] bottom-40 rounded-full "></div>
        <div className="blue__gradient w-[50%] absolute z-[0] h-[50%] bottom-20 right-20 rounded-full"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}
