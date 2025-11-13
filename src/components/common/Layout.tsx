import Head from 'next/head';

import Header from './Header';
import ThemeChanger from '../common/ThemeChanger';
import { fullName, userExcerpt } from './../../data';
import Footer from './Footer';
import SvgDotPattern from './SvgDotPattern';

const classes = {
  outerWrapper: 'relative dark:bg-gray-800 min-h-screen',
  wrapper: 'p-8 pb-40 max-w-screen-xl xs:p-12',
  svg: 'hidden fixed transform right-0 top-[5%] z-0 xl:block',
  emojis: 'text-xl transform transition-all duration-30 hover:text-2xl',
  footer: 'z-10 text-sm text-gray-600 dark:text-gray-400 text-center pb-1',
  footerA: 'z-10 text-green-500 cursor-pointer hover:underline',
};

export default function Layout({
  children,
  title = "Sarthak Joshi's Blog",
  noBlog = false,
}) {
  return (
    <div className={classes.outerWrapper}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" content={title} key="layout-title" />
      </Head>

      <ThemeChanger />
      <SvgDotPattern />

      <div className={classes.wrapper}>
        <Header
          userInfo={{ name: fullName, excerpt: userExcerpt }}
          noBlog={noBlog}
        />
        {children}
      </div>

      <Footer />
    </div>
  );
}
