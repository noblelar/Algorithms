export default function bubble_sort(arr: number[]): void {
    // ! My personal Version of the Sorting algorithm
    let itemsNum = arr.length;
    let i = itemsNum;

    while (i > 1) {
        arr.forEach((item, it) => {
            const nextitem = arr[it + 1];
            // const currentItem = item;

            if (item > nextitem) {
                arr[it + 1] = item;
                arr[it] = nextitem;
            }
        });
        i--;
    }

   //  ! Sample from ...
   //  for (let i = 0; i < arr.length; ++i) {
   //      for (let j = 0; j < arr.length - 1 - i; ++j) {
   //          if (arr[j] > arr[j + 1]) {
   //              const tmp = arr[j];
   //              arr[j] = arr[j + 1];
   //              arr[j + 1] = tmp;
   //          }
   //      }
   //  }
}
