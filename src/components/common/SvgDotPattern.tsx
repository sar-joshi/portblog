const classes = {
  svg: 'hidden fixed transform right-0 top-[5%] z-0 xl:block',
};

export default function SvgDotPattern({}) {
  return (
    <svg
      className={classes.svg}
      width="500" // 404
      height="725" // 784 -> 725
      fill="none"
      viewBox="0 0 500 725" // 404 -> 500 // 784 -> 725
    >
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="2"
            height="2"
            className="fill-current text-green-200 dark:text-green-900"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="500" // 404
        height="725" // 784 -> 725
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      />
    </svg>
  );
}
