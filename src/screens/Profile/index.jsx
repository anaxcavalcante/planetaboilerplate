import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Perfil" />

      <Image style={styles.image} source={data.image}/>

      <View style={styles.user}>
        <Title title="Sobre mim" />
        <Text style={styles.text}>{data.name}</Text>

         <TouchButton route="Home" title="Planetas cadastrados" />

      <TouchButton route="Category" title="Cadastre seu planeta 🌎" />
      </View>
    </View>
  );
}
