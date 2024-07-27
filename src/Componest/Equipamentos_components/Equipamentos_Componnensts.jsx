import { EquipamentosContainer, TituloEquipamento, DescricaoEquipamento, TextoEquipamentos, BoxEquipametos, BoxTrioEquipamentos, CardEquipamento, ImgEquipamento, NomeEquipamento, FuncaoEquipamento, DisponibilidadeEquipamento} from './Equipamentos.js'

import Imagem01 from '../../assets/Equipamentos/imagem01.png'
import Imagem02 from '../../assets/Equipamentos/imagem02.png'
import Imagem03 from '../../assets/Equipamentos/imagem03.png'
import Imagem04 from '../../assets/Equipamentos/imagem04.png'
import Imagem05 from '../../assets/Equipamentos/imagem05.png'
import Imagem06 from '../../assets/Equipamentos/imagem06.png'
import Imagem07 from '../../assets/Equipamentos/imagem07.png'
import Imagem08 from '../../assets/Equipamentos/imagem08.png'
import Imagem09 from '../../assets/Equipamentos/imagem09.png'
import Imagem10 from '../../assets/Equipamentos/imagem10.png'
import Imagem11 from '../../assets/Equipamentos/imagem11.png'
import Imagem12 from '../../assets/Equipamentos/imagem12.png'
import Imagem13 from '../../assets/Equipamentos/imagem13.png'
import Imagem14 from '../../assets/Equipamentos/imagem14.png'
import Imagem15 from '../../assets/Equipamentos/imagem15.png'



const Equipamento = () => {
    return(
            <BoxEquipametos>
            <TextoEquipamentos>
            <TituloEquipamento>EQUIPAMENTOS</TituloEquipamento>
            <DescricaoEquipamento>EQUIPAMENTOS é uma página direcionada aos equipamentos encontrados no laboratório, além de descrever sua funcionalidade e quais estão disponiveis.</DescricaoEquipamento>
            </TextoEquipamentos>
            <BoxTrioEquipamentos>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem01} alt=""/>
                    <NomeEquipamento>Agitador Magnético</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para aquecer e agitar soluções químicas, usando um peixinho magnético no recipiente.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem02} alt=""/>
                    <NomeEquipamento>Autoclave</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para a esterilização de materiais através de calor e pressão por um determinado período.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem03} alt=""/>
                    <NomeEquipamento>Balança Analítica</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para medição de massas com alta precisão, geralmente miligramas ou menos.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
            <CardEquipamento>
                    <ImgEquipamento src={Imagem04} alt=""/>
                    <NomeEquipamento>Balança de Precisão</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para medição de amostras pequenas e determina o peso do material de maneira rápida e simples.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 3</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem05} alt=""/>
                    <NomeEquipamento>Balão Volumétrico</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para preparar soluções e diluições que necessitam de medidas extremamente precisas.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 20</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem06} alt=""/>
                    <NomeEquipamento>Barra Magnética </NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para agitar soluções junto ao equipamento de agitação magnética.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem07} alt=""/>
                    <NomeEquipamento>Bastão de Vidro</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para agitar soluções e direcionar um líquido na transferência de recipientes.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 30</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem08} alt=""/>
                    <NomeEquipamento>Becker</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para medição de volumes e na realização de misturas em experimentos.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 40</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem09} alt=""/>
                    <NomeEquipamento>Funil de Vidro</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado no processo de filtração de misturas e na transferência de recipientes, evitando perdas</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 20</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
            <CardEquipamento>
                    <ImgEquipamento src={Imagem10} alt=""/>
                    <NomeEquipamento>Microscópio</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para ampliar amostras para que possam ser observadas com mais detalhes.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem11} alt=""/>
                    <NomeEquipamento>Placa de Petri</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para cultivar e observar o comportamento ou secagem de amostras.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 30</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem12} alt=""/>
                    <NomeEquipamento>Proveta</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para medição e transferência de volumes de líquidos ou soluções.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 15</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
            <CardEquipamento>
                    <ImgEquipamento src={Imagem13} alt=""/>
                    <NomeEquipamento>Pisseta</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para alocar soluções e reagentes, como a água destilada ou deionizada, entre outros.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 5</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem14} alt=""/>
                    <NomeEquipamento>Swab</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para coletar amostras para análise laboratorial.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 0</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src={Imagem15} alt=""/>
                    <NomeEquipamento>Tubo de Ensaio</NomeEquipamento>
                    <FuncaoEquipamento>Utilizados para realizar reações químicas em pequenas quantidades.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 10</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            </BoxEquipametos>
    )
}

export default Equipamento;