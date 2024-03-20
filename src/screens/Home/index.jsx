import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Profile" title="Planetas Cadastrados 🌎" data={user} />

      <TouchButton route="Category" title="Cadastre seu planeta 🌎" />
    </View>
  );
}
