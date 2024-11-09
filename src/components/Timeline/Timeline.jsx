import React, { useState } from 'react';
import accordion from './Timeline.module.css';

const TimelineItem = ({ number, year, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={accordion.item}>
      <div className={accordion.header} onClick={toggleAccordion}>
        <div className={accordion.title}>
          <span className={accordion.number}>{number}</span>
          <span className={accordion.year}>{year}</span>
        </div>
        <button className={accordion.toggle}>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className={accordion.content} dangerouslySetInnerHTML={{ __html: content }}>
                  </div>}
    </div>
  );
};

const Timeline = () => {
  return (
    <div className={accordion}>
      <TimelineItem number="1" year="1884" content="A Sociedade Operária de Mutuo Socorro Príncipe de Nápoles (“Societá Operária di Mutuo Soccorso Príncipe di Nápoli in Caxias” – como consta em seu primeiro livro de Atas), teve sua origem no ano de 1887. <br /><br /> A primeira reunião foi na casa de Daniel Benetti, que se tornou seu primeiro presidente. No encontro foi fixada a mensalidade inicial de 500 réis. O auxilio doença variava de acordo com a gravidade e duração da doença. Por morte do sócio, a viúva tinha direito a um auxilio em dinheiro, correspondente ao atual “pecúlio”. Quando nascia um filho de sócio, a esposa recebia uma galinha para fazer o “caldo da quarentena”..." />
      <TimelineItem number="2" year="1894" content="A partir de 1894, com cerca de 400 contribuintes, a sociedade instituiu duas categorias de associados. Os integrantes da primeira categoria contribuíam com 1 mil réis e os da segunda com 500 réis. E assim foi se desenvolvendo a sociedade, que mesmo com o passar dos anos continuou sempre cultivando seu espírito de confraternização manifestado na continuidade dos jogos de bocha ou nos almoços e jantares realizados na sede da entidade." />
      <TimelineItem number="3" year="1898" content="A primeira sede da sociedade teve inaugurado seu edifício em 12 de novembro de 1898, como consta o registro daquela solenidade." />
      <TimelineItem number="4" year="1933" content="As atividades foram se ampliando e, em 1933, foi instituída a caixa de pecúlio, no valor de 4 mil 745 contos de réis. <br /><br />Com a eclosão da II guerra mundial, a diretoria da sociedade enfrentou alguns problemas devido a origem italiana da entidade e então decidiu mudar o nome para Sociedade Caxiense de Mútuo Socorro, nome atual da Entidade." />
      <TimelineItem number="5" year="1962" content="Em sua história a comunidade caxiense viu crescer a SCMS, que em 1962 já contava com aproximadamente 6.000 sócios." />
      <TimelineItem number="6" year="1966" content="Em 1966, com a incorporação do pecúlio La Salle de Porto Alegre, ampliou este número para 10.000." />
      <TimelineItem number="7" year="1977" content="E assim foi consolidando sua participação no cenário de previdência complementar brasileiro, superando as adaptações provocadas pelo advento da Lei 6.435 de 1977." />
      <TimelineItem number="8" year="2022" content="Em 11 de novembro de 2022 completou 135 anos de existência, marco que certamente ficará marcado no seio da sociedade caxiense, oferecendo ao mercado planos de pecúlio por morte." />
    </div>
  );
};

export default Timeline;
