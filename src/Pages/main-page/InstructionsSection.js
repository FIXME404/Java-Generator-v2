import styles from './InstructionsSection.module.scss';
import Card from '../../components/UI/Card';

function Instructions() {
  return (
    <section className={styles['instructions-section']} id='about'>
      <Card>
        <h3>Documentation</h3>
        <p>An easy-to-use generator for Java code. It generates a Java Class with abstract methods and Java Doc included.</p>
        <ul>
          <li>String</li>
          <li>int</li>
          <li>double</li>
          <li>boolean</li>
          <li>char</li>
        </ul>
        <p>The class will also have a constructor that takes in all of the fields as parameters. The class will also have a toString() method that returns a string representation of the class.</p>
        <p>The class will also have a main method that creates an instance of the class and prints out the instance.</p>
        <p>The class will also have a method that takes in a parameter of the same type as the class and returns a boolean.</p>
      </Card>
    </section>
  );
}

export default Instructions;
