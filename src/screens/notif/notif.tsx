import React, {FC, useState, useEffect} from 'react';
import DetailScreen from '../../components/detailScreen';

const Notif: FC = (props: any) => {
  const [totalCourses, setTotalCourses] = useState<number>(0);
  const [totalMembers, setTotalMembers] = useState<number>(0);

  useEffect(() => {
    if (props?.route?.params?.totalCourses) {
      setTotalCourses(props?.route?.params?.totalCourses);
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

  return (
    <DetailScreen
      backgroundImage={require('../../assets/images/notifBG.png')}
      title={'World'}
      count={getCoursesCount()}
      memberCount={getMembers()}
    />
  );
};

export default Notif;
