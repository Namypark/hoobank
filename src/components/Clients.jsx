import styles from "../styles";
import { layout } from "../styles";
import { clients } from "../constants";

export default function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div
        className={`${styles.flexCenter} sm:flex-row flex-col w-full flex-wrap `}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] flex-wrap w-full`}
          >
            <img
              src={client.logo}
              alt={client.id}
              className="sm:w-[192px] w-[100px] object-contain md:mb-0 mb-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
