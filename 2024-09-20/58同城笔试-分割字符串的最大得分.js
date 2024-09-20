var maxScore = function (s) {
    let n = s.length;
    const pre = new Array(n + 1).fill(0);
    const suf = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + (s[i - 1] === '0' ? 1 : 0);
    }
    for (let i = n - 1; i >= 0; i--) {
        suf[i] = suf[i + 1] + (s[i] === '1' ? 1 : 0);
    }
    let ans = 0;
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, pre[i] + suf[i]);
    }
    return ans;
};