import React from "react";
import styles from './ProductItem.module.css';

function ProductItem() {
    const policies = [
        "Tranquilidade e Segurança Financeira para a Família: O pecúlio oferece a garantia de que, em momentos difíceis, os entes queridos não ficarão desamparados financeiramente. O valor de resgate proporciona uma segurança adicional para cobrir despesas ou garantir o futuro da família.",
        "Baixo Custo de Adesão: Diferente de seguros de vida mais complexos, o pecúlio geralmente possui uma contribuição mensal acessível, permitindo que mais pessoas possam ter uma reserva de proteção.",
        "Flexibilidade e Personalização: O cliente pode escolher o valor do pecúlio, conforme as necessidades da sua família, com planos que se ajustam ao orçamento e ao perfil de cada um.",
        "Sem Exigência de Exames Médicos: A contratação é facilitada, sem a necessidade de exames médicos, proporcionando mais agilidade e acessibilidade para todos os interessados.",
        "Beneficiários Escolhidos pelo Cliente: É possível nomear os beneficiários que receberão o valor do pecúlio, o que permite um planejamento conforme os desejos e necessidades do cliente.",
        "Isenção de Impostos para os Beneficiários: Na maioria dos casos, o valor do pecúlio é isento de tributação, o que maximiza o valor destinado aos beneficiários."
    ];

    return (
        <main className={styles.product}>
            <h2 className={styles.subTitle}>Pecúlio</h2>
            <p className={styles.description}>
                O pecúlio é um produto financeiro de proteção, que garante um amparo para o titular e seus beneficiários em situações inesperadas, como falecimento. Funciona como um seguro de vida ou um fundo de reserva, onde, ao aderir, o titular realiza contribuições periódicas e, em caso de falecimento ou invalidez, os beneficiários recebem um valor previamente estipulado.
                <br /><br />
                <strong>Principais Benefícios do Pecúlio:</strong>
            </p>
            <div className={styles.policiesContainer}>
                {policies.map((policy, index) => (
                    <div key={index} className={styles.policyItem}>
                        <span className={styles.policyText}>{index+1} - {policy}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ProductItem;