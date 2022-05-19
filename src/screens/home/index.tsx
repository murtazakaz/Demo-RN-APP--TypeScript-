import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './style';

export type Props = {
  totalLiveStreams?: number;
  totalMembers?: number;
};

const Home: React.FC<Props> = (props: Props) => {
  const {totalLiveStreams = 0, totalMembers = 0} = props;

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
