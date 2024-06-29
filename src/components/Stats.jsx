import styles from "../styles";
import { stats } from "../constants";
export default function Stats() {
  return (
    <section className={`sm:mb-20 mb-6 flex-wrap sm:${styles.flexCenter}`}>
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          id={index + 1}
          className={`flex flex-1  justify-start m-3 ${styles.flexCenter} `}
        >
          <h4 className="text-dimWhite font-poppins font-semibold xs:text-[40.8px] text-[30px] xs:leading-[53px] leading-[43px] ">
            {stat.value}
          </h4>
          <p className="text-gradient font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-5">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
