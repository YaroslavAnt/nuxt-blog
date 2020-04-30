import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../layout/Container';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Title from '../common/Title';
import CardsGrid from '../common/CardsGrid';
import Card from '../common/Card';
import SimpleDialog from '../common/SimpleDialog';
import { HomePageInterface } from '../../types';

interface PostType {
  title: string;
  body: string;
  id: string;
}

interface ComponentsProps {
  posts: Array<PostType>;
  message: string;
  handleClose: () => void;
}

const Home = ({ posts, message, handleClose }: HomePageInterface) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Title>
          Wellcome to
          <Link href="/posts/new">
            <a> Next.js </a>
          </Link>
          app blog
        </Title>

        <CardsGrid>
          {posts.map((post) => {
            const { title, body, id } = post;
            return <Card title={title} body={body} id={id} key={id} />;
          })}
        </CardsGrid>
      </Main>

      <SimpleDialog onClose={handleClose} open={Boolean(message)} message={message} />
    </Container>
  );
};

export default Home;
