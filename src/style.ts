import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
      },
      textNome: {
        color: '#fff',
        fontSize: 18,
      },
      textSexo: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20
      },
      textIdade: {
        color: '#fff',
        fontSize: 20,
        marginTop: 15
      },
      textLimite: {
        color: '#fff',
        fontSize: 20,
        marginTop: 15,
        fontWeight: 'bold'
      },
      input: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#999999',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        height: 40,
        width: 200,
        padding: 10,
      },
      itemPicker: {
        borderRadius: 4,
        borderColor: '#999999',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        width: 200,
      },
      areaLimite: {
        margin: 20
      },
      areaSlider: {
        width: 200,
        margin: 5
      },
      areaEstudante: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      botao: {
        height: 50,
        width: 200,
        backgroundColor: '#e46f0a',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
      },
      textoBotao: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
      }
});