var numberOfWays = function (startPos, endPos, k) {
    if (startPos > endPos) return numberOfWays(endPos, startPos, k);
    let target = endPos - startPos;
    let sum = target + k;
    if (sum % 2 === 1) return 0;
    let r = sum / 2;
    let mem = Array.from({ length: k + 1 }, () => Array(r + 1).fill(-1));
    let MOD = 1e9 + 7;
    function dfs(k, r) {
        if (k < r) return 0;
        if (k === r) return 1;
        if (r === 0) return 1;
        if (mem[k][r] !== -1) return mem[k][r];
        mem[k][r] = (dfs(k - 1, r) + dfs(k - 1, r - 1)) % MOD;
        return mem[k][r];
    }
    return dfs(k, r);
};