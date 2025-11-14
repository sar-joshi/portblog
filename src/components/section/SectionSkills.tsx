import SummaryItem from '../common/SummaryItem';
import Section from './Section';
import ISkill from '../../interfaces/ISkill';

export default function SectionSkills({ skills }: { skills: ISkill[] }) {
  if (!skills.length) return null;

  return (
    <Section title="Skills">
      {skills.map((item: ISkill) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
          enableHover={true}
        />
      ))}
    </Section>
  );
}
