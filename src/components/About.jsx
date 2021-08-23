import React from 'react';
import '../styles/About.css';
// import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

function About() {
  return (
    <>
      <main className="main">
        <section id="about">
          <span className="span">Grupo</span>
          <span className="span" style={{ color: '#ffbb2c' }}>Rastrek</span>
          <p>
            A Rastrek é uma empresa que atua na área de segurança veicular desde 2012.
            Evoluindo junto com as tecnologias disponibilizadas no seu segmento,
            expandiu seus conhecimentos com a participação direta de seus profissionais
            em projetos de sistemas de rastreamento e bloqueio veicular.
          </p>
          <Reveal effect="teste" effectOut="test2">
            <h1>OLá MUNDO</h1>
          </Reveal>
        </section>
      </main>
    </>
  );
}

export default About;
