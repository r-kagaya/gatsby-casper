import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function About() {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">About</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>
                    r.kagaya 
                    <br /> GitHub:{' '}
                    <a href="https://github.com/r-kagaya">github.com/r-kagaya</a>
                    <br /> Twitter:{' '}
                    <a href="https://twitter.com/ry0_kaga">twitter.com/ry0_kaga</a>
                    <br /> Zenn:{' '}
                    <a href="https://zenn.dev/r_kaga">zenn.dev/r_kaga</a>
                  </h5>
                  <p>
                    ソフトウェアエンジニアです。ここ2年はSpring Boot×Kotlin×k8sな構成でひたすら既存APIのリプレイスをしています。それ以前はPHPを書いている事が多かったです。<br />
                    たまにExpress,Nuxt.js,Next.jsも触ったりしてます。<br />
                    副業としてFlutterでアプリ開発してたり、学生時代には受託系の会社でガワネイティブなiOSアプリ作ったり、 APIをPHPで書いたりもしていました。<br />
                    最近はDeveloper Productivity, Developer Experience周りに関心があります。
                  </p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;
