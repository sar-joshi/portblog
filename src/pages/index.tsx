import { GetStaticProps } from 'next';

import Layout from '../components/common/Layout';
import SectionAbout from '../components/section/SectionAbout';
import SectionProjects from '../components/section/SectionProjects';
import SectionExperience from '../components/section/SectionExperience';
import SectionSkills from '../components/section/SectionSkills';
import { projects, experience, skills, aboutMe } from '../data';
import { getSortedPostsData } from '../lib/posts';
import SectionBlogPosts from '../components/section/SectionBlogPosts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <SectionAbout about={aboutMe} />
      <SectionExperience experience={experience} />
      <SectionSkills skills={skills} />
      <SectionProjects projects={projects} />
      {allPostsData?.length > 0 ? (
        <SectionBlogPosts blogPosts={allPostsData} />
      ) : null}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
