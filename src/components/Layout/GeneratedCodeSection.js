import Card from '../UI/Card';
import styles from './GeneratedCodeSection.module.scss';
import GeneratedCode from '../generated-code/generatedCode';

function GeneratedCodeSection() {
  return (
    <section className={styles['code-section']}>
      <Card>
        <div className={styles['code-section__code']}>
          <GeneratedCode />
        </div>
      </Card>
    </section>
  );
}

export default GeneratedCodeSection;
