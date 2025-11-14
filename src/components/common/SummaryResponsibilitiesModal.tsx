import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type SummaryResponsibilitiesModalProps = {
  open: boolean;
  onClose: () => void;
  name: string;
  description: ReactNode;
  responsibilities?: string[];
  achivements?: string[];
  link?: string | null;
  internal?: boolean;
  primaryLinkLabel?: string;
  secondaryLink?: string | null;
  secondaryLinkLabel?: string;
  start?: string;
  end?: string;
};

const highlightSegments = (value: string) =>
  value
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((segment, index) => {
      if (segment.startsWith('**') && segment.endsWith('**')) {
        return (
          <strong key={`${segment}-${index}`}>
            {segment.slice(2, segment.length - 2)}
          </strong>
        );
      }
      return <Fragment key={`${segment}-${index}`}>{segment}</Fragment>;
    });

export default function SummaryResponsibilitiesModal({
  open,
  onClose,
  name,
  description,
  responsibilities = [],
  achivements = [],
  link = null,
  internal = false,
  primaryLinkLabel = 'View more',
  secondaryLink = null,
  secondaryLinkLabel = 'LinkedIn',
  start,
  end,
}: SummaryResponsibilitiesModalProps) {
  const [isVisible, setIsVisible] = useState(open);
  const [isActive, setIsActive] = useState(false);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  useEffect(() => {
    if (!isVisible) return;
    if (open) {
      const frame = requestAnimationFrame(() => setIsActive(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsActive(false);
    const timeout = window.setTimeout(() => setIsVisible(false), 300);
    return () => window.clearTimeout(timeout);
  }, [open, isVisible]);

  useEffect(() => {
    if (!open || !isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, isVisible, onClose]);

  useEffect(() => {
    if (!open || !isVisible) return;
    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 120);

    return () => window.clearTimeout(focusTimeout);
  }, [open, isVisible]);

  const responsibilitiesList = useMemo(
    () =>
      responsibilities.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="leading-relaxed text-sm text-gray-700 dark:text-gray-200"
        >
          {highlightSegments(item)}
        </li>
      )),
    [responsibilities]
  );

  const achievementsList = useMemo(
    () =>
      achivements.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="leading-relaxed text-sm text-gray-700 dark:text-gray-200"
        >
          {highlightSegments(item)}
        </li>
      )),
    [achivements]
  );

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 transition-opacity duration-300 ease-out ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`max-h-[80vh] w-full max-w-2xl transform overflow-y-auto rounded-xl bg-white p-6 shadow-2xl transition-all duration-300 ease-out dark:bg-gray-900 dark:shadow-black/40 modal-scrollbar ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h4
            id={titleId}
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            {name}
          </h4>
          <button
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-gray-500 transition-colors hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-300 dark:hover:bg-green-900/40 dark:hover:text-green-300 dark:focus:ring-offset-gray-900"
            aria-label="Close responsibilities dialog"
          >
            ×
          </button>
        </div>
        {(start || end) && (
          <p className="mt-0.5 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {start}
            {start && end ? ' – ' : ''}
            {!start && end ? end : end ?? ''}
          </p>
        )}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </div>
        {responsibilitiesList.length > 0 && (
          <div className="mt-4">
            <h5 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Responsibilities
            </h5>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {responsibilitiesList}
            </ul>
          </div>
        )}
        {achievementsList.length > 0 && (
          <div className="mt-6">
            <h5 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Achievements
            </h5>
            <ul className="mt-3 list-disc space-y-2 pl-5">{achievementsList}</ul>
          </div>
        )}
        {(link || secondaryLink) && (
          <div className="mt-6 flex flex-wrap gap-4">
            {link && (
              internal ? (
                <Link
                  href={link}
                  className="inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
                >
                  {primaryLinkLabel}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
                >
                  {primaryLinkLabel}
                  <span className="ml-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )
            )}
            {secondaryLink && (
              <a
                href={secondaryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
              >
                {secondaryLinkLabel}
                <span className="ml-1" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

