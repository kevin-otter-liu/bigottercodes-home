import classes from './CircularImage.module.css';

const CircularImage = (props) => {
  return <img className={classes.img} src={props.src} />;
};

export default CircularImage;
