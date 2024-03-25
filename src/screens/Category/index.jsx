import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
import { TextInput } from "react-native-gesture-handler";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Cadastre seu planeta aqui" />

      <TextInput placeholder="Digite o nome do planeta:" />
      <TextInput placeholder="Data de Conquista:" />
      <TextInput placeholder="Cor Primária e Cor Secundária do Planeta:" />
      <TextInput placeholder="População do Planeta:" />
      <TextInput placeholder="Localização:" />
      <TextInput placeholder="Comunicação" />
      <TextInput placeholder="Governante do Planeta" />

      <TouchButton route="Profile" title="Perfil da programadora 👩🏻" data={user} />

    </View>
  );
}
