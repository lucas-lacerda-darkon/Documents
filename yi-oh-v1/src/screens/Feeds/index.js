import * as React from "react";

import { FlatList,View,  TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import  Icon  from "react-native-vector-icons/AntDesign";
//import {Card,CardContent, CardImage} from 'react-native-cards'
import bancoEstatico from '../../assets/feeds_yi_oh.json'
import FeedCard from "../../components/FeedCard";

import {   Card, Title, Paragraph } from 'react-native-paper';

import{
    EntradaNomeProduto,
    CentralizardoNaMesmaLinha
} from "../../assets/styles"

export default class feeds extends React.Component{


    constructor(props) {
        super(props);

        console.log("total de feeds no banco estático: " + bancoEstatico.feeds.length);

        this.state = {
            proximaPagina: 1,
            feeds: [],
            atualizando: false,
            pesquisa: null
        }

    }


    carregarFeeds = () => {
        const feedsEstaticos = bancoEstatico.feeds;
        const { proximaPagina, pesquisa} = this.state;

        if(pesquisa){
            const feeds = feedsEstaticos.filter((feed)=> 
                feed.carta.name.toLowerCase().includes(pesquisa.toLowerCase()))

            this.setState({
                feeds: feeds,          
                atualizando: false
            })
        } else{

            const feeds = feedsEstaticos.filter((feed) => feed._id <= (proximaPagina * 6))
            this.setState(
                {
                    feeds: feeds, 
                    proximaPagina: proximaPagina + 1,
                    atualizando: false
                }
            )
        }

    }

    
    atualizar = () => {
        this.setState({
            feeds: [],
            proximaPagina: 1,
            atualizando: true
        },
            () => {
                this.carregarFeeds();
            });
    }


    componentDidMount = () =>{

        this.carregarFeeds();

    }

    
    mostrarFeed = (feed) => {
        return (
           <FeedCard feed={feed} navegador={this.props.navigation} />       
         
        );
    }

    atualizarTextoPesquisa=(texto_pesquisa)=>{
        
        this.setState({
            pesquisa:texto_pesquisa 
        })

    }

    mostrarBarraPesquisa=() =>{
        return(
            <CentralizardoNaMesmaLinha>
                <EntradaNomeProduto
                   onChangeText={texto_pesquisa => {this.atualizarTextoPesquisa(texto_pesquisa)}}
                   placeholder="Pesquisar Carta" 
                ></EntradaNomeProduto>
                <Icon style={{padding: 12}} size={20} name='search1'
                      onPress={
                        () =>{ this.atualizar()}
                      }
                ></Icon>
            </CentralizardoNaMesmaLinha>
        )
    }

    mostrarFeeds = () => {
        const { feeds, atualizando } = this.state;

        console.log("total de feeds: " + feeds.length);

        return (
            <>
            
          
            <FlatList
                data={feeds}
                numColumns={2}

                onEndReached={() => this.carregarFeeds()}
                onEndReachedThreshold={0.1}

                onRefresh={() => this.atualizar()}
                refreshing={atualizando}

                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: '50%' }}>
                            {this.mostrarFeed(item)}
                        </View>
                    )
                }}
            >
            </FlatList>
            </>);
    }

    render = () => {
        return (
            <>
            <Header //leftComponent={
                //    <Icon style={{}} size={28}
                //        name="menuunfold"
                //    />
                //}
                centerComponent={
                    this.mostrarBarraPesquisa()

                }

                //rightComponent = { }
        >                 
        </Header>
            {this.mostrarFeeds()}
        </>)
        
    }

}