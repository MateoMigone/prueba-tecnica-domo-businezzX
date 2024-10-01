import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import styles from "../../styles/ConsultationForm.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

const ConsultationForm = () => {
  const [consultation, setConsultation] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setConsultation({
      ...consultation,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoader = () => {
    console.log(consultation);

    setLoading(true); // Muestro el spinner
    setTimeout(function () {
      setLoading(false); // Oculto el spinner después de 2 segundos
      // Muestro un modal de confirmación
      if (consultation.name && consultation.email && consultation.message) {
        Swal.fire({
          title: "Confirm consultation?",
          html: `<hr/><div><b>Name:</b> ${consultation.name}</div><hr/><div><b>Email:</b> ${consultation.email}</div><hr/><div><b>Message:</b> ${consultation.message}</div><hr/> `,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#0097fb",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, confirm",
          customClass: {
            title: styles.modal, // Clase para el título
            htmlContainer: styles.modal, // Clase para el contenido HTML
          },
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Confirmed!",
              text: "Your consultation has been submitted successfully.",
              icon: "success",
              confirmButtonColor: "#0097fb",
              customClass: {
                title: styles.modal,
              },
            });
          }
        });
      } else {
        Swal.fire({
          title: "An error ocurred",
          text: "All fields in the form must be filled",
          icon: "error",
          confirmButtonColor: "#0097fb",
          customClass: {
            title: styles.modal,
          },
        });
      }
    }, 2000);
  };

  return (
    <div
      className={
        "d-flex align-items-center justify-content-center " + styles.formBg
      }
    >
      <div className={styles.formContainer}>
        <Form>
          <div className="d-flex flex-column align-items-start gap-3 p-1">
            <Badge pill bg="transparent" className={styles.tag}>
              Book your free consultation
            </Badge>
            <h3 className={styles.title}>Get a free consultation</h3>
          </div>
          <Container>
            <Row>
              <Col className="p-1" sm={6}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={"p-3 border-2 " + styles.inputs}
                  onChange={handleChange}
                />
              </Col>
              <Col className="p-1" sm={6}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="contact@email.com"
                  className={"p-3 border-2 " + styles.inputs}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-1">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Please type your message here..."
                  className={"p-3 border-2 " + styles.inputs}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            {!loading ? (
              <Row className="p-1">
                <Button
                  variant="outline-primary"
                  className={"px-4 " + styles.customOutlineBtn}
                  onClick={handleLoader}
                >
                  Get in Touch
                </Button>
              </Row>
            ) : (
              <Row className="p-1 pt-3 justify-content-center">
                <Spinner className={styles.spinner} />
              </Row>
            )}
          </Container>
        </Form>
      </div>
    </div>
  );
};

export default ConsultationForm;
