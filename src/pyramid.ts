

export const createPyramid = (floors) => {
  
  let pyramid = `Pyramid with ${floors} floor stars\n\n`;
  
  for (let i = 1; i <= floors; i++) {
    // console.log(i);
    
    let actualFloor = nStarsFloor(i);
    pyramid += `${actualFloor}\n`;
  }

  console.log(pyramid);

}

const nStarsFloor = (n:number) => {
  let base = '';

  for (let index = 0; index < n; index++) {
    base = base + '*';
  }

  return base;
}

export const createPyramidV2 = (floors) => {

  let pyramid = `Pyramid with ${floors} floor stars\n\n`;
  
  for (let i = 1; i <= floors; i++) {
    let additional = i-1;  
    let actualFloor = nStarsFloorV2(additional+i, additional, floors);
    
    // let floorSpaces = addFloorSpaces(n);
    pyramid += `${actualFloor}\n`;
  }

  console.log(pyramid);
  
}

const nStarsFloorV2 = (n:number, additional:number, total:number) => {
  let base = '';

  let spaces = total - (additional+1);

  // add indent spaces
  for (let index = 0; index < spaces; index++) {
    base += ' ';
  }

  // add stars
  for (let index = 0; index < n; index++) {
    base += '*';
  }

  // return `${base} spaces=${spaces} floor=${additional+1} total=${total}`;
  return `${base}`;
}

const nStarsFloorV3 = (n:number, additional:number, total:number) => {
  let base = '';

  let spaces = total - (additional+1);

  // add indent spaces
  for (let index = 0; index < spaces; index++) {
    base += ' ';
  }

  // add stars
  for (let index = 0; index < n; index++) {
    base += '*';
  }

  // return `${base} spaces=${spaces} floor=${additional+1} total=${total}`;
  return `${base}`;
}