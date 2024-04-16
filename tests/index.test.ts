import { describe, expect, test } from '@jest/globals';
import { arraySum, isInteger, arraySumV2 } from "../src/index";

describe('Testing arraySum() on index.ts', ()=>{
  
  test('Testing empty Array', ()=>{
    //Arrange
    const empty_array1 = [];
    const empty_array2 = new Array();
    
    //Act
    const answer_empty_array1 = arraySum(empty_array1);
    const answer_empty_array2 = arraySum(empty_array2);
    
    //Assert
    expect(answer_empty_array1).toBe(0);
    expect(answer_empty_array2).toBe(0);
    
  });

  test('should detect integers correctly', () => { 
      // Arrange
      const string = "hello";
      const stringNumber = "five";
      const stringNumber_2 = "5";
      const largeNumber = 100000000000;
      const float = 2.5;
      const nullValue = null;
      const undefinedValue = undefined;

      //Act
      const answer_string = isInteger(string);
      const answer_stringNumber = isInteger(stringNumber);
      const answer_stringNumber_2 = isInteger(stringNumber_2);
      const answer_largeNumber = isInteger(largeNumber);
      const answer_float = isInteger(float);
      const answer_nullValue = isInteger(nullValue);
      const answer_undefinedValue = isInteger(undefinedValue);

      console.log({answer_string});
      console.log({answer_stringNumber});
      console.log({answer_stringNumber_2});
      console.log({answer_largeNumber});
      console.log({answer_float});
      console.log({answer_nullValue});
      console.log({answer_undefinedValue});

      // Assert
      expect(answer_string).toBeFalsy;
      expect(answer_stringNumber).toBeFalsy;
      expect(answer_stringNumber_2).toBeFalsy;
      expect(answer_largeNumber).toBeTruthy;
      expect(answer_float).toBeFalsy;
      expect(answer_nullValue).toBeFalsy;
      expect(answer_undefinedValue).toBeFalsy;

  });

  test('should not return a sum', () => { 
      // Arrange Poisoned data
      const taintedArray1 = ["hello", 100000000000]; // Tainted with string and very large number
      const taintedArray2 = [1, 2.5, 3]; // Tainted with a floating-point number
      const taintedArray3 = [1, 2, 3, -4, "five"]; // Tainted with negative number and string
      const taintedTransactions1 = [100, -50, 200]; // Tainted with negative transaction
      const taintedTransactions2 = ["deposit", 100, 200]; // Tainted with string (assuming invalid)

      //Act
      const answer_taintedArray1 = arraySum(taintedArray1);
      const answer_taintedArray2 = arraySum(taintedArray2);
      const answer_taintedArray3 = arraySum(taintedArray3);
      const answer_taintedTransactions1 = arraySum(taintedTransactions1);
      const answer_taintedTransactions2 = arraySum(taintedTransactions2);

      // console.log({answer_taintedArray1});
      // console.log({answer_taintedArray2});
      // console.log({answer_taintedArray3});
      // console.log({answer_taintedTransactions1});
      // console.log({answer_taintedTransactions2});

      // Assert
      expect(answer_taintedArray1).toBeFalsy;
      expect(answer_taintedArray2).toBeFalsy;
      expect(answer_taintedArray3).toBeFalsy;
      expect(answer_taintedTransactions1).toBe(250);
      expect(answer_taintedTransactions2).toBeFalsy;
  });

  test('should show the sum of the arrays', () => {
      // Arrange  
      const input_onlyPositives = [0, 1, 1, 2, 4, 5, 6, 7];
      const input_onlyNegatives = [-1,-2,-3,-4,-5,-6,-7];
      const mixed_input = [-1,-2,-3,-4,-5,0,1,2,3,4,5];

      //Act
      const answer_input_onlyPositives = arraySum(input_onlyPositives);
      const answer_input_onlyNegatives = arraySum(input_onlyNegatives);
      const answer_mixed_input = arraySum(mixed_input);

      // console.log({answer_input_onlyPositives});
      // console.log({answer_input_onlyNegatives});
      // console.log({answer_mixed_input});

      // Assert
      expect(answer_input_onlyPositives).toBe(26);
      expect(answer_input_onlyNegatives).toBe(-28);
      expect(answer_mixed_input).toBe(0);
  });
});


describe('Testing arraySumV2() on index.ts', ()=>{
  
  test('Testing empty Array', ()=>{
    //Arrange
    const empty_array1 = [];
    const empty_array2 = new Array();
    
    //Act
    const answer_empty_array1 = arraySumV2(empty_array1);
    const answer_empty_array2 = arraySumV2(empty_array2);
    
    //Assert
    expect(answer_empty_array1).toBe(0);
    expect(answer_empty_array2).toBe(0);
    
  });

  test('should detect integers correctly', () => { 
      // Arrange
      const string = "hello";
      const stringNumber = "five";
      const stringNumber_2 = "5";
      const largeNumber = 100000000000;
      const float = 2.5;
      const nullValue = null;
      const undefinedValue = undefined;

      //Act
      const answer_string = isInteger(string);
      const answer_stringNumber = isInteger(stringNumber);
      const answer_stringNumber_2 = isInteger(stringNumber_2);
      const answer_largeNumber = isInteger(largeNumber);
      const answer_float = isInteger(float);
      const answer_nullValue = isInteger(nullValue);
      const answer_undefinedValue = isInteger(undefinedValue);

      console.log({answer_string});
      console.log({answer_stringNumber});
      console.log({answer_stringNumber_2});
      console.log({answer_largeNumber});
      console.log({answer_float});
      console.log({answer_nullValue});
      console.log({answer_undefinedValue});

      // Assert
      expect(answer_string).toBeFalsy;
      expect(answer_stringNumber).toBeFalsy;
      expect(answer_stringNumber_2).toBeFalsy;
      expect(answer_largeNumber).toBeTruthy;
      expect(answer_float).toBeFalsy;
      expect(answer_nullValue).toBeFalsy;
      expect(answer_undefinedValue).toBeFalsy;

  });

  test('should not return a sum', () => { 
      // Arrange Poisoned data
      const taintedArray1 = ["hello", 100000000000]; // Tainted with string and very large number
      const taintedArray2 = [1, 2.5, 3]; // Tainted with a floating-point number
      const taintedArray3 = [1, 2, 3, -4, "five"]; // Tainted with negative number and string
      const taintedTransactions1 = [100, -50, 200]; // Tainted with negative transaction
      const taintedTransactions2 = ["deposit", 100, 200]; // Tainted with string (assuming invalid)

      //Act
      const answer_taintedArray1 = arraySumV2(taintedArray1);
      const answer_taintedArray2 = arraySumV2(taintedArray2);
      const answer_taintedArray3 = arraySumV2(taintedArray3);
      const answer_taintedTransactions1 = arraySumV2(taintedTransactions1);
      const answer_taintedTransactions2 = arraySumV2(taintedTransactions2);

      // console.log({answer_taintedArray1});
      // console.log({answer_taintedArray2});
      // console.log({answer_taintedArray3});
      // console.log({answer_taintedTransactions1});
      // console.log({answer_taintedTransactions2});

      // Assert
      expect(answer_taintedArray1).toBeFalsy;
      expect(answer_taintedArray2).toBeFalsy;
      expect(answer_taintedArray3).toBeFalsy;
      expect(answer_taintedTransactions1).toBe(250);
      expect(answer_taintedTransactions2).toBeFalsy;
  });

  test('should show the sum of the arrays', () => {
      // Arrange  
      const input_onlyPositives = [0, 1, 1, 2, 4, 5, 6, 7];
      const input_onlyNegatives = [-1,-2,-3,-4,-5,-6,-7];
      const mixed_input = [-1,-2,-3,-4,-5,0,1,2,3,4,5];

      //Act
      const answer_input_onlyPositives = arraySumV2(input_onlyPositives);
      const answer_input_onlyNegatives = arraySumV2(input_onlyNegatives);
      const answer_mixed_input = arraySumV2(mixed_input);

      // console.log({answer_input_onlyPositives});
      // console.log({answer_input_onlyNegatives});
      // console.log({answer_mixed_input});

      // Assert
      expect(answer_input_onlyPositives).toBe(26);
      expect(answer_input_onlyNegatives).toBe(-28);
      expect(answer_mixed_input).toBe(0);
  });
});