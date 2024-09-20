//lc986
var intervalIntersection = function (firstList, secondList) {
    const ans = [];
    let n = firstList.length;
    let m = secondList.length;
    if (n === 0 || m === 0)
        return []; let up = 0, down = 0
    while (up < n && down < m) {
        const start = Math.max(firstList[up][0], secondList[down][0]);
        const end = Math.min(firstList[up][1], secondList[down][1]);
        if (start <= end) {
            ans.push([start, end]);
        }
        if (firstList[up][1] < secondList[down][1]) {
            up++;
        }
        else {
            down++;
        }
    }
    return ans;
};
//双指针，因为题目说已经排序