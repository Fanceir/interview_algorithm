// 给定一个数 n 如 23121;给定一组数字 a 如[2 4 9] 求由 a 中元素组成的小于 n 的最大数
const n = 23121;
const a = [9];
const nStr = n.toString();
const nLen = nStr.length;
const aLen = a.length;
let res = '';
let flag = 0;
function dfs(flag, index, cur, arr) {
    if (index === nLen) {
        res = cur;
        console.log(res);
        return true;
    }
    if (flag) {
        return dfs(true, index + 1, cur * 10 + arr[aLen - 1], arr)
    }
    else {
        let tmp = parseInt(nStr[index]);
        for (let i = aLen - 1; i >= 0; i--) {
            if (arr[i] === tmp) {
                if (dfs(false, index + 1, cur * 10 + arr[i], arr))
                    return true;
            }
            else if (arr[i] < tmp) {
                if (dfs(true, index + 1, cur * 10 + arr[i], arr))
                    return true;
            }
        }
    }
    if (index !== 0) {
        return false;
    } else {
        return dfs(index + 1, true, cur, arr);
    }
}
dfs(flag, 0, 0, a);

