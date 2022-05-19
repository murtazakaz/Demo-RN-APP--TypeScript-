import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './style';

export type Props = {
  totalCourses?: number;
  totalMembers?: number;
};

const Notif: React.FC<Props> = (props: Props) => {
  const {totalCourses = 0, totalMembers = 0} = props;

  const getCoursesCount = (): string => {
    if (totalCourses && totalCourses > 1) {
      return ` ${totalCourses} Courses`;
    }
    return ` ${totalCourses} Course`;
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
      source={require('../../assets/images/notifBG.png')}
      style={bgImage}>
      <View style={infoContainer}>
        <Text style={title}>World</Text>
        <Text style={detail}>{`${getCoursesCount()}  - ${getMembers()}`}</Text>
      </View>
    </ImageBackground>
  );
};

export default Notif;
