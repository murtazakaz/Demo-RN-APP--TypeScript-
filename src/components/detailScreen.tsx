import React, {FC} from 'react';
import {ImageBackground, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from '../styles/sharedStyles';

export type Props = {
  backgroundImage: ImageSourcePropType;
  title: string;
  count: string;
  memberCount: string;
};

const DetailScreen: FC<Props> = (props: Props) => {
  const {backgroundImage, title, count, memberCount} = props;
  const {bgImage, infoContainer, titleText, detailText} = styles;

  return (
    <ImageBackground source={backgroundImage} style={bgImage}>
      <View style={infoContainer}>
        <Text style={titleText}>{title}</Text>
        <Text style={detailText}>{`${count}  - ${memberCount}`}</Text>
      </View>
    </ImageBackground>
  );
};

export default DetailScreen;
