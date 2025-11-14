import ExperienceItem from '../common/ExperienceItem';
import Section from './Section';
import IExperience from '../../interfaces/IExperience';

export default function SectionExperience({
  experience,
}: {
  experience: IExperience[];
}) {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item: IExperience) => (
        <ExperienceItem key={`${item.companyName}-${item.start}`} experience={item} />
      ))}
    </Section>
  );
}
