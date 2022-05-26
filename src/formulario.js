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
            limite: 250,
            estudante: false,
        };
        this.enviarDados = this.enviarDados.bind(this);
    }

    enviarDados() {
        if(this.state.name === '', this.state.idade === ''){
          alert('Preencha todos os campos para continuar!')
          return;
        }
        alert(
          'Conta aberta com sucesso!! \n\n' + 
          'Nome: '+this.state.name + '\n' + 
          'Idade: ' + this.state.idade + '\n' +
          'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
          'Limite da Conta: $' + this.state.limite.toFixed(0) + '\n' +
          'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
        );
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
            <View style={styles.areaSexo}>
              <Text style={styles.textSexo}>Sexo:</Text>
              <Picker 
                style={styles.itemPicker}
                selectedValue={this.state.sexo}
                onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
                {sexoItems}
              </Picker>
            </View>
            <View style={styles.areaLimite}>
              <Text style={styles.textLimite}>Ajuste seu limite:
                <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold'}}> R$ {this.state.limite.toFixed(0)}</Text>
              </Text>
            </View>
  
            <View style={styles.areaSlider}>
              <Slider
                minimumValue={250}
                maximumValue={800}
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