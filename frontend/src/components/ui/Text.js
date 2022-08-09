import classes from './Text.module.css';

const Text = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Text;
