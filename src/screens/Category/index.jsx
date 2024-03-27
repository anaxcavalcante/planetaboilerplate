import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Category() {
  const [planetInfo, setPlanetInfo] = useState({
    nome: "",
    dataConquista: "",
    cores: "",
    populacao: "",
    localizacao: "",
    comunicacao: "",
    governante: "",
    foto: ""
  });

  const handleChange = (key, value) => {
    setPlanetInfo({
      ...planetInfo,
      [key]: value
    });
  };

  return (
    <View style={styles.container}>
      <Title title="Cadastre seu planeta aqui 🌎" />

      <TextInput
        placeholder="Nome do planeta"
        value={planetInfo.nome}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, nome: text })}
      />
      <TextInput
        placeholder="Data de Conquista"
        value={planetInfo.dataConquista}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, dataConquista: text })}
      />
      <TextInput
        placeholder="Cores"
        value={planetInfo.cores}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, cores: text })}
      />
      <TextInput
        placeholder="População"
        value={planetInfo.populacao}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, populacao: text })}
      />
      <TextInput
        placeholder="Localização"
        value={planetInfo.localizacao}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, localizacao: text })}
      />
      <TextInput
        placeholder="Comunicação"
        value={planetInfo.comunicacao}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, comunicacao: text })}
      />
      <TextInput
        placeholder="Governante"
        value={planetInfo.governante}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, governante: text })}
      />
      <TextInput
        placeholder="Foto do planeta"
        value={planetInfo.foto}
        onChangeText={(text) => setPlanetInfo({ ...planetInfo, foto: text })}
      />

      <Button title="Salvar" onPress={() => {}} />

      <View style={{ marginTop: 20 }}>
        <Text>{planetInfo.nome}</Text>
        <Text>{planetInfo.dataConquista}</Text>
        <Text>{planetInfo.cores}</Text>
        <Text>{planetInfo.populacao}</Text>
        <Text>{planetInfo.localizacao}</Text>
        <Text>{planetInfo.comunicacao}</Text>
        <Text>{planetInfo.governante}</Text>
        <Text>{planetInfo.foto}</Text>
      </View>

      <TouchButton route="Profile" title="Perfil da programadora 👩🏻" data={user} />

    </View>
  );
}