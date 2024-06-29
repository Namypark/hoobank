import { Button } from "../components";
import { features } from "../constants";
import styles from "../styles";
import { layout } from "../styles";

const Card = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }  feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className={`flex flex-1 flex-col ml-3`}>
      <h4 className=" mb-1 font-poppins text-white leading-[23px] font-semiBold text-[18px]">
        {name}
      </h4>
      <p className="mb-1 font-poppins text-dimWhite text-[16px] leading-[18px]  font-normal">
        {content}
      </p>
    </div>
  </div>
);

export default function Business() {
  return (
    <section className={`${layout.section}`} id="Features">
      <div className={` ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="sm:block hidden" /> we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit,earning rewards and saving money. But with hundreds of
          credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={` flex-col  ${layout.sectionImgReverse}`}>
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
