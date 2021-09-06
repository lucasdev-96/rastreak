/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [message, setMessage] = useState('');

  const handleMessage = ({ target: { value } }) => {
    setMessage(value);
  };
  return (
    <>
      <section className="contact">
        <div id="contato">
          <form>
            <div className="children_form">
              <h1 className="whats">Whatsapp</h1>
            </div>
            <section className="father_inputs">
              <section className="inputs">
                <input className="input" placeholder="Digite seu nome" type="text" name="name" />
                <input className="input" placeholder="Digite seu email" type="email" name="email" />
              </section>
              <textarea onChange={handleMessage} placeholder="Mensagem" />
              <button className="whatssap_button" type="button">
                <a href={`https://api.whatsapp.com/send?phone=5519981170142&text=${message}`} target="_blank" rel="noreferrer">
                  Envie sua mensagem
                </a>
              </button>
            </section>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
