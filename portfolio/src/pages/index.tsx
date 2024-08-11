import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function GetStartedButton() {
  return (
    <Link
      className="inline-block w-[14rem] py-[1.2rem] rounded-lg heading-xs text-white bg-black hover:text-white focus-visible:text-white dark:bg-[#222] dark:hover:bg-[#1b1b1b] dark:active:bg-[#111] dark:hover:text-[#eaeaea] dark:active:text-[#eaeaea] text-center"
      to="/about">
      Explore
    </Link>
  );
}

function HomepageHeader() {
  return (
    <header className="pt-[6.4rem] sm:pt-[12rem] pb-[12rem] px-[2rem] flex justify-center">
      <div className="max-w-[82.5rem] w-full">
        <div className="max-w-[65.4rem] mx-auto">
          <Heading
            as="h1"
            className="mb-[3.2rem] sm:text-[3.2rem] sm:leading-[normal] sm:tracking-[-0.1rem] font-[600] text-[3.6rem] leading-[120%] tracking-[-0.072rem] text-text-primary dark:text-text-white">
            Harsh Patel
          </Heading>
          <p className="mb-[2.8rem] text-[1.8rem] font-[400] leading-[3.2rem] text-text-primary dark:text-text-white">
            I'm a Lead Software Engineer at Superr, where I work on creating educational technology products for the next generation.
          </p>
          <p className="mb-[2.8rem] text-[1.8rem] font-[400] leading-[3.2rem] text-text-primary dark:text-text-white">
            I believe in the power of ideas over opinions, focusing on results rather than just effort, and valuing high-quality craftsmanship in everything I do.
          </p>
          <p className="mb-[5.6rem] text-[1.8rem] font-[400] leading-[3.2rem] text-text-primary dark:text-text-white">
            I am driven by curiosity and take pride in delivering well-crafted, high-quality work that exceeds expectations.
          </p>
          <GetStartedButton />
        </div>
      </div>
    </header>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Harsh Patel" description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}

export default Home;
