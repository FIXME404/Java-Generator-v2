import Card from '../UI/Card';
import styles from './GeneratedCodeSection.module.scss';
import GeneratedCode from '../generated-code/generatedCode';

function GeneratedCodeSection() {
  return (
    <section className={styles['code-section']}>
      <Card>
        <GeneratedCode />
      </Card>
    </section>
  );
}

export default GeneratedCodeSection;
