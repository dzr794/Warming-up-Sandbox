

export const reverseStringV1 = (originalString: string) => originalString.split('').reverse().join('');

export const reverseStringV2 = (originalString: string) => {
  let reversed = '';
  for (let index = 0; index < originalString.length; index++) {
    reversed = originalString[index] + reversed;
  }
  return reversed;
};

export const isPalindrome = (originalString: string, caseSensitive:boolean = false) => {
  const reversed = reverseStringV1(originalString);
  if (caseSensitive) {
    return reversed === originalString;
  }else{
    return reversed.toLowerCase() === originalString.toLowerCase();
  }
}

// How to find the maximum character in a string and how many times it appear
export const charsAppearCount = ( inputString:string, caseSensitive:boolean = false) => {
  let charsCounter = {};

  for (let i = 0; i < inputString.length; i++) {
    const actualChar = caseSensitive ? inputString[i]: inputString[i].toLowerCase();
    charsCounter[actualChar] = !charsCounter[actualChar] ? 1 : charsCounter[actualChar]+1 ;
  }

  let maxNum = 0;
  let popularChars = [];
  
  for (const char in charsCounter) {
    if (charsCounter[char] >= maxNum ) {
      maxNum = charsCounter[char];
    }
  }

  for (const char in charsCounter) {
    if (charsCounter[char] === maxNum ) {
      popularChars.push(char);
    }
  }

  const moreThanOneTimes = maxNum > 1;
  const moreThanOneChars = popularChars.length > 1;
  
  const output = `Input string: "${inputString}"${caseSensitive?' (using CaseSensitive)':' (with lowercase)'}
The maximum ${moreThanOneChars?'characters are':'character is'} [${popularChars.join(', ')}] 
and appear ${maxNum} ${moreThanOneTimes?'times':'time'}${moreThanOneChars?' each':''}.`;
  
  
}



export const fizzbuzz = ( finalNumber ) => {
  let finalOutput = '';

  for (let index = 1; index <= finalNumber; index++) {
    
    let iterationOutput = '';

    if (index%3 === 0 || index%5 === 0) {
      if (index%3 === 0) {
        iterationOutput += 'Fizz';
      }
  
      if (index%5 === 0) {
        iterationOutput += 'Buzz';
      }
    }else{
      iterationOutput = index;
    }

    finalOutput += `${iterationOutput}\n`;
    
  }
  console.log(finalOutput);
  
}

export const chunkedArray = (inputArray:any[] ,chunkSize:number) => {
  let count = 0;
  let finalArray = [];

  if (chunkSize > inputArray.length) return false;
  if (chunkSize == inputArray.length) return inputArray;


  for (let i = 0; i < inputArray.length; i += chunkSize) {
    const chunk = inputArray.slice(i, i + chunkSize);
    finalArray.push(chunk);
  }

  return(finalArray);
  
}










const maxHeapify = (arr, heapSize, i) => {

  const l = 2 * i;
  const r = 2 * i + 1;
  let largest = i;

  if (l < heapSize && arr[l] > arr[i]) {
    largest = l;
  }

  if (r < heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    // Swap elements
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, heapSize, largest);
  }
}

const buildMaxHeap = (arr) => {
  const heapSize = arr.length;

  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) { // adjust for 0-based indexing
    maxHeapify(arr, heapSize, i);
  }
}

export const heapSort = (arr) => {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    // Swap elements
    [arr[i], arr[0]] = [arr[0], arr[i]];

    // Fix max-heap property with reduced heap size
    maxHeapify(arr, i, 0); // use 0 for root in JS arrays
  }
}
