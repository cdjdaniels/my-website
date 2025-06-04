import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Creative and Technical',
    Svg: require('@site/static/img/space.svg').default,
    description: (
      <>
        With 10+ years' experience as a technical writer and editor, I've specialized in highly complex content,
        from pharmacology to rocket science.
      </>
    ),
  },
  {
    title: 'Flexibility and Adaptability',
    Svg: require('@site/static/img/ideas.svg').default,
    description: (
      <>
        I'm an expert at adapting content to various audiences and media and being flexible with new workflows and software.
      </>
    ),
  },
  {
    title: 'Continuous Improvement',
    Svg: require('@site/static/img/writer.svg').default,
    description: (
      <>
        I'm constantly adding new things to my own skill set, and I am always looking for ways to streamline processes or improve outcomes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
