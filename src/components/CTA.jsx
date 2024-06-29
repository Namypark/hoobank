import styles from "../styles";
import Button from "./Button";

export default function CTA() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mt-10 sm:flex-row flex-col box-shadow flex bg-black-gradient-2 rounded-[20px] `}
    >
      <div className={`flex flex-1 flex-col p-6`}>
        <h2 className={`${styles.heading2} `}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[445px] sm:mb-0 mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button />
      </div>
    </section>
  );
}
