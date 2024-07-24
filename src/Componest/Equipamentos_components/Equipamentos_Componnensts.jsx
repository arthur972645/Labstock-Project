import React from 'react';
import { 
    EquipamentosContainer, 
    TituloEquipamento, 
    DescricaoEquipamento, 
    BoxTrioEquipamentos, 
    CardEquipamento, 
    ImgEquipamento, 
    NomeEquipamento, 
    FuncaoEquipamento, 
    DisponibilidadeEquipamento 
} from './Equipamentos.js';

// Dados dos equipamentos
const datas = [
    { id: 1, src: '../../src/assets/Equipamentos/imagem01.png', nome: 'Agitador Magnético', funcaoEquip: 'Utilizado para aquecer e agitar soluções químicas, usando um peixinho magnético no recipiente', disponivelEquipe: 'DISPONÍVEL: 2', alt: 'Imagem 1' },
    { id: 2, src: '../../src/assets/Equipamentos/imagem04.png', nome: 'Balança de Precisão', funcaoEquip: 'Utilizada para medição de amostras pequenas e determina o peso do material de maneira rápida e simples.', disponivelEquipe: 'DISPONÍVEL: 3', alt: 'Imagem 2' },
    { id: 3, src: '../../src/assets/Equipamentos/imagem05.png', nome: 'Balão Volumétrico', funcaoEquip: 'Utilizado para preparar soluções e diluições que necessitam de medidas extremamente precisas.', disponivelEquipe: 'DISPONÍVEL: 20', alt: 'Imagem 3' },
    { id: 4, src: '../../src/assets/Equipamentos/imagem06.png', nome: 'Barra Magnética', funcaoEquip: 'Utilizada para agitar soluções junto ao equipamento de agitação magnética.', disponivelEquipe: 'DISPONÍVEL: 2', alt: 'Imagem 4' },
    { id: 5, src: '../../src/assets/Equipamentos/imagem07.png', nome: 'Bastão de Vidro', funcaoEquip: 'Utilizado para agitar soluções e direcionar um líquido na transferência de recipientes.', disponivelEquipe: 'DISPONÍVEL: 30', alt: 'Imagem 5' },
    { id: 6, src: '../../src/assets/Equipamentos/imagem08.png', nome: 'Becker', funcaoEquip: 'Utilizado para medição de volumes e na realização de misturas em experimentos.', disponivelEquipe: 'DISPONÍVEL: 40', alt: 'Imagem 6' },
    { id: 7, src: '../../src/assets/Equipamentos/imagem09.png', nome: 'Funil de Vidro', funcaoEquip: 'Utilizado no processo de filtração de misturas e na transferência de recipientes, evitando perdas.', disponivelEquipe: 'DISPONÍVEL: 20', alt: 'Imagem 7' },
    { id: 8, src: '../../src/assets/Equipamentos/imagem10.png', nome: 'Microscópio', funcaoEquip: 'Utilizado para ampliar amostras para que possam ser observadas com mais detalhes.', disponivelEquipe: 'DISPONÍVEL: 2', alt: 'Imagem 8' },
    { id: 9, src: '../../src/assets/Equipamentos/imagem11.png', nome: 'Placa de Petri', funcaoEquip: 'Utilizada para cultivar e observar o comportamento ou secagem de amostras.', disponivelEquipe: 'DISPONÍVEL: 30', alt: 'Imagem 9' },
    { id: 10, src: '../../src/assets/Equipamentos/imagem12.png', nome: 'Proveta', funcaoEquip: 'Utilizada para medição e transferência de volumes de líquidos ou soluções.', disponivelEquipe: 'DISPONÍVEL: 15', alt: 'Imagem 10' },
    { id: 11, src: '../../src/assets/Equipamentos/imagem13.png', nome: 'Pisseta', funcaoEquip: 'Utilizado para alocar soluções e reagentes, como a água destilada ou deionizada, entre outros.', disponivelEquipe: 'DISPONÍVEL: 5', alt: 'Imagem 11' },
    { id: 12, src: '../../src/assets/Equipamentos/imagem14.png', nome: 'Swab', funcaoEquip: 'Utilizado para coletar amostras para análise laboratorial.', disponivelEquipe: 'DISPONÍVEL: 0', alt: 'Imagem 12' },
    { id: 13, src: '../../src/assets/Equipamentos/imagem15.png', nome: 'Tubo de Ensaio', funcaoEquip: 'Utilizados para realizar reações químicas em pequenas quantidades.', disponivelEquipe: 'DISPONÍVEL: 10', alt: 'Imagem 13' },
];

const Equipamento = () => {
    return (
        <EquipamentosContainer>
            <TituloEquipamento>EQUIPAMENTOS</TituloEquipamento>
            <DescricaoEquipamento>EQUIPAMENTOS é uma página direcionada aos equipamentos encontrados no laboratório, além de descrever sua funcionalidade e quais estão disponíveis.</DescricaoEquipamento>
            <BoxTrioEquipamentos>
                {datas.map((data) => (
                    <CardEquipamento key={data.id}>
                        <ImgEquipamento src={data.src} alt={data.alt} />
                        <NomeEquipamento>{data.nome}</NomeEquipamento>
                        <FuncaoEquipamento>{data.funcaoEquip}</FuncaoEquipamento>
                        <DisponibilidadeEquipamento>{data.disponivelEquipe}</DisponibilidadeEquipamento>
                    </CardEquipamento>
                ))}
            </BoxTrioEquipamentos>
        </EquipamentosContainer>
    );
};

export default Equipamento;
