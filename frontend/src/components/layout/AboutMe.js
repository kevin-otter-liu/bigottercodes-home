import CircularImage from '../ui/CircularImage';
import Text from '../ui/Text';

import classes from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={classes.container}>
      <CircularImage src='/profile.jpeg' />
      <Text>random test and other stuff</Text>
    </div>
  );
};

export default AboutMe;
