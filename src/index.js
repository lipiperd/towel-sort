
// You should implement your task here.

/*a= matrix[2].reverse();
console.log(a)*/

/*
let item = matrix[i] - i-тый массив матрицы (строка);
item [j] - j-тый элемент i-того массива матрицы;
let l = item.length - l = длине массива item;
sorted=[] - принимающий массив;

*/


/* for (s = 0; s <= 2; s++) {
   for (c = 0; c <= 2; c++) {
     sorted.push(matrix[s][c]);
   }
   s++;
   sorted.push(matrix[s][c]);
   return sorted.reverse();
 }
 return (sorted);

}*/



module.exports = function towelSort(matrix) {
  let i = 0;
  let j = 0;


  let s = matrix.length;/* - s = длина массива matrix;*/

  let sorted = [];/*  - принимающий массив;*/


    for (i = 0; i < s; i++) {
      let item = matrix[i];/* item [j];  - j-тый элемент i-того массива матрицы;*/
      if (i % 2 != 0) {
        item = matrix[i].reverse();
      }
      let l = item.length;/* - l = длина массива item;*/
      /*console.log('item=', item, 'matrix[i]=', matrix[i], 'i=', i, 's=', s);*/

      for (j = 0; j < l; j++) {
        sorted.push(item[j]);

        /* console.log('sorted=', sorted, 'item=', item, 'matrix[i]=', matrix[i], 'j=', j, 'l=', l);*/
      }


    }

  return sorted;
}
/*const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7],
  [8, 9],
  [10, 11, 12, 13, 14],
  [15],
  [16, 17],
  [18, 19, 20]
]

console.log(towelSort(matrix))*/
