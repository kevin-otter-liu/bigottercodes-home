import classes from './ImageBanner.module.css';

const ImageBanner = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.url} />
    </div>
  );
};

export default ImageBanner;
