import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <DarkerBackgroundContainer>
            <FeaturesGallery />
          </DarkerBackgroundContainer>
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Missions" overTitle="sit amet gogo">
            <p>
              Our mission is crystal clear—to be the guiding light for all Salesforce enthusiasts on their learning journey. We strive to create a community that fosters collaboration, knowledge sharing, and growth. Our blogs are carefully crafted to cater to beginners seeking to embark on their Salesforce expedition and seasoned professionals looking to stay at the forefront of the rapidly evolving ecosystem.{' '}
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Join the Repository:
." overTitle="lorem ipsum" reversed>
            <p>
              <strong>Whether you are a novice or a seasoned pro, Logic Repository is your one-stop destination to gain expertise and stay ahead in the game.</strong>. Our commitment to providing quality content and insights is unwavering. We believe that every success story in the development realm begins with a step in the right direction—a step taken with the right knowledge, tools, and guidance.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper >
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
