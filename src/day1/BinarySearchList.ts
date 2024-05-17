


export default function bs_list(haystack: number[], needle: number): boolean {
    let min = 0;
    let max = haystack.length;

    do {
        let mid = Math.floor(min + (max - min) / 2);
        const v = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            max = mid;
        }else{
         min = mid + 1;
        }
    } while (min < max);
    return false;
}
