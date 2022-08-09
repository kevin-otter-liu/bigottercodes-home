import classes from './ProjectContainer.module.css';
import Project from './Project';

let projectList = [
  { id: 1, name: 'Finappsys', url: '/#' },
  { id: 2, name: 'Finappsys', url: '/#' },
];

const ProjectContainer = () => {
  return (
    <div className={classes.container}>
      {projectList.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectContainer;
