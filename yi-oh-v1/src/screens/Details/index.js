import React from 'react';

import { Text,  Card, Title, Paragraph } from 'react-native-paper';
import bancoEstatico from '../../assets/feeds_yi_oh.json'

import {
   NomeEmpresa,
   NomeProduto,
   DescricaoProduto,
   EsquerdaDaMesmaLinha,
   PrecoProduto,
   Likes
} from '../../assets/styles';

export default class Details extends React.Component{


   constructor(props) {
      super(props);
      
      this.state = {
         feedId  : this.props.navigation.state.params.feedId,
         feed: null ,
         image : null,
         feed_image: null
      }
  }


carregarFeed = () => {
   
   const{ feedId } = this.state;

   console.log("id é " +feedId)
   const feeds = bancoEstatico.feeds;
   const feedFiltrados = feeds.filter((feed) => feed._id === feedId);
   
   if(feedFiltrados.length){
      this.setState({
         
         feed: feedFiltrados[0]
      });
      
   }

}

  componentDidMount = () => {
      this.carregarFeed();
  }

  render = () => {
      const{feed} = this.state;
     
      if (feed){         
         console.log(feed.carta.imagem_carta)
      return (
         <>
             <Card >
             
               <Card.Cover source={require('../../assets/descarga.jpg')}/>
               <Card.Content>
                  <NomeEmpresa><Title>{feed.carta_cabecalho.name}</Title></NomeEmpresa>
                 <DescricaoProduto><Paragraph>{feed.carta.description}</Paragraph></DescricaoProduto>
                 <DescricaoProduto><Paragraph>Tipo : {feed.carta.tipo}</Paragraph></DescricaoProduto>
                 <DescricaoProduto><Paragraph>atk : {feed.carta.atk}</Paragraph></DescricaoProduto>
                 <DescricaoProduto><Paragraph>Def : {feed.carta.def}</Paragraph></DescricaoProduto>
               </Card.Content>
                      
             </Card>
         </>)
         } else{
            return(<Text>Não encontrou o feed</Text>);
         }

      ;
  }

  
}

