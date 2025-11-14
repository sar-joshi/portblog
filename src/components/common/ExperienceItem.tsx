import { useState } from 'react';
import IExperience from '../../interfaces/IExperience';
import SummaryResponsibilitiesModal from './SummaryResponsibilitiesModal';

type ExperienceItemProps = {
  experience: IExperience;
};

const classes = {
  wrapper: 'mb-10 last:mb-0',
  heading:
    'flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg font-semibold text-gray-900 dark:text-white',
  nameButton:
    'underline-offset-4 hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
  nameLink:
    'underline-offset-4 hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200',
  location: 'text-sm font-normal text-gray-400 dark:text-gray-400',
  role: 'text-base font-semibold text-gray-800 dark:text-gray-100',
  dates: 'text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400',
  description: 'mt-3 text-sm text-gray-600 dark:text-gray-300',
  actions: 'mt-4 flex flex-wrap items-center gap-4 text-sm',
  link:
    'inline-flex items-center gap-1 text-green-600 transition-colors hover:text-green-700 dark:text-green-300 dark:hover:text-green-200',
};

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const {
    companyName,
    location,
    role,
    description,
    start,
    end,
    companyUrl,
    linkedInUrl,
    responsibilities,
    achivements,
  } = experience;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasModalContent =
    (responsibilities && responsibilities.length > 0) ||
    (achivements && achivements.length > 0);
  const shouldShowUrls = false;

  const renderCompanyName = () => {
    if (hasModalContent) {
      return (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={classes.nameButton}
        >
          {companyName}
        </button>
      );
    }

    if (companyUrl) {
      return (
        <a
          href={companyUrl}
          target="_blank"
          rel="noreferrer"
          className={classes.nameLink}
        >
          {companyName}
        </a>
      );
    }

    return <span>{companyName}</span>;
  };

  return (
    <article className={classes.wrapper}>
      <div className={classes.heading}>
        {renderCompanyName()}
        {location && <span className={classes.location}>{location}</span>}
      </div>
      <div className="mt-2 flex flex-wrap items-baseline gap-2">
        <span className={classes.role}>{role}</span>
        <span className={classes.dates}>
          {start} – {end}
        </span>
      </div>
      <p className={classes.description}>{description}</p>
      {(companyUrl || linkedInUrl) && shouldShowUrls && (
        <div className={classes.actions}>
          {companyUrl && (
            <a
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              Company site
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {linkedInUrl && (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}

      {hasModalContent && (
        <SummaryResponsibilitiesModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          name={`${companyName} • ${role}`}
          description={<p>{description}</p>}
          responsibilities={responsibilities}
          achivements={achivements}
          link={companyUrl ?? null}
          internal={false}
          primaryLinkLabel={`${companyName} • Profile`}
          secondaryLink={linkedInUrl ?? null}
          secondaryLinkLabel="LinkedIn"
          start={start}
          end={end}
        />
      )}
    </article>
  );
}

