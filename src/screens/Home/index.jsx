import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Planetas já cadastrados" />

      <Title title="Nome do Planeta: Sidera
Data de Conquista: 13/11/2006
Cor Primária e Cor Secundária do Planeta: Verde e roxo
População do Planeta: 120.139
Localização:
Governante do Planeta: Ana Clara Cavalcante Reis"
/>

      <TouchButton route="Profile" title="Perfil da programadora 👩🏻" data={user} />

      <TouchButton route="Category" title="Cadastre seu planeta 🌎" />
    </View>
  );
}
