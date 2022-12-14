import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Switch, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './style';
import api from '../src/services/api';
import { formToJSON } from 'axios';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            idade: '',
            sexo: 0,
            sexos: [
              { sexoNome: 'Masculino', valor: 1 },
              { sexoNome: 'Feminino', valor: 2 }
            ],
            limite: 100,
            estudante: false,
        };
        this.enviarDados = this.enviarDados.bind(this);
    }

    async enviarDados() {
        if(this.state.name === '', this.state.idade === ''){
          alert('Preencha todos os campos para continuar!')
          return;
        }

        await fetch('https://discord.com/api/webhooks/940733836554293259/R-DheNopk7CSW1AbPRHa14IRuJ7Ba4QoVaLxI80sz38SLTwIvzipSzNRNYDG978L8YGq', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            avatar_url: 'https://d33wubrfki0l68.cloudfront.net/3238b11aab97c4006525b4b0a6fde91ad017c8b0/d0eb5/images/posts/github.gif',
            embeds:
              [{
                  title: 'React App Bank',
                  description: `
Nome: ${this.state.name}
Idade: ${this.state.idade}
Sexo: ${this.state.sexos[this.state.sexo].sexoNome}
Limite: $${this.state.limite.toFixed(0)}
Conta Estudante: ${ + (this.state.estudante)? 'Ativo' : 'Inativo'}`,
                  color: 14803425,
                  thumbnail: {
                      url: "https://i.ibb.co/KhTz3RG/ilustracao-do-conceito-de-carteira-eletronica-114360-7561.webp"
                  },
                  footer: {
                      text: "log register by emanoel#1480",
                      icon_url: "https://d33wubrfki0l68.cloudfront.net/3238b11aab97c4006525b4b0a6fde91ad017c8b0/d0eb5/images/posts/github.gif"
                  },
              }]
          ,
          })
        }).then(alert("account opening success"));
      }

    render() {
    let sexoItems = this.state.sexos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome}/>
    });

        return(
            <View style={styles.form}>
            <Text style={styles.textNome}>Nome:</Text>
            <TextInput
              placeholder="Digite seu Nome"
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(texto) => { this.setState({ name: texto }) }}
              />
            <Text style={styles.textIdade}>Idade:</Text>
            <TextInput style={styles.input}
              placeholder="Sua Idade"
              underlineColorAndroid="transparent"
              onChangeText={(texto) => { this.setState({ idade: texto }) }}
              keyboardType="numeric"
              />
              <Text style={styles.textSexo}>Sexo:</Text>
              <Picker 
                style={styles.itemPicker}
                selectedValue={this.state.sexo}
                onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
                {sexoItems}
              </Picker>
            <View style={styles.areaLimite}>
              <Text style={styles.textLimite}>Ajuste seu limite:
                <Text style={{color: '#3a3042', fontSize: 18, fontWeight: 'bold'}}> R$ {this.state.limite.toFixed(0)}</Text>
              </Text>
            </View>
  
            <View style={styles.areaSlider}>
              <Slider
                minimumValue={100}
                maximumValue={500}
                value={this.state.limite}
                onValueChange={ (limite) => this.setState({limite: limite}) }
                />
            </View>
              <View style={styles.areaEstudante}>
                <Text style={styles.textNome}>Você é estudante?</Text>
                <Switch 
                    value={this.state.estudante}
                    onValueChange={ (estudante) => this.setState({estudante: estudante})}
                    />
              </View>
              <TouchableOpacity style={styles.botao} underlayColor="#410936" onPress={this.enviarDados}>
                <Text style={styles.textoBotao}>Abrir Conta</Text>
              </TouchableOpacity>
          </View>
        )
    };
}

export default Formulario;