import glob from "glob";

export function resolveSol() {
  // const files =
  // 获取contracts文件下所有的sol文件
  const files = glob.sync("../contracts/**/*.sol");
  // 遍历所有文件
  return files.keys().map((key: any) => {
    // 获取文件名
    return key.replace("./", "");
  });
}
