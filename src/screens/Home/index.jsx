import { View, Image, } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Planetas já conquistados" />

      <Image
          style={styles.img}
          source={require("../../../assets/diamond.png")}
        />

      <Title title="Nome do planeta: Sidera
Data de Conquista: 13/11/2006
Cor Primária e Cor Secundária do Planeta: Roxo e Azul
População do Planeta: 120.139
Localização: Galaxia
Governante do Planeta: Ana Clara Cavalcante Reis
Descrição do planeta: Sirena é um planeta exuberante e diversificado, situado nos confins do universo conhecido. Desde sua conquista em 13 de novembro de 2006, este mundo floresceu sob a liderança visionária de sua governante, Ana Clara Cavalcante Reis. Com uma população de 120.139 habitantes, Sirena é uma colcha de retalhos de culturas, com paisagens deslumbrantes que variam de vastas planícies verdejantes a majestosas montanhas cobertas de neve."
      />


      <TouchButton route="Profile" title="Perfil da programadora 👩🏻" data={user} />

      <TouchButton route="Category" title="Cadastre seu planeta 🌎" />
    </View>
  );
}
