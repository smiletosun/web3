export function resolveSol() {
  // const files =
  // 获取contracts文件下所有的sol文件
  const files = require.context("../contracts", true, /\.sol$/);
  // 遍历所有文件
  return files.keys().map((key) => {
    // 获取文件名
    return key.replace("./", "");
  });
}
