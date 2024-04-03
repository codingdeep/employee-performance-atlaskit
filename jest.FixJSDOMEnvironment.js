const JSDOMEnvironment = require('jest-environment-jsdom').default;

/**
 * Fix that allows Jest to run JSDOM tests that include code using `structuredClone`.
 * Source: https://github.com/jsdom/jsdom/issues/3363#issuecomment-1467894943
 **

 /**
 * @extends {JSDOMEnvironment}
 */
class FixJSDOMEnvironment extends JSDOMEnvironment {
  /**
   * @param {...any[]} args - Arguments to pass through to the JSDOMEnvironment constructor.
   */
  constructor(...args) {
    super(...args);
    this.global.structuredClone = structuredClone;
  }
}

module.exports = FixJSDOMEnvironment;
