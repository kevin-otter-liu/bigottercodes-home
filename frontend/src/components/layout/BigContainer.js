import classes from './BigContainer.module.css';

const BigContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default BigContainer;
