import FooterItem from './FooterItem';
import classes from './Footer.module.css';

let footerItems = [
  { id: 1, name: 'About Me' },
  { id: 2, name: 'Contact Me' },
];

const Footer = () => {
  return (
    <div className={classes.container}>
      {footerItems.map((footerItem) => {
        return <FooterItem key={footerItem.id} name={footerItem.name} />;
      })}
    </div>
  );
};

export default Footer;
