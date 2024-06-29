import styles from "../styles";
import { arrowUp } from "../assets";
export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} mt-3 flex-col w-[140px] justify-center h-[140px] bg-blue-gradient p-[2px] cursor-pointer border-secondary rounded-full`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} `}>
          <p className="font-poppins text-[18px] font-medium leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow up"
            className="w-[23px] h-[23px] object-contain 
              "
          />
        </div>
        <p className="font-poppins text-[18px] font-medium leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}
