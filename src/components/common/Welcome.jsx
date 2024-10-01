import { Badge, Button } from "react-bootstrap";
import styles from "../../styles/Welcome.module.css";

const Welcome = () => {
  return (
    <div
      className={
        "d-flex flex-column justify-content-center align-items-center " +
        styles.welcome
      }
    >
      <div className="d-flex flex-column align-items-start gap-3">
        <Badge pill bg="transparent" className={styles.tag}>
          Welcome to Businezz X
        </Badge>
        <h2 className={styles.title}>
          Join us in growing your <span>business</span>.
        </h2>
      </div>
      <div>
        <hr className="text-light opacity-25" />
        <p className={styles.text}>
          Elevate your business with Businezz X, a professional Webflow
          template.
        </p>
        <div className={styles.buttonContainer}>
          <Button className={"rounded-pill px-4 d-flex " + styles.customBtn}>
            Contact us{" "}
            <i className={"bi bi-arrow-right " + styles.arrowIcon}></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
