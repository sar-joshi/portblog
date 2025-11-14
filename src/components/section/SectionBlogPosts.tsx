import Link from 'next/link';
import DateFormatter from '../common/DateFormatter';
import SummaryItem from '../common/SummaryItem';
import Section from './Section';
// import IBlogPost from '../interfaces/IBlogPost';

export default function SectionBlogPosts({ blogPosts }: { blogPosts: any }) {
  if (!blogPosts.length) return null;

  return (
    <Section title="Latest Posts">
      {blogPosts.map(({ id, date, title }) => (
        <SummaryItem
          key={id}
          name={title}
          description={<DateFormatter date={date} prefix={'Posted on'} />}
          link={`/posts/${id}`}
          enableHover={true}
        />
      ))}
      {blogPosts.length >= 5 && (
        <Link href="/blog">
          <a className="text-gray-500 text-sm hover:text-black">
            View all posts &rarr;
          </a>
        </Link>
      )}
    </Section>
  );
}
