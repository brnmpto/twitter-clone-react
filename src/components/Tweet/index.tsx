import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Saturno</strong>
            <span>@saturno</span>
            <Dot />
            <time>30 de mar</time>
          </Header>
          <Description>Artsy post of the day 🪐</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              30
            </Status>
            <Status>
              <RetweetIcon />
              3003
            </Status>
            <Status>
              <LikeIcon />
              333
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
