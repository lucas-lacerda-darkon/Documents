import styled from "styled-components/native";

export const NomeEmpresa = styled.Text`
    padding: 8px;
    font-size: 16;
    color: #59594a;
`;

export const NomeProduto = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #59594a;
`;

export const DescricaoProduto = styled.Text`
    font-size: 14px;
    color: #59594a;
`;

export const PrecoProduto = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #59594a;
`;

export const Likes = styled.Text`
    font-size: 14px;
    color: #59594a;
`;

export const EsquerdaDaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const CentralizardoNaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: center;
    align-items: flex-start;
`;


export const EntradaNomeProduto = styled.TextInput`
    height: 40px;
    width: 100%;
    background-color: #fff;
    border-colocar: #c7c7c7;
    border-width: 2px;
    border-radius: 8px;

`;
