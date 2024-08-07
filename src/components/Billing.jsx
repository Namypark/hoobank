import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

export default function Billing() {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[100%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 top-0 w-[40%] h-[100%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`flex  items-center flex-wrap sm:mt-10 mt-6`}>
          <img
            src={apple}
            alt="apple-store"
            className="w-[128px] h-[42px] mr-5  cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="google-play-store"
            className="w-[128px] h-[42px] mr-5 object-contain  cursor-pointers"
          />
        </div>
      </div>
    </section>
  );
}
