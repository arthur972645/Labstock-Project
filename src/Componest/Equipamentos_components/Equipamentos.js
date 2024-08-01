import styled from 'styled-components'


const Cores = {
    Branco: '#ffff',
    Verde: '#2D8034',
    Marrom: '#3A3132',
    Sombra: '#0000002d'
}

export const EquipamentosContainer = styled.section`
    
`
export const TituloEquipamento = styled.h1`
    color: ${Cores.Verde};
    font-size: 50px;
    align-items: center;
`
export const DescricaoEquipamento = styled.p`
    font-style: normal;
    width: 1200px;
`
export const TextoEquipamentos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 19%;
    margin-top: 3%;
`
export const BoxEquipametos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const BoxTrioEquipamentos = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: center;
`
export const CardEquipamento = styled.section`
    background-color: ${Cores.Branco};
    width: 360px;
    height: 450px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px 1px ${Cores.Sombra};
    border-radius: 30px;
`
export const NomeEquipamento = styled.h1`
    margin: 5px;
    text-align: center;
    font-size: 24px;
    color: ${Cores.Marrom};
`
export const FuncaoEquipamento = styled.p`
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    color: ${Cores.Marrom};
    height: 70px;
`
export const DisponibilidadeEquipamento = styled.section`
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    margin-left: 30px;
    margin-right: 30px;
    background-color: ${Cores.Verde};
    color: ${Cores.Branco};
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 10px;
    width: 190px;
`
export const ImgEquipamento = styled.img`
    width: 210px;
    border-radius: 30px
`
