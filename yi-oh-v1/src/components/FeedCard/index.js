import React from 'react';
import { TouchableOpacity } from 'react-native';
import {   Card, Title, Paragraph } from 'react-native-paper';

import {
    NomeEmpresa,
    NomeProduto,
    DescricaoProduto,
    EsquerdaDaMesmaLinha,
    PrecoProduto,
    Likes
} from '../../assets/styles';


export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        
        const {feed, navegador} = this.props;
        this.state = {
            feed: feed,
            navegador: navegador
            
        }
    }


    exibirDetalhes = () => {
        const { feed, navegador } = this.state;

        navegador.navigate("Details", { feedId: feed._id });
    }

    render = () => {
        const { feed  } = this.state;
        
        return (
            <TouchableOpacity onPress={ () => {
                this.exibirDetalhes();
            }}>
               <Card >
               <Card.Cover  source={require('../../assets/seu_madruga.jpg')}/>
               <Card.Content>
                 <NomeEmpresa><Title>{feed.carta_cabecalho.name}</Title></NomeEmpresa>
                 <DescricaoProduto><Paragraph>{feed.carta.description}</Paragraph></DescricaoProduto>
               </Card.Content>
                      
             </Card>
            </TouchableOpacity>
    
        );
    }

    

}