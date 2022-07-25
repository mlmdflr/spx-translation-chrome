const { execSync } = require("child_process")
const { accessSync, existsSync, unlinkSync, copyFileSync } = require("fs");
const { resolve, join } = require("path");
const { name, version } = require('./package.json')

accessSync(resolve('dist'))
accessSync(resolve('7z/7za.exe'))

let zip = resolve(`out/${name}.v${version}.zip`)
let LICENSE = resolve('LICENSE')

existsSync(zip) && unlinkSync(zip)
existsSync(LICENSE) && copyFileSync(LICENSE, join(resolve('dist'), 'LICENSE'))

try {
    execSync(`${resolve('7z/7za.exe')} a ${zip} ${resolve('dist')}/* -mx=9 `)
    console.log('\x1B[32m[build success] \x1B[0m');
} catch (error) {
    console.error(error);
}