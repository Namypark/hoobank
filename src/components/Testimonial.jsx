import { feedback } from "../constants";
import { quotes } from "../assets";
import styles from "../styles";
import { layout } from "../styles";

function FeedbackCard({ id, content, img, name, title, key }) {
  return (
    <div className="justify-between md:mr-10 sm:mr-5 mr-0 my-5 flex px-10 py-12 max-w-[370px] feedback-card rounded-[20px]">
      <div id={`${id}`} className={`flex flex-col py-10`}>
        <img
          src={quotes}
          alt="double-quotes"
          className="w-[42.6px] h-[26.8px] object-contain"
        />
        <p className={`${styles.paragraph} my-10 `}>{content}</p>
        <div className={`flex justify-start items-center mt-2`}>
          <img
            src={img}
            alt="customer-img"
            className="w-[48px] h-[48px] object-contain rounded-full"
          />
          <div className="flex flex-col justify-center items-start ml-5">
            <h4 className="font-poppins font-semibold text-[20px] text-white leading-[32px]">
              {name}
            </h4>
            <p className="text-dimWhite font-poppins text-[16px] font-normal leading-[24px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section
      id="clients"
      className={` ${styles.flexCenter} flex-col ${styles.paddingY} relative`}
    >
      <div className="absolute z-[0]  w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div
        className={`sm:mb-16 mb-6 flex md:flex-row flex-col items-center justify-between w-full relative z-[1]`}
      >
        <h2 className={`${styles.heading2} max-w-[470px] sm:mb-0 mb-5`}>
          What people are <br className="sm:block hidden" />
          saying about us{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div
        className={`flex w-full items-center justify-between relative z-[2] flex-wrap`}
      >
        {feedback.map(({ id, content, img, name, title }, index) => (
          <div key={id}>
            <FeedbackCard
              key={index + 1}
              id={id}
              content={content}
              img={img}
              title={title}
              name={name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
