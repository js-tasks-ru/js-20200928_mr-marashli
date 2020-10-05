/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'asc') {
    return [...arr].sort(ascSort);
  }
  else if (param === 'desc') {
    return [...arr].sort(ascSort).reverse();
  }

}

function ascSort(a, b) {
  const compareResult = a.localeCompare(b, 'default', {caseFirst: "upper"});
  if (compareResult === 1) {
    return 1;
  }
  if (compareResult === -1) {
    return -1;
  } 
  if (compareResult === 0) {
    return 0;
  }
}