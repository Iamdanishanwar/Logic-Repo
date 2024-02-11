import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
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
import { ICollectionResponse, ICategory, IArticle } from './types';
import Testimonials from 'views/HomePage/Testimonials';
import { fetchArticles, fetchCategories } from '../http/index';

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  }
}
export default function Homepage({ articles }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Logicrepository</title>
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
          <ScrollableBlogPosts articles={articles.items} />
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

// export async function getStaticProps() {
//   return {
//     props: {
//       posts: await getAllPosts(),
//     },
//   };
// }

export const getServerSideProps: GetServerSideProps = async () => {
  // categories
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles();
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  console.log("Categories", categories);
  console.log("Articles", articles);
  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      }
    }
  }
}