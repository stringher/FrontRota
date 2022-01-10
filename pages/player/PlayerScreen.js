import React from "react";
import AudioPlayer from "../../components/AudioPlayer";
import TitlePageTemplate from "../../components/TitlePageTemplate";


const PlayListScreen = (props) => {

    const data = props?.route?.params;

    return (
        <TitlePageTemplate {...props} nome={""} footerId={0} >
            <AudioPlayer url='' />
        </TitlePageTemplate>
    )

}

export default PlayListScreen;

