import { createPyramid, createPyramidV2 } from "../src/pyramid";

describe('pyramid', ()=>{
  test('testing the pyramid output', ()=>{

    createPyramid(10);
    createPyramidV2(10);

    
  });
});