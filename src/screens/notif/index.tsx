import React, {FC, useState, useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../styles/sharedStyles';

const Notif: FC = (props: any) => {
  const [totalCourses, setTotalCourses] = useState<number>(0);
  const [totalMembers, setTotalMembers] = useState<number>(0);

  useEffect(() => {
    if (props?.route?.params?.totalCourses) {
      setTotalCourses(props?.route?.params?.totalMembers);
    }
    if (props?.route?.params?.totalMembers) {
      setTotalMembers(props?.route?.params?.totalMembers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
