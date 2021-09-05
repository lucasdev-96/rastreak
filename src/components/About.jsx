import React from 'react';
import '../styles/About.css';
import Zoom from 'react-reveal/Zoom';
import { MdBusinessCenter } from 'react-icons/md';
import { BsEyeFill } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';
// import CountUp from 'react-countup';
import banner from '../img/9.jpeg';

function About() {
  return (
    <>
      <main className="main">
        <div>
          <span className="span">Grupo</span>
          <span className="span" style={{ color: '#ffbb2c' }}>Rastrek</span>
        </div>
        <div className="family" id="about">
          <h3>Tranquilidade para você, sua família ou seu negócio</h3>
          <p>
            A Rastrek é uma empresa que atua na área de segurança veicular desde 2012.
            Evoluindo junto com as tecnologias disponibilizadas no seu segmento,
            expandiu seus conhecimentos com a participação direta de seus profissionais
            em projetos de sistemas de rastreamento e bloqueio veicular.
          </p>
          <p>
            Com o pensamento totalmente direcionado a satisfação de seus
            clientes no quesito logística,
            manutenção de frota e segurança, disponibilizando informações em tempo real
            sobre os veículos de nossos clientes, permitindo um controle de frota e
            logística ágil,
            na tomada de decisões, reduzindo significativamente os custos no transporte e
            fiscalizando o uso da frota no cumprimento de suas atribuições.
          </p>
        </div>
        <section id="about_father">
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
          <div className="infos">
            <Zoom duration={2000}>
              <h1>Missão</h1>
              <MdBusinessCenter className="icons" />
              <p>
                Com o pensamento totalmente direcionado a satisfação de seus
                clientes no quesito logística,
                manutenção de frota e segurança, disponibilizando informações em tempo
                real sobre os veículos de nossos clientes,
                permitindo um controle de frota e logística ágil, na tomada de decisões
                , reduzindo significativamente os custos no transporte e fiscalizando
                o uso da frota no cumprimento de suas atribuições.
              </p>
            </Zoom>
            <Zoom duration={2000} delay={1000}>
              <h1>Visão</h1>
              <BsEyeFill className="icons" />
              <p>
                Manter-se uma organização perene e sustentável a longo prazo,
                com foco na performance dos serviços executados no desenvolvimento dos
                funcionários e suas habilidades, aumentando a sinergia entre as áreas
                organizacionais,
                possibilitando assim o aumento da eficácia organizacional,
                agregando valor para seus proprietários,
                clientes, fornecedores e para a sociedade em que atua.
              </p>
            </Zoom>
            <Zoom duration={2000} delay={2000}>
              <h1>Valores</h1>
              <GiTrophy className="icons" />
              <li>- Valorização do homem.</li>
              <li> - Comprometimento com o cliente.</li>
              <li>- Qualidade nos serviços.</li>
              <li>- Aperfeiçoamento da tecnologia.</li>
              <li>- Segurança efetiva;</li>
              <li>- Fortalecimento do diálogo com o cliente</li>
            </Zoom>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
