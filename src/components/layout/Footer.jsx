import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerBg}>
      <div
        className={
          "d-flex flex-column flex-lg-row justify-content-center" +
          styles.footerContainer
        }
      >
        <div className={"d-flex flex-column " + styles.contact}>
          <h6>Contacto</h6>
          <div className="d-flex flex-column">
            <a href="mailto:mateomigone01@gmail.com" className="d-flex gap-3">
              <i class="bi bi-envelope-fill"></i> mateomigone01@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mateo-migone/"
              target="_blank"
              className="d-flex gap-3"
            >
              <i class="bi bi-linkedin"></i> mateo-migone
            </a>
            <a className="d-flex gap-3">
              <i class="bi bi-telephone-fill"></i> +54 2281-1046
            </a>
          </div>
        </div>
        <hr />
        <div className={"vr mx-3 d-none d-lg-block " + styles.vr}></div>
        <div className={styles.about}>
          <h6>Sobre la entrega</h6>
          <p>
            Para esta entrega elegí desarrollar el home de la página de Businezz
            X, ya que me parecía un desafío interesante trabajar con el
            reordenamiento de componentes para los diferentes tamaños de
            pantalla. En el desarrollo utilicé React JS para componentizar el
            código y Bootstrap como complemento del CSS para estilar, además de
            SweetAlert2 para agregar un modal de confirmación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
