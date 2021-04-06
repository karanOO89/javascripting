const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
    it('should return an empty string when passed an empty string', function() {
        const inputName = "";
        const expectedOutput = "";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('return a single name when passed a single name', function() {
        const inputName = "karan";
        const expectedOutput = "karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('return a single name when passed a single name with extra spaces', function() {
        const inputName = "karan    ";
        const expectedOutput = "karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      
      it('return a last-name, first-name when passed a first and last-name', function() {
        const inputName = "karan gaba";
        const expectedOutput = "gaba, karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('return a last-name, first-name when passed a first and last-name with extra spaces around the names ', function() {
        const inputName = "      karan    gaba    ";
        const expectedOutput = "gaba, karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('return an empty string when passed a single honorific', function() {
        const inputName = " Dr. ";
        const expectedOutput = "";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('return honorific first-name when passed honorific first-name', function() {
        const inputName = " Dr.      karan";
        const expectedOutput = "Dr. karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('honorific last-name, first-name when passed honorific first-name last-name', function() {
        const inputName = " Dr. karan gaba";
        const expectedOutput = "Dr. gaba, karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
        const inputName = "     Dr.       karan   gaba ";
        const expectedOutput = "Dr. gaba, karan";
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      it('throw an error when name is undefined', function() {
        const inputName = undefined;
        const expectedOutput = 'Error';
        assert.equal(nameInverter(inputName), expectedOutput);
      });
      

});