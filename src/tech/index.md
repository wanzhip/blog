# 前言
这不放假了，趁着有时间，准备搞个脚手架玩玩，由于node社区已经很完善了，就只需要踩到巨人的肩上“搭积木”，我们从三个部分着手，工具--工欲善其事必先利其器；实践--实践是检验真理的唯一标准；Coding--唯手熟尔，哈哈，拉下来玩玩。相信我从0开始，看完你上你也行。

# 效果
先上图：

![图1](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8b4a796ee9d440a99531689b8c6ee2d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)
[图1]

![图2](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/306d7c78434a4ad0adf293cf6d2c4e50~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)
[图2]
![图3](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53a19da05c984bc4b3c1b5dd13eb95cd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)
[图3]
看起来是不是很熟悉？没错，就是vue-cli的仿品。来来来，一步步来，一学就会。

# 工具篇
学习讲究一个过程，既然是工具，那我们首先就要知道这个工具是什么，能做什么，以及怎么用。接下来我们就围绕是什么，能做什么，以及怎么用来介绍四个工具----inquirer、commander、chalk、shelljs。当然工具有很多，选自己熟悉的就好，如果不熟悉，不妨学习学习。直接看代码跳到实践部分。

## inquirer
如果你看过vue-cli代码，会发现它也在用这个库。那么inquirer是什么呢？inquirer是一个控制台交互式js库。能做什么呢？如上截图，能用来和用户更友好的交互。怎么用呢？来一块看看。

```
安装
npm install inquirer
```

```
使用
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```
```
inquirer.prompt(questions: [Question]):Promise
```
```
interface Ichoices {
    name: string,
    value: string | number | boolean,
    short?: string
}
```
```
interface Question {
    // 交互类型
    type: 'input' | 'number' | 'confirm' | 'list' | 'rawlist' | 'expand' | 'checkbox' | 'password' | 'editor';
    
    // 当前输入的名字，可用来获取输入数据
    name: string;
    
    // 提示信息
    message: string | Function;
    
    // 给与的默认值
    default: string | number | boolean | [any] | Function;
    
    // 提示给用户选择的数据
    choices: number | string | Ichoices | Function;
    
    // 对用户输入数据做验证
    validate: Function;
    
    // 自定义处理用户输入数据
    filter: Function;
    
    // 对用户输入数据做自定义显示转换，不影响最终数据
    transformer: Function;
    
    // 当什么的时候触发，返回true或false
    when: Function | boolean;
    
    // 对type值是checkbox、list、rawList、expand展示给用户看到的行数
    pageSize: number;
    
    // 更改默认的前缀显示默认是?
    prefix: string;
    
    // 更改默认的后缀显示 默认是空字符串
    suffix: string;
    
    // 如果答案已经存在，则强制提出问题
    askAnswered: boolean;
    
    // 列表选择时是否循环操作默认true
    loop: boolean;
}
```
prompt接收一个question数组，数组的每一项如上面的类型定义。举个例子，看看图1对应的代码：
![图4](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9176b7dc0fd417394380c83aebbb4fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)
[图4]
type是confirm，需要用户输入y/N，默认值是true。后续的执行根据前面的不同结果再进行执行。

# commander
commander是什么？它是一个完整的nodejs命令行解决方案。能做什么呢？执行自定义命令，比如本文使用的mcli create `<filename>` 创建一个工程。下面再看看怎么用：
```
安装
npm install commander
```
```
使用
const { program } = require('commander');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small [type]', 'small pizza size', 'large')
  .option('-p, --pizza-type <type>', 'flavour of pizza', 'pizza');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);

console.log('pizza details:');

if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
```
上面定义了三个选项，现在命令行执行
node -r ts-node/register src/index.ts
![图5](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3e7f53e61624206a0f9c95858bf35f1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)
[图5]
node -r ts-node/register src/index.ts -d
![图6](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8730df276430465ebbd9750b1e91b95b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)
[图6]
看完结果，我们再说上面是什么意思：执行第一个命令时，由于-s和-p选项都有相应的默认值，所以会输出默认值。[type]和`<type>`分别表示可选和必传。如果执行-p选项，必须传递type值，否则就会报错。执行-s不传递就使用默认值。执行完响应的选项，相应的属性也会改变，不需要传值的属性就是boolean类型，需要传值的就是传递的数据。然后再根据用户执行的选项程序再做下一步处理。
再介绍一个command命令：
.command()可以执行一个命令，比如
.command('create `<name>`')看到create是不是又感觉到了熟悉，没错就是生成项目时那个create，后面的`<name>`表示执行命令必须传递name，即我们的工程。

# chalk
chalk是什么？相信大家都已经用过了。但是不免有没用过的，我们这里也简单介绍一下。它是一个着色库，对展现在用户面前的数据进行着色处理。使用如下：
注:5版本是esm，如果在ts中或者构建工具中使用，目前建议使用4版本
```
安装
yarn add chalk@4.1.2
```
```
使用
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
```
api之类的官网描述的很详细了，一看就会，有种写css的感觉呦。
# shelljs
shell，不言而喻，shelljs是基于 Node.js API 的 Unix shell 命令的可移植 （Windows/Linux/macOS） 实现。这使得我们可以很方便的执行shell脚本。
怎么用呢？

