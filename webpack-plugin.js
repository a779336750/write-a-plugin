/**
 * 自定义插件，生成一个记录输出文件列表的txt文件
 */
class recordFilesPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('recordFilesPlugin', (compilaton, cb) => {
            let content = '生成的文件列表：\n';
            Object.keys(compilaton.assets).forEach(fileName => {
                content += `${fileName}\n`;
            });
            compilaton.assets['fileList.txt'] = {
                source() {
                    return content;
                },
                size() {
                    return content.length;
                },
            };
            cb();
        });
    }
}