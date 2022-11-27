import styles from './InstructionsSection.module.scss';
import Card from '../../components/UI/Card';

function Instructions() {
  return (
    <section className={styles['instructions-section']} id='about'>
      <Card>
        <h3>Documentation</h3>
        <p>An easy-to-use generator for Java code. It generates a Java Class with abstract methods and Java Doc included.</p>
        {/* Class Header */}
        <div className={styles['instructions-section__inputs']}>
          <h4>Class Header</h4>
          <p>
            <label>Class Name - </label>Enter the class name.
          </p>
          <p>
            <label>Extend - </label>Enter the parent's class name.
          </p>
          <p>
            <label>Implement - </label>Enter the interface's name.
          </p>
        </div>

        {/* Instance Variables */}
        <div className={styles['instructions-section__inputs']}>
          <h4>instance Variables</h4>
          <p>
            <label>Variable Type - </label>Enter the instance variable data type.
          </p>
          <p>
            <label>Variable Name - </label>Enter the instance variable name.
          </p>
          <p>
            <label>Getter? -</label> Check if you want a getter generated for the instance variable.
          </p>
          <p>
            <label>Setter? -</label> Check if you want a setter generated for the instance variable.
          </p>
        </div>

        {/* Methods */}

        <div className={styles['instructions-section__inputs']}>
          <h4>Methods</h4>
          <p>
            <label>Return Type - </label>Enter the method return type.
          </p>
          <p>
            <label>Method Name - </label>Enter the method name.
          </p>
          <p>
            <label>Parameters - </label>Enter the method's parameter(s) separated by commas. Parameters will appear as written.
          </p>
          <p>
            <label>Private? - </label> Check if you want the method to be private.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles['instructions-section__inputs']}>
          <h4>Buttons</h4>
        </div>
        <div className={styles['instructions-section__buttons']}>
          <i className={styles['instructions-section__buttons--remove-btn']}></i>
          <p> - Removes a input field from the interface. Also removes variable from generated code.</p>
        </div>
        <div className={styles['instructions-section__buttons']}>
          <i className={styles['instructions-section__buttons--add-btn']}></i>
          <p> - Adds a new input field for the instance variables or methods. Used to add multiple instance variables or methods fields.</p>
        </div>

        <div className={styles['instructions-section__buttons']}>
          <i className={styles['instructions-section__buttons--generate-btn']}>GENERATE CODE</i>
          <p> - Takes you to the generated code.</p>
        </div>
      </Card>
    </section>
  );
}

export default Instructions;
