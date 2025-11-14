import Link from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';

import SummaryResponsibilitiesModal from './SummaryResponsibilitiesModal';

type SummaryItemProps = {
  name: string;
  description: ReactNode;
  link?: string | null;
  internal?: boolean;
  responsibilities?: string[];
  enableHover?: boolean;
};

const classes = {
  wrapper: 'mb-6',
  name:
    'font-semibold text-gray-900 pb-1 dark:text-white',
  description: 'text-base text-gray-700 font-normal dark:text-gray-200',
};

export default function SummaryItem({
  name,
  description,
  link = null,
  internal = false,
  responsibilities,
  enableHover = false,
}: SummaryItemProps) {
  const hasResponsibilities = Boolean(responsibilities?.length);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // if link is present, add the class name to the link
  // if enableHover is true, add the class name to the link
  const classNames = `
    ${classes.name}
    ${enableHover || link ? 'cursor-pointer transition-colors duration-200 hover:underline lg:dark:hover:text-green-500' : ''}
  `;

  const renderTitle = () => {
    if (hasResponsibilities) {
      return (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={classNames}
        >
          {name}
        </button>
      );
    }

    if (link) {
      return internal ? (
        <Link
          href={link}
          className={`${classes.name} ${
            enableHover ? 'hover:underline hover:text-black' : ''
          }`}
        >
          {name}
        </Link>
      ) : (
        <a
          href={link}
          className={`${classes.name} ${
            enableHover ? 'hover:underline hover:text-black' : ''
          }`}
          rel="noreferrer"
          target="_blank"
        >
          {name}
        </a>
      );
    }

    return <span className={classes.name}>{name}</span>;
  };

  return (
    <div className={classes.wrapper}>
      <h3>{renderTitle()}</h3>
      <p className={classes.description}>{description}</p>

      {hasResponsibilities && (
        <SummaryResponsibilitiesModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          name={name}
          description={description}
          responsibilities={responsibilities ?? []}
          link={link}
          internal={internal}
        />
      )}
    </div>
  );
}
