import styles, { layout } from "../styles";
import { card } from "../assets";
import Button from "./Button";
export default function CardDeal() {
  return (
    <section className={`${layout.section} `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in a few steps
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] my-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={card}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
}