```
安装
npm install shelljs
```
```
使用
var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');

// Replace macros in each .js file
shell.cd('lib');
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}
```
有了shelljs的加持，脚本执行的问题就解决了。至此，一个cli需要用到的工具我们都了解了，一个想象中的cli的骨架也就成型了。
# 实践
代码整个贴出来篇幅有些长了，具体...还是贴一下
```
#!/usr/bin/env node
const inquirer = require('inquirer');
const chalk = require('chalk');
const program = require('commander');
const readline = require('readline');
const shell = require('shelljs');


// type choices = number | string | {name: string, value: string | number | boolean, short?: string} | Function;

// 即用户新输入的参数值和当前已有的参数值
const optionFunc = (newVal, preValue) => {
    console.log(newVal, preValue);
}

program
    .configureOutput({
        // 此处使输出变得容易区分
        writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
        writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
        // 将错误高亮显示
        outputError: (str, write) => write(chalk.hex('#f40')(str))
    })
    .command('create <name>')
    .description('创建应用')
    .option('-f,--force <path>', '是否强制创建', optionFunc)
    .action((name, options, command) => {
        console.log(name, 'xx')
        if (!name) {
            console.log(chalk.hex('#f40')('请输入项目名'))
            return;
        } else {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'update',
                    message: `Your connection to the default yarn registry seems to be slow.\n Use https://registry.npm.taobao.org for faster installation?`,
                    default: true,
                },
                {
                    when: (answer) => {
                        if (!answer.update) {
                            console.log(chalk.hex('#f40')('开始更新...'));
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'preset',
                    message: 'Please pick a preset:',
                    choices: [
                        {
                            name: 'Default ([Vue 2] babel, eslint)',
                            value: '1',
                        },
                        {
                            name: 'Default (Vue 3) ([Vue 3] babel, eslint)',
                            value: '2',
                        },
                        {
                            name: 'Manually select features',
                            value: '3',
                        },
                    ],
                    when: (answer) => {
                        if (answer.update) {
                        console.log(chalk.red(`\n\nVue CLI v4.5.13`));
                        console.log(`
┌───────────────────────────────────────────┐
│                                           │
│   New version available ${chalk.hex('#f40')('4.5.13')} → ${chalk.hex('#f40')('4.5.15')}   │
│     Run ${chalk.hex('#f40')('npm i -g @vue/cli')} to update!      │
│                                           │
└───────────────────────────────────────────┘
                        `);
                        }
                        return answer.update;
                    }
                },
                {
                    type: 'list',
                    name: 'type',
                    message: 'Pick the package manager to use when installing dependencies:',
                    choices: [
                        {
                            name: 'Use Yarn',
                            value: 'yarn',
                        },
                        {
                            name: 'Use NPM',
                            value: 'npm',
                        },
                    ],
                    when: (answer) => {
                        return answer.update
                    }
                },
                {
                    when: (answer) => {
                        if (answer.type) {
                            console.log(chalk.hex('#f40')('Vue CLI v4.5.13'));
                            console.log(chalk.hex('#f40')('✨  Creating project in /Users/zhiepngwan/Desktop/demo/1111.'));
                            console.log(chalk.hex('#f40')('🗃  Initializing git repository...'));
                            console.log(chalk.hex('#f40')('⚙️  Installing CLI plugins. This might take a while...'));
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'join',
                    message: '加入我',
                    default: true,
                    when: (answer) => {
                        return answer.update
                    }
                },
                {
                    when: (answer) => {
                        if (!answer.join) {
                            const outStream = process.stdout;
                
                            // 创建interface
                            const rl = readline.createInterface({
                                input: process.stdin,
                                output: outStream
                            });
            
                            const textArr = ['2021', '辞旧', '2022', '迎新', '新的一年', '加油写作', 'Fight', 'Together！'];
            
                            // 随机坐标
                            const randomPos = () => {
                                const x = Math.floor(30 * Math.random());
                                const y = Math.floor(10 * Math.random());
                                return [x, y];
                            }
                            // chalk 上色
                            const randomTextStyle = (text) => {
                                const styles = ['redBright', 'yellowBright', 'blueBright', 'cyanBright', 'greenBright', 'magentaBright', 'whiteBright'];
                                const color = styles[Math.floor(Math.random() * styles.length)];
                                return chalk[color](text);
                            }
                            // 延时
                            const delay = (time) => {
                                return new Promise((resolve) => setTimeout(resolve, time));
                            }
                            setTimeout( async () => {
                                for(let i = 0; i < textArr.length; i++) {
                                    readline.cursorTo(outStream, ...randomPos());
                                    rl.write(randomTextStyle(textArr[i])); // 展示到控制台
            
                                    await delay(1000);
                                    readline.cursorTo(outStream, 0, 0);
                                    readline.clearScreenDown(outStream);
                                }
                            }, 1000);
                        }
                    }
                }
            ])
            .then((answer) => {
                if (!answer.join) {
                    readline.cursorTo(process.stdout, 0, 0); // 移动光标 你就理解成改变控制台位置到 0，0
                    readline.clearScreenDown(process.stdout); // 清屏操作 就像使用vue-cli看到的一样
                    return;
                }
                console.log(answer);
                console.log('etx... 接着再执行一系列命令');

                // 执行命令
                // if (shell.exec('yarn add jQuery').code !== 0) {
                //     shell.echo('Error: install failed');
                //     shell.exit(1);
                // }
                // if (shell.exec('git clone https://github.com/wanzhip/mcli.git').code !== 0) {
                //     shell.echo('Error: install failed');
                //     shell.exit(1);
                // }
            });
        };
    });

program.parse(process.argv);
```
# Coding
唯手熟尔，敲一下加深记忆。完整的代码后续发到github。最后祝大家新年快乐！！！新年新气象！财源滚滚！步步高升！

