import classes from './FooterItem.module.css';

const FooterItem = (props) => {
  return (
    <div className={classes.footerItem}>
      <h1>{props.name}</h1>
    </div>
  );
};

export default FooterItem;
