import Section from './Section';
import SummaryItem from '../common/SummaryItem';
import IProject from '../../interfaces/IProject';

export default function SectionProjects({
  projects,
}: {
  projects: IProject[];
}) {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project: IProject) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          enableHover={true}
        />
      ))}
    </Section>
  );
}
