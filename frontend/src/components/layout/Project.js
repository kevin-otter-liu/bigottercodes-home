import classes from './Project.module.css';
import Card from '../ui/Card';

const Project = (props) => {
  return (
    <div className={classes.container}>
      <a href={props.project.url}>
        <h1>{props.project.name}</h1>
      </a>
    </div>
  );
};

export default Project;
