import styles from "./styles";
import {
  NavBar,
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonial,
  Clients,
} from "./components/";
export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`text-center ${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
