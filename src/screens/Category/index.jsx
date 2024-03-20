import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Cadastre seu planeta aqui" />

      <TouchButton route="Category" title="Cadastre seu planeta 🌎" />

      <TouchButton route="Profile" title="Perfil da programadora" data={user} />
    </View>
  );
}
