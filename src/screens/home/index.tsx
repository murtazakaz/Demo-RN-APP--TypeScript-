import React, {FC, useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../styles/sharedStyles';

const Home: FC = (props: any) => {
  const [totalLiveStreams, setTotalLiveStreams] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    if (props?.route?.params?.totalLiveStreams) {
      setTotalLiveStreams(props?.route?.params?.totalMembers);
    }
    if (props?.route?.params?.totalMembers) {
      setTotalMembers(props?.route?.params?.totalMembers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLiveStreams = (): string => {
    if (totalLiveStreams && totalLiveStreams > 1) {
      return ` ${totalLiveStreams} Livestreams`;
    }
    return ` ${totalLiveStreams} Livestream`;
  };

  const getMembers = (): string => {
    if (totalMembers && totalMembers > 1) {
      return `${totalMembers} Members`;
    }
    return `${totalMembers} Member`;
  };
  const {bgImage, infoContainer, title, detail} = styles;

  return (
    <ImageBackground
      source={require('../../assets/images/homeBG.png')}
      style={bgImage}>
      <View style={infoContainer}>
        <Text style={title}>Hello</Text>
        <Text style={detail}>{`${getLiveStreams()}  - ${getMembers()}`}</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;
