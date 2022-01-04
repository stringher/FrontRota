import React from "react";
import { Text } from "react-native";
import TitlePageTemplate from "../../components/TitlePageTemplate";


const PlayListScreen = (props) => {

  const data = props?.route?.params;

  return (
    <TitlePageTemplate {...props} nome={data?.nome || "PlayList"} footerId={2} >
      <Text style={{ color: 'white' }}>Olá mundo</Text>
    </TitlePageTemplate>
  )

}

export default PlayListScreen;

