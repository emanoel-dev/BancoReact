# BancoReactApp

Aplicativo Banco React desafio proposto durante aulas na plataforma Udemy. Desenvolvido com React Native Expo.

O App consiste em pegar os dados dos usuários e abrir uma conta no banco de acordo com as informações preenchidas.
Uma funcionalidade a mais foi adicionada ao projeto: quando o usuário envia seus dados para a abertura da conta,
todas as informações são enviadas através de webhooks onde é notificado em um servidor Discord.


- Foi utilizado componentização dos elementos para a captura e exibição dos dados através de States e Props.
#
- Componentes extras do React Native e do Javascript que também foram utilizados: 
- Switch: botão para selecionar se o usuário é estudante ou não;
- TextInput: para preencher nome e idade;
- Picker: seleção de identificação sexual;
- Slider: seleção de limite que o usuário deseja na conta;
- TouchbleOpacity: botão para envio dos dados;
- Async & await: funções assíncronas;
- Fetch e JSON: acessar e enviar os dados para API;
- Webhooks: fornecido pelo Discord;

# Executar
Para iniciar o projeto necessário:

- Expo-CLI 6.0.8
- React-native 0.68.2
- React-native expo 45.0.0
- Yarn

Basta clonar o repositório, acessar o diretório do projeto e em um terminal executar: 

yarn install
yarn start