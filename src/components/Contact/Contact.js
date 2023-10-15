import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addContact } from "../../Api/contactmsg";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please enter incomplete information.");
      return;
    }

    try {
      addContact(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError("ใส้");
    }
  };

  useEffect(() => {
    if (error !== "") {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <div className={`error-box ${error !== "" ? "show" : ""}`}>
      <div className="error-message">{error}</div>
      <div className="contact-start ">
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group>
            <Form.Label className="form-label">
              Name : Ex "Ittipol Charoenphol"
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="form-label">
              Email : Ex "icharoenphol2001@gmail.com"
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="form-label">
              Message : Ex "I want to work with you."
            </Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input"
            />
          </Form.Group>
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
