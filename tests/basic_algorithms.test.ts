import { describe } from 'node:test';
import { charsAppearCount, isPalindrome, reverseStringV1, reverseStringV2, fizzbuzz, chunkedArray } from '../src/basic_algorithms';

/*
describe('Testing reverse string', ()=>{
  test('reverseStringV1', ()=>{
    //Arrange
    const original = 'apple';
    const reversed_sample = 'elppa';
    
    //Act 
    const answer = reverseStringV1(original);
    
    //Assert
    // expect( answer ).toBe( reversed_sample );
    
  });

  test('reverseStringV2', ()=>{
    //Arrange
    const original = 'apple';
    const reversed_sample = 'elppa';
    
    //Act 
    const answer = reverseStringV2(original);
    
    //Assert
    // expect( answer ).toBe( reversed_sample );
    
  });

});
*/

/*
describe('Testing palindrome', ()=>{
  test('isPalindrome()', ()=>{
    //Arrange
    const testString_1 = 'Oso';
    const testString_2 = 'OsO';
    const testString_3 = 'sdfsdfsdf';
    const testString_4 = 'Pal!ndr0m3m0rdn!lAp';
    
    
    console.log(`
      ${testString_1} / ${reverseStringV1(testString_1)}, is palindrome? (${isPalindrome(testString_1)})
      ${testString_2} / ${reverseStringV1(testString_2)}, is palindrome? (${isPalindrome(testString_2)})
      ${testString_3} / ${reverseStringV1(testString_3)}, is palindrome? (${isPalindrome(testString_3)})
      ${testString_4} / ${reverseStringV1(testString_4)}, is palindrome? (${isPalindrome(testString_4)})
      `);

    console.log(`
      ${testString_1} / ${reverseStringV1(testString_1)}, is palindrome? (Case Sensitive) (${isPalindrome(testString_1, true)})
      ${testString_2} / ${reverseStringV1(testString_2)}, is palindrome? (Case Sensitive) (${isPalindrome(testString_2, true)})
      ${testString_3} / ${reverseStringV1(testString_3)}, is palindrome? (Case Sensitive) (${isPalindrome(testString_3, true)})
      ${testString_4} / ${reverseStringV1(testString_4)}, is palindrome? (Case Sensitive) (${isPalindrome(testString_4, true)})
      `);
    
    
    //Assert
    expect( isPalindrome(testString_1) ).toBeTruthy;
    expect( isPalindrome(testString_2) ).toBeTruthy;
    expect( isPalindrome(testString_3) ).toBeFalsy;
    expect( isPalindrome(testString_4) ).toBeTruthy;

    expect( isPalindrome(testString_1, true) ).toBeTruthy;
    expect( isPalindrome(testString_2, true) ).toBeTruthy;
    expect( isPalindrome(testString_3, true) ).toBeFalsy;
    expect( isPalindrome(testString_4, true) ).toBeTruthy;
    
  });

});
*/

/*
describe('Get maximum character in a string and how many times it appear', ()=>{
  test('charsAppearCount()', ()=>{
    //Arrange
    const testString_1 = 'Oso';
    const testString_2 = 'OsO';
    const testString_3 = 'sdfsdfsdf';
    const testString_4 = 'Pal!ndr0m3m0rdn!lAp';
    
    //Act
    // charsAppearCount(testString_1);
    // charsAppearCount(testString_2);
    // charsAppearCount(testString_3);
    // charsAppearCount(testString_4);
    // charsAppearCount(testString_1, true);
    // charsAppearCount(testString_2, true);
    // charsAppearCount(testString_3, true);
    // charsAppearCount(testString_4, true);
    
  });
});
*/

/*
describe('FizzBuzz', ()=>{
  test('FizzBuzz', ()=>{
    //Arrange
    const testVal = 30;
    
    //Act
    // fizzbuzz(testVal);
    
  });
});
*/


describe('Chuncked Array', ()=>{
  test('chunckedArray()', ()=>{
    //Arrange
    const testArray = [1,2,3,4,5];
    
    //Act
    console.log(chunkedArray(testArray, 6));
    console.log(chunkedArray(testArray, 5));
    console.log(chunkedArray(testArray, 1));
    console.log(chunkedArray(testArray, 2));
    console.log(chunkedArray(testArray, 3));
    // chunkedArray(testArray, 3);
    // chunkedArray(testArray, 4);
    
  });
});