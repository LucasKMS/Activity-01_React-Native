import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      input: "",
      sexo: 1,
      sexos: [
        { key: 1, sexo: "Masculino"},
        { key: 2, sexo: "Feminino"},
        { key: 3, sexo: "Não Informar"},
      ],
      valor: 0,
      status: false,
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === "") {
      alert("Digite seu nome na caixa de Texto!🤠");
      return;
    }

    this.setState({ nome: "Conta Criada com sucesso! Bem vindo " + this.state.input +"!😁" });
    alert("Conta Criada Com Sucesso! 💰💸💲");
  }

  render() {
    const sexosItem = this.state.sexos.map((v) => {
      return <Picker.Item key={v.key} label={v.sexo} value={v.key} />;
    });

    return (
      <View style={styles.container}>
        {/* INPUT */}
        <View>
          <Text style={styles.texto}>{this.state.nome}</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome "
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({ input: texto })}
          />
        </View>

        {/* PICKER */}
        <View>
          <Text style={styles.logo}>Informe seu Sexo:</Text>
          
          <Picker selectedValue={this.state.sexo} onValueChange={ (itemValue, itemIndex) => this.setState( { sexo: itemValue } ) }>{sexosItem}</Picker>
        </View>

        {/* SLIDER */}
        <View>
          <Text style={{textAlign: 'center', fontSize: 30}}>
            Informe seu Limite:
          </Text>

          <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={ (valorSelecionado)=> this.setState({valor: valorSelecionado}) }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00" maximumTrackTintColor="#FF0000"
          step={50}
          />
          
          <Text style={{textAlign: 'center', fontSize: 25}}>
            R$ {this.state.valor.toFixed(2)}
          </Text>
        </View>

        {/* SWITCH */}
        <View>
          <Switch
          value={this.state.status}
          onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
          thumbColor="#FF0000"
          style={{marginLeft: "auto", marginRight: "auto"}}
          />

          <Text style={{textAlign: 'center', fontSize: 30}}>
            {(this.state.status) ? "Casado" : "Solteiro"}
          </Text>
        </View>

        <Button title="Criar Conta" onPress={this.entrar} />

        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: "space-evenly",
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
    color: "green"
  },
});
export default App;
