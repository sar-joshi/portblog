const classes = {
  wrapper: 'block pt-12 md:flex',
  title: 'pb-6 md:w-full md:max-w-[150px] md:p-0',
  heading:
    'font-xs font-normal tracking-widest text-sm text-gray-700 leading-normal uppercase dark:text-white',
  content:
    'flex-none text-base text-gray-700 font-normal md:flex-1 md:pl-20 dark:text-gray-300',
};

export default function Section({ title, children }) {
  return (
    <section className={classes.wrapper}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </section>
  );
}
