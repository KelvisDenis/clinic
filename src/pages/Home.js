import React from "react";
import CardServicos from "../components/CardServicos";
import "../styles/pages/Home.css"
import CardRelatos from "../components/CardRelatos";
import Button from "../components/Button";
import Agenda from "./Agenda";
import { useState } from "react";

export default function Home(){
    const [isAgenda, setIsAgenda] = useState(false);

    // card service 
    const description1 = 'Give a detailed description of the service being provided here.';
    const title1 = 'Limpeza e Estração';
    const title2 = 'Ortodontia';
    const title3 = 'Implantes';
    // card relatos
    const name1 = 'Andre';
    const name2 = 'Clara';
    const name3 = 'Ana';





    const handleClickAgenda = () => {
        setIsAgenda(!isAgenda);
    }
     

    return(
        <div className="home-container">
            
           
            <div className="home-header">
                <h2>Sorrisos limpos e claro</h2>
                <div className="home-image">
                <img src="/sorriso-02.jpg" alt="imagem de sorriso" />
                </div>
            </div>

            <div className="home-content">
                <h4>Sobre nós</h4>
                <hr />

                <div className="home-section">
                    <div className="home-text">
                        <p>
                        Acreditamos que um sorriso saudável transforma vidas. Com anos de
                        experiência e dedicação à saúde bucal, nossa equipe de especialistas
                        está comprometida em oferecer o melhor atendimento odontológico para
                        toda a família. Nossa missão é proporcionar tratamentos de alta
                        qualidade, utilizando tecnologia de ponta e técnicas modernas para
                        garantir que cada paciente tenha uma experiência confortável e
                        personalizada. Cuidamos de cada detalhe para que você se sinta seguro
                        e bem acolhido desde o primeiro contato.
                        </p>
                    </div>

                    <div className="home-second-image">
                        <img src="/equipe.jpg" alt="imagem de sorriso" />
                    </div>
                </div>
            </div>
            <div className="services-section">
        <h3>Nossos Serviços</h3>
        <hr />
        <div className="services-cards">
          <CardServicos img={'/sorriso03.jpg'} description={description1} title={title1} />
          <CardServicos img={'/sorriso04.jpg'} description={description1} title={title2} />
          <CardServicos img={'/sorriso05.jpg'} description={description1} title={title3} />
        </div>
      </div>
      <div className="relatos-section">
        <h3>Relatos de Clientes</h3>
        <hr />
        <div className="relatos-cards">
          <CardRelatos img={'/pessoa01.jpg'} description={description1} name={name1} className="card-right" />
          <CardRelatos img={'/pessoa02.jpg'} description={description1} name={name2} className="card-left" />
          <CardRelatos img={'/pessoa03.jpg'} description={description1} name={name3} className="card-right" />
        </div>
      </div>

      <div className="agenda-section">
            <div className="social-icons">
                <img src="/instagram.png" alt="Instagram" />
                <img src="/whatts.png" alt="WhatsApp" />
                <img src="/facebook.png" alt="Facebook" />
            </div>
            
            <div className="contact-info">
                <h3 className="contact-title">Entre em contato</h3>
            </div>
            <p className="agenda-text">Agende uma consulta na nossa clínica</p>
            {isAgenda  ? (
                 <div className="agenda-selection">
                    <Agenda isOpen={handleClickAgenda}/>
                </div>
            ):(
                <Button label={'agende'} onClick={handleClickAgenda} />
            )}
            <div className="contact-details">
                <div className="contact-item">
                    <h5>Contato</h5>
                    <p>(55) 34566</p>
                </div>
                <div className="contact-item">
                    <h5>Email</h5>
                    <p>teste@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    )
}