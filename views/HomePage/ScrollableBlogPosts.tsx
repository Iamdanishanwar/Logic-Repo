import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';
import { IArticle } from 'pages/types';

// interface ScrollableBlogPostsProps {
//   posts: SingleArticle[];
// }
interface IPropTypes {
  articles: IArticle[];
  article: IArticle;
}
export default function ScrollableBlogPosts({ articles }: IPropTypes) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = width / oneItemWidth;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>Blog Data</OverTitle>
          <SectionTitle>Blog Posts</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={10} loop>
            {articles.length > 0 && articles.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleCard
                  title={article.attributes.Title}
                  // description={article.attribute.description}
                  imageUrl={`data:image/png;base64,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`}
                  // slug={singlePost.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;
  height: 46rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;
