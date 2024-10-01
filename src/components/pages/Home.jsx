import styles from "../../styles/Home.module.css";
import Welcome from "../common/Welcome";
import ConsultationForm from "../common/ConsultationForm";

const Home = () => {
  return (
    <div className="d-flex flex-column flex-lg-row ">
      <div className={styles.welcome}>
        <Welcome />
      </div>
      <div className={styles.form}>
        <ConsultationForm />
      </div>
    </div>
  );
};

export default Home;
