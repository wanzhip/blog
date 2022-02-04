import{_ as e,c as n,o as t,a}from"./app.6717a22a.js";const y='{"title":"\u6DF1\u5165\u6D45\u51FA\u4F9D\u8D56\u6CE8\u5165","description":"","frontmatter":{},"headers":[{"level":2,"title":"IoC\u3001DI\u3001AOP \u4E4B\u95F4\u7684\u5173\u7CFB","slug":"ioc\u3001di\u3001aop-\u4E4B\u95F4\u7684\u5173\u7CFB"},{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165\u7684\u4F8B\u5B50","slug":"\u4F9D\u8D56\u6CE8\u5165\u7684\u4F8B\u5B50"},{"level":2,"title":"JS\u7684Decorator","slug":"js\u7684decorator"},{"level":2,"title":"\u7B80\u6613DI\u5B9E\u73B0","slug":"\u7B80\u6613di\u5B9E\u73B0"},{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A","slug":"\u4F9D\u8D56\u6CE8\u5165\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A"},{"level":2,"title":"\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219","slug":"\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"tech/di/about.md","lastUpdated":1643518018923}',o={},r=a(`<h1 id="\u6DF1\u5165\u6D45\u51FA\u4F9D\u8D56\u6CE8\u5165" tabindex="-1">\u6DF1\u5165\u6D45\u51FA\u4F9D\u8D56\u6CE8\u5165 <a class="header-anchor" href="#\u6DF1\u5165\u6D45\u51FA\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a></h1><p>\u8FD1\u51E0\u5E74\u7684\u524D\u7AEF\u6280\u672F\u53D1\u5C55\u5C24\u4E3A\u8FC5\u731B\uFF0C\u8BDE\u751F\u4E86\u8BF8\u591A\u5982 Typescript\u3001Angular \u7B49\u524D\u7AEF\u6280\u672F\uFF0C\u652F\u6491\u4E86 VSCode \u8FD9\u7C7B\u53F2\u8BD7\u7EA7\u9879\u76EE\u7684\u8BDE\u751F\u3002\u5728\u8FD9\u4E9B\u5927\u578B\u5DE5\u7A0B/\u9879\u76EE\u4E2D\uFF0C\u67B6\u6784\u5E08\u4EEC\u4E3A\u4E86\u8BA9\u9879\u76EE\u5728\u5982\u6B64\u5927\u89C4\u6A21\u7684\u534F\u540C\u4E0B\uFF0C\u4F9D\u65E7\u80FD\u591F\u6709\u6548\u63A7\u5236\u590D\u6742\u5EA6\u3002</p><p>\u4ED6\u4EEC\u5728\u8FD9\u4E9B\u5DE5\u7A0B\u4E2D\u6DF1\u5EA6\u5B9E\u8DF5\u4E86\u9762\u5411\u5BF9\u8C61\uFF08OO\uFF09\u7684\u7F16\u7A0B\u8303\u5F0F\uFF0C\u5176\u4E2D \u63A7\u5236\u53CD\u8F6C\uFF08Inversion of Control\uFF0C\u540E\u6587\u7B80\u79F0 IoC\uFF09\u4EE5\u53CA \u4F9D\u8D56\u6CE8\u5165\uFF08Dependency Injection\uFF0C\u540E\u6587\u7B80\u79F0 DI\uFF09\uFF0C\u8FD9\u4E24\u79CD\u6280\u672F\u624B\u6BB5\u88AB\u5927\u91CF\u4F7F\u7528\u3002</p><p>\u672C\u6587\u5E0C\u671B\u901A\u8FC7\u524D\u7AEF\u89C6\u89D2\uFF0C\u4EE5 Typescript \u4F5C\u4E3A\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8C08\u8C08\u5982\u4F55\u4F7F\u7528 IoC \u548C DI \u7B49\u673A\u5236\uFF0C\u8BA9\u5927\u578B\u7684\u524D\u7AEF\u9879\u76EE\u5728\u89E3\u51B3\u4EE3\u7801\u4F9D\u8D56\u3001\u590D\u7528\u548C\u6269\u5C55\u7684\u65F6\u5019\uFF0C\u8F7B\u677E\u81EA\u5982\uFF0C\u6E38\u5203\u6709\u4F59\u3002</p><h2 id="ioc\u3001di\u3001aop-\u4E4B\u95F4\u7684\u5173\u7CFB" tabindex="-1">IoC\u3001DI\u3001AOP \u4E4B\u95F4\u7684\u5173\u7CFB <a class="header-anchor" href="#ioc\u3001di\u3001aop-\u4E4B\u95F4\u7684\u5173\u7CFB" aria-hidden="true">#</a></h2><p>\u63A7\u5236\u53CD\u8F6C\uFF08Inversion of Control\uFF0C\u7F29\u5199\u4E3AIoC\uFF09\uFF0C\u662F\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\u7684\u4E00\u79CD\u8BBE\u8BA1\u539F\u5219\uFF0C\u53EF\u4EE5\u7528\u6765\u51CF\u4F4E\u8BA1\u7B97\u673A\u4EE3\u7801\u4E4B\u95F4\u7684\u8026\u5408\u5EA6;\u5176\u4E2D\u6700\u5E38\u89C1\u7684\u65B9\u5F0F\u53EB\u505A\u4F9D\u8D56\u6CE8\u5165\uFF08Dependency Injection\uFF0C\u7B80\u79F0DI\uFF09\uFF0C\u8FD8\u6709\u4E00\u79CD\u65B9\u5F0F\u53EB\u201C\u4F9D\u8D56\u67E5\u627E\u201D\uFF08Dependency Lookup\uFF09\u3002</p><p>\u5C06\u521B\u5EFA\u5BF9\u8C61\u7684\u4EFB\u52A1\u8F6C\u79FB\u7ED9\u5176\u4ED6 class\uFF0C\u5E76\u76F4\u63A5\u4F7F\u7528\u4F9D\u8D56\u9879\u7684\u8FC7\u7A0B\uFF0C\u88AB\u79F0\u4E3A\u201C\u4F9D\u8D56\u9879\u6CE8\u5165\u201D\u3002\uFF08DI\uFF09 IOC\uFF08Inversion of Control\uFF0C \u63A7\u5236\u53CD\u8F6C\uFF09\u5C31\u662F\u4E00\u4E2A\u53EF\u4EE5\u81EA\u52A8\u5B9E\u4F8B\u5316\u5177\u4F53\u7C7B\u5E76\u4E14\u7BA1\u7406\u5404\u5BF9\u8C61\u4E4B\u95F4\u5173\u7CFB\u7684\u5BB9\u5668\uFF0C\u6709\u4E86\u8FD9\u4E2A\u81EA\u52A8\u5316\u7684\u5BB9\u5668\uFF0C\u6211\u4EEC\u5173\u6CE8\u7684\u5C31\u4E0D\u662F\u5177\u4F53\u7684\u5173\u7CFB\uFF0C\u800C\u662F\u4E0A\u5347\u5230\u53EA\u9700\u5173\u6CE8\u62BD\u8C61\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u800C\u4E14\u8FD8\u53EF\u4EE5\u7701\u53BB\u624B\u52A8\u5B9E\u4F8B\u5316\u3002</p><p>\u5176\u5B9E \u4F9D\u8D56\u6CE8\u5165 \u548C \u63A7\u5236\u53CD\u8F6C \u8BF4\u7684\u662F\u540C\u4E00\u4EF6\u4E8B\u60C5\uFF0C\u53EA\u662F\u7AD9\u7684\u89D2\u5EA6\u4E0D\u540C\u800C\u5DF2\u3002\u901A\u8FC7\u63A7\u5236\u53CD\u8F6C\uFF0C\u5BF9\u8C61\u5728\u88AB\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u7531\u4E00\u4E2A\u8C03\u63A7\u7CFB\u7EDF\u5185\u6240\u6709\u5BF9\u8C61\u7684\u5916\u754C\u5B9E\u4F53\uFF0C\u5C06\u5176\u6240\u4F9D\u8D56\u7684\u5BF9\u8C61\u7684\u5F15\u7528\u4F20\u9012(\u6CE8\u5165)\u7ED9\u5B83\u3002</p><p>\u4F9D\u8D56\u6CE8\u5165\uFF08Dependency Injection\uFF0C\u7B80\u79F0DI\uFF09\u7684\u4E0A\u6E38\u6709\u66F4\u52A0\u62BD\u8C61\u7684IOC\u8BBE\u8BA1\u601D\u60F3\uFF0C\u4E0B\u6E38\u6709\u66F4\u52A0\u5177\u4F53\u7684AOP\u7F16\u7A0B\u601D\u60F3\u548C\u88C5\u9970\u5668\u8BED\u6CD5\uFF0C\u6838\u5FC3\u6982\u5FF5\u7684\u5173\u7CFB\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8d20e254da44381ad8b61cdec1c029a~tplv-k3u1fbpfcp-watermark.image?" alt="1354575-20210206111759962-16656485.png"></p><p>\u9762\u5411\u5BF9\u8C61\u7684\u7F16\u7A0B\u662F\u57FA\u4E8E\u201C\u7C7B\u201D\u548C\u201C\u5B9E\u4F8B\u201D\u6765\u8FD0\u4F5C\u7684\uFF0C\u5F53\u4F60\u5E0C\u671B\u4F7F\u7528\u4E00\u4E2A\u7C7B\u7684\u529F\u80FD\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u5148\u5BF9\u5B83\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF0C\u7136\u540E\u624D\u80FD\u8C03\u7528\u76F8\u5173\u7684\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><p>IOC\u662F\u4E00\u79CD\u5F88\u597D\u7684\u89E3\u8026\u5408\u601D\u60F3\uFF0C\u5728\u5F00\u53D1\u4E2D\uFF0CIoC\u610F\u5473\u7740\u4F60\u8BBE\u8BA1\u597D\u7684\u5BF9\u8C61\u4EA4\u7ED9\u5BB9\u5668\u63A7\u5236\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u4F20\u7EDF\u7684\u65B9\u5F0F\uFF0C\u5728\u5BF9\u8C61\u5185\u90E8\u76F4\u63A5\u63A7\u5236\u3002</p><p>\u63A7\u5236\u53CD\u8F6C\u662F\u4F9D\u8D56\u6CE8\u5165\u7684web\u5E94\u7528\uFF0C\u4E13\u95E8\u4F7F\u7528\u4E00\u4E2A\u5BB9\u5668\u5BF9\u8981\u6CE8\u5165\u7684\u7C7B\u8FDB\u884C\u7BA1\u7406\u3002\u65B9\u4FBF\u4E86\u7528\u6237\u5728\u7C7B\u5916\u91CD\u590D\u521B\u5EFA\u4F9D\u8D56\u7C7B\u3002</p><p>\u5199\u8FC7java web\u7684\u540C\u5B66\u4E00\u5B9A\u4F7F\u7528\u8FC7\u4E00\u4E2A\u6CE8\u89E3@Autowired\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u6CE8\u89E3\u5C31\u53EF\u4EE5\u76F4\u63A5\u751F\u6210\u4E00\u4E2A\u7C7B\u5BF9\u8C61\uFF0C\u800C\u4E0D\u9700\u8981\u663E\u5F0F new\u4E00\u4E2A\u51FA\u6765\u3002\u5F53\u6211\u4EEC\u53EF\u4EE5\u63A7\u5236\u4E00\u4E2A\u5BF9\u8C61\u4F55\u65F6\u751F\u6210\u65F6\u8FD9\u4FBF\u662F\u63A7\u5236\uFF0C\u800C\u901A\u8FC7IOC\u5BB9\u5668\u5C06\u5BF9\u8C61\u7684\u521B\u5EFA\u6743\u593A\u8D70\uFF0C\u8FD9\u4FBF\u662F\u6743\u529B\u53CD\u8F6C\u3002</p><h2 id="\u4F9D\u8D56\u6CE8\u5165\u7684\u4F8B\u5B50" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165\u7684\u4F8B\u5B50 <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165\u7684\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u4F9D\u8D56\u6CE8\u5165\u7684\u6A21\u5757\u6709\uFF1A</p><div class="language-"><pre><code>import { Controller, Get } from &#39;@nestjs/common&#39;;

@Controller(&#39;cats&#39;)
export class CatsController {
  @Get()
  findAll(): string {
    return &#39;This action returns all cats&#39;;
  }
}
</code></pre></div><p>\u6216\u8005\u662F\uFF1A</p><div class="language-"><pre><code>import { Component } from &#39;@angular/core&#39;;

@Component({
  selector: &#39;hello-world&#39;,
  template: \`
    &lt;h2&gt;Hello World&lt;/h2&gt;
    &lt;p&gt;This is my first component!&lt;/p&gt;
    \`,
})
export class HelloWorldComponent {
  // The code in this class drives the component&#39;s behavior.
}

</code></pre></div><h2 id="js\u7684decorator" tabindex="-1">JS\u7684Decorator <a class="header-anchor" href="#js\u7684decorator" aria-hidden="true">#</a></h2><p>javascript \u4F5C\u4E3A\u4E00\u95E8\u9762\u5411\u5BF9\u8C61\u7684\u8BED\u8A00\uFF0C\u672C\u8D28\u4E0A\u662F\u51FD\u6570\u8DDF\u539F\u578B\u7684\u7EC4\u5408\uFF0C\u6211\u4EEC\u901A\u5E38\u6240\u8BF4\u7684 this \u6307\u5411\u7684\u662F\u51FD\u6570\u7684\u8F68\u8FF9\uFF0C\u5176\u9762\u5411\u5BF9\u8C61\u7684\u5C01\u88C5\u3001\u591A\u6001\u8DDF\u7EE7\u627F\uFF0C\u662F\u5728\u539F\u578B\u7684\u57FA\u7840\u4E0A\u5B9E\u73B0\u7684\u3002</p><p>es6 \u4E3A javascript \u8D4B\u4E88\u4E86\u7C7B (class) \u7684\u5C5E\u6027\uFF0C\u867D\u7136\u6211\u4EEC\u77E5\u9053\u8FD9\u53EA\u662F\u51FD\u6570\u7684\u8BED\u6CD5\u7CD6\uFF0C\u4F46\u662F\u5B83\u786E\u5B9E\u5B9E\u73B0\u4E86\u4F20\u7EDF\u610F\u4E49\u4E0A\u7684\u7C7B\uFF0C\u56E0\u6B64\u5176\u8BA9\u7C7B\u7684\u7279\u6027\u5F97\u4EE5\u5E94\u7528\u3002\u7C7B\u80FD\u591F\u5B9E\u73B0\u7684\u4F9D\u8D56\u6CE8\u5165\uFF0C\u4E5F\u5C31\u80FD\u5728\u6211\u4EEC\u4EE3\u7801\u7684\u5B9E\u73B0\u5F97\u4EE5\u5E94\u7528\u3002</p><p>Decorator \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u80CC\u540E\u5176\u5B9E\u5C31\u662F\u5229\u7528 es5 \u7684 Object.defineProperty\uFF0C \u5176\u672C\u8D28\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u7528\u4E8E\u6269\u5C55\u7C7B\u5C5E\u6027\u548C\u7C7B\u65B9\u6CD5\u3002\u5176\u63A5\u6536\u4E09\u4E2A\u53C2\u6570(target, name, descriptor)\uFF0C \u53C2\u6570\u6307\u4EE3\u7684\u542B\u4E49\u4E5F\u8DDF Object.defineProperty \u4E00\u6837\u3002</p><div class="language-"><pre><code>@eat
class Pig {
  constructor() {}
}

function eat(target, key, descriptor) {
  console.log(&#39;\u5403\u996D&#39;);
  console.log(target);
  console.log(key);
  console.log(descriptor);
  target.prototype.eat = &#39;\u5403\u5403\u5403&#39;;
}

const peppa = new Pig();
console.log(peppa.eat);

// \u5403\u996D
// [Function: Pig]
// undefined
// undefined
// \u5403\u5403\u5403
</code></pre></div><p>\u4E0A\u9762\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u88C5\u9970\u5668\u7684\u8FD0\u7528\uFF0C\u6211\u4EEC\u9996\u5148\u58F0\u660E\u4E00\u4E2A\u7C7B Pig\uFF0C\u7136\u540E\u5728\u58F0\u660E\u4E00\u4E2A\u88C5\u9970\u5668\u51FD\u6570 eat\uFF0C \u5728eat\u4E2D\u5C06\u4F20\u5165\u7684\u4E09\u4E2A\u53C2\u6570\u5206\u522B\u6253\u5370\u51FA\u6765\uFF0C\u5E76\u5C06\u7B2C\u4E00\u4E2A\u53C2\u6570 target \u7684\u539F\u578B prototype \u4E0A\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027 eat\uFF0C\u5E76\u8D4B\u503C\u4E3A&#39;\u5403\u5403\u5403&#39;\uFF0C\u7136\u540E\u5C06\u51FD\u6570 eat \u4F5C\u4E3A\u88C5\u9970\u5728 Person \u8FD9\u4E2A\u7C7B\u672C\u8EAB\u4E0A\u3002\u6700\u540E\uFF0C\u6784\u9020\u4E00\u4E2APig\u7684\u5B9E\u4F8Bpeppa\uFF0C\u5E76\u6253\u5370 peppa \u4E0A\u7684eat\u5C5E\u6027\u3002</p><p>\u7136\u540E\u4ECE\u4E0B\u9762\u7684\u8FD0\u884C\u7ED3\u679C\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u4EE3\u7801\u4E2D\u4F1A\u5148\u6253\u5370\u51FA&#39;\u5403\u996D&#39;\uFF0C\u7136\u540E\u662F\u53C2\u6570target\uFF0C\u5176\u6B21\u662F\u53C2\u6570key\uFF0C\u518D\u7136\u540E\u662F\u53C2\u6570descriptor\uFF0C\u6700\u540E\u624D\u662Fpeppa\u7684eat\u5C5E\u6027\u3002\u8FD9\u662F\u56E0\u4E3A\u88C5\u9970\u5668\u5BF9\u7C7B\u7684\u884C\u4E3A\u7684\u6539\u53D8\uFF0C\u662F\u4EE3\u7801\u7F16\u8BD1\u65F6\u53D1\u751F\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u8FD0\u884C\u65F6\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u88C5\u9970\u5668\u80FD\u5728\u7F16\u8BD1\u9636\u6BB5\u8FD0\u884C\u4EE3\u7801\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u88C5\u9970\u5668\u672C\u8D28\u5C31\u662F\u7F16\u8BD1\u65F6\u6267\u884C\u7684\u51FD\u6570\u3002</p><p>\u7EFC\u4E0A\uFF0C Decorator \u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u4F7F\u7528\u7B80\u5355\uFF0C\u6613\u4E8E\u7406\u89E3</li><li>\u5728\u4E0D\u6539\u53D8\u539F\u6709\u4EE3\u7801\u60C5\u51B5\u4E0B\uFF0C\u6269\u5C55\u7C7B\u5C5E\u6027\u548C\u7C7B\u65B9\u6CD5</li><li>\u662F\u4E00\u4E2A\u7F16\u8BD1\u65F6\u6267\u884C\u7684\u51FD\u6570</li></ul><p>Decorator \u53EF\u4EE5\u4F5C\u7528\u5728\u7C7B\u3001\u7C7B\u7684\u5C5E\u6027\u4E0A\uFF0C\u4E0D\u80FD\u76F4\u63A5\u4F5C\u7528\u5728\u51FD\u6570\u4E0A\u3002</p><h2 id="\u7B80\u6613di\u5B9E\u73B0" tabindex="-1">\u7B80\u6613DI\u5B9E\u73B0 <a class="header-anchor" href="#\u7B80\u6613di\u5B9E\u73B0" aria-hidden="true">#</a></h2><ul><li>\u5B9E\u73B0\u4E00\u4E2A IoC \u5BB9\u5668 Injector \uFF0C\u5E76\u5B9E\u4F8B\u5316\u4E00\u4E2A\u6839\u5BB9\u5668 rootInjector\uFF08\u7528\u4E8E\u5B58\u653E\u5404\u4E2A\u4F9D\u8D56\u7684\u5DE5\u5382\u5BB9\u5668\uFF09</li><li>\u5B9E\u73B0\u4E00\u4E2A\u4F9D\u8D56\u6CE8\u5165\u65B9\u6CD5 Injectable(...)\uFF08\u7528\u4E8E\u5C06\u5404\u4E2A\u4F9D\u8D56\u7C7B\u6CE8\u5165\u6839\u5BB9\u5668\uFF09</li><li>\u5B9E\u73B0\u57FA\u4E8E\u6CE8\u89E3\u7684\u5C5E\u6027\u6CE8\u5165\u65B9\u6CD5 Inject(...)\uFF08\u5C06\u7C7B\u9700\u8981\u7528\u5230\u7684\u4F9D\u8D56\u4ECE\u6839\u5BB9\u5668\u53D6\u51FA\u6765\u5E76\u6CE8\u5165\u5230\u7C7B\u4E2D\uFF0C\u82E5\u6839\u5BB9\u5668\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6B64\u4F9D\u8D56\uFF09</li></ul><p>Reflect Metadata \u662F ES7 \u7684\u4E00\u4E2A\u63D0\u6848\uFF0C\u5B83\u4E3B\u8981\u7528\u6765\u5728\u58F0\u660E\u7684\u65F6\u5019\u6DFB\u52A0\u548C\u8BFB\u53D6\u5143\u6570\u636E\uFF0C\u53EF\u4EE5\u88AB\u7528\u4E8E\u7C7B\uFF0C\u7C7B\u6210\u5458\u4EE5\u53CA\u53C2\u6570\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u88C5\u9970\u5668\u6765\u7ED9\u7C7B\u6DFB\u52A0\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u4FE1\u606F\u3002\u7136\u540E\u901A\u8FC7\u53CD\u5C04\u5C06\u8FD9\u4E9B\u4FE1\u606F\u63D0\u53D6\u51FA\u6765\u3002\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u53CD\u5C04\u6765\u6DFB\u52A0\u8FD9\u4E9B\u4FE1\u606F\u3002</p><div class="language-"><pre><code>import &#39;reflect-metadata&#39;;

// \u5DE5\u5382\u91CC\u9762\u7684\u5404\u79CD\u64CD\u4F5C
export class Injector {
  private readonly providerMap: Map&lt;any, any&gt; = new Map();
  private readonly instanceMap: Map&lt;any, any&gt; = new Map();

  public setProvider(key: any, value: any): void {
    if (!this.providerMap.has(key)) {
      this.providerMap.set(key, value);
    }
  }
  
  public getProvider(key: any): any {
    return this.providerMap.get(key);
  }

  public setInstance(key: any, value: any): void {
    if (!this.instanceMap.has(key)) {
    	this.instanceMap.set(key, value);
		}
  }
  
  public getInstance(key: any): any {
    if (this.instanceMap.has(key)) {
      return this.instanceMap.get(key);
    }
    return null;
  }
}

// \u8868\u793A\u6839\u6CE8\u5165\u5668(\u7528\u4E8E\u5B58\u653E\u5404\u4E2A\u4F9D\u8D56\u7684\u6839\u5BB9\u5668)
export const rootInjector = new Injector();

// \u5C06\u7C7B\u6CE8\u5165\u5230\u5DE5\u5382\u4E2D \u7C7B\u88C5\u9970\u5668\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5B83\u4F1A\u4F7F\u7528\u63D0\u4F9B\u7684\u6784\u9020\u51FD\u6570\u6765\u66FF\u6362\u539F\u6765\u7C7B\u7684\u58F0\u660E
export function Injectable(): (_constructor: any) =&gt; any {
  return function (_constructor: any): any {
    rootInjector.setProvider(_constructor, _constructor);
    return _constructor;
  };
}

// \u5C06\u4F9D\u8D56\u6CE8\u5165\u5230\u751F\u4EA7\u8005
export function Inject(): (_constructor: any, propertyName: string) =&gt; any {
  return function (_constructor: any, propertyName: string): any {
    /* 
    ** \u83B7\u53D6\u5C5E\u6027\u5B9A\u4E49\u65F6\u7684\u7C7B\u578B
    ** \u4F7F\u7528 Reflect \u7684\u5143\u6570\u636E Reflect.getMetadata(&#39;design:type&#39;) \u83B7\u53D6\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u5E76\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u53BB 	        
    ** injector.getInstance \u67E5\u8BE2\u5BF9\u5E94\u7684\u5B9E\u4F8B\uFF0C\u5982\u679C\u6709\u5219\u76F4\u63A5\u5C06\u5C5E\u6027\u6620\u5C04\u4E3A\u67E5\u627E\u5230\u7684\u5B9E\u4F8B\u3002\u8FD9\u6837\u5C31\u4FDD\u8BC1\u6211\u4EEC\u6BCF\u6B21\u4F7F\u7528
    ** \u88C5\u9970\u5668\u7684\u5C5E\u6027\u90FD\u4F1A\u83B7\u5F97\u5355\u4F8B\u3002
    */
    const propertyType: any = Reflect.getMetadata(&#39;design:type&#39;, _constructor, propertyName);
    const injector: Injector = rootInjector;
    let providerInsntance = injector.getInstance(propertyType);
    if (!providerInsntance) {
      const providerClass = injector.getProvider(propertyType);
      providerInsntance = new providerClass();
      injector.setInstance(propertyType, providerInsntance);
    }
    _constructor[propertyName] = providerInsntance;
  };
}

@Injectable()
class Cloth {
  name: string = &#39;\u9EBB\u5E03&#39;;
}

@Injectable()
class Clothes {
  // \u4E3A\u7C7B Clothes \u6CE8\u5165\u7C7B Cloth \u4E4B\u540E\u7C7B Clothes \u5C31\u62E5\u6709\u4E86\u4F7F\u7528\u7C7B Cloth \u7684\u80FD\u529B
  @Inject()
  cloth: Cloth;
  clotheName: string;
  constructor() {
    this.cloth = this.cloth;
    this.clotheName = this.clotheName;
  }
  updateName(name: string) {
    this.clotheName = name;
  }
}

class Humanity {
  @Inject() 
  clothes: Clothes;
  name: string;
  constructor(name: string) {
    this.clothes = this.clothes;
    this.name = name;
  }
  update(name: string) {
    this.clothes.updateName(name);
  }
}

// \u5355\u4F8B\uFF1A\u7528\u4E8E\u6570\u636E\u72B6\u6001\u7684\u7EF4\u62A4(\u4E00\u4E2A\u53D8 \u6240\u6709\u53D8)
const people = new Humanity(&#39;syz&#39;);
console.log(people);
// Humanity {
//   clothes: Clothes { cloth: Cloth { name: &#39;\u9EBB\u5E03&#39; }, clotheName: undefined }
// }

people.update(&#39;\u8010\u514B&#39;);
console.log(people);
// Humanity {
//   clothes: Clothes { cloth: Cloth { name: &#39;\u9EBB\u5E03&#39; }, clotheName: &#39;\u8010\u514B&#39; }
// }
</code></pre></div><h2 id="\u4F9D\u8D56\u6CE8\u5165\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1A" aria-hidden="true">#</a></h2><ul><li>\u57FA\u4E8E\u63A5\u53E3\u3002\u5B9E\u73B0\u7279\u5B9A\u63A5\u53E3\u4EE5\u4F9B\u5916\u90E8\u5BB9\u5668\u6CE8\u5165\u6240\u4F9D\u8D56\u7C7B\u578B\u7684\u5BF9\u8C61\u3002</li><li>\u57FA\u4E8E set \u65B9\u6CD5\u3002\u5B9E\u73B0\u7279\u5B9A\u5C5E\u6027\u7684public set\u65B9\u6CD5\uFF0C\u6765\u8BA9\u5916\u90E8\u5BB9\u5668\u8C03\u7528\u4F20\u5165\u6240\u4F9D\u8D56\u7C7B\u578B\u7684\u5BF9\u8C61\u3002</li><li>\u57FA\u4E8E\u6784\u9020\u51FD\u6570\u3002\u5B9E\u73B0\u7279\u5B9A\u53C2\u6570\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5728\u65B0\u5EFA\u5BF9\u8C61\u65F6\u4F20\u5165\u6240\u4F9D\u8D56\u7C7B\u578B\u7684\u5BF9\u8C61\u3002</li><li>\u57FA\u4E8E\u6CE8\u89E3\u3002\u57FA\u4E8EJava\u7684\u6CE8\u89E3\u529F\u80FD\uFF0C\u5728\u79C1\u6709\u53D8\u91CF\u524D\u52A0\u201C@Autowired\u201D\u7B49\u6CE8\u89E3\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u7684\u5B9A\u4E49\u4EE5\u4E0A\u4E09\u79CD\u4EE3\u7801\uFF0C\u4FBF\u53EF\u4EE5\u8BA9\u5916\u90E8\u5BB9\u5668\u4F20\u5165\u5BF9\u5E94\u7684\u5BF9\u8C61\u3002</li></ul><p>\u4F7F\u7528\u6784\u9020\u5668\u6CE8\u5165\u7684\u597D\u5904\uFF1A</p><ul><li>\u4FDD\u8BC1\u4F9D\u8D56\u4E0D\u53EF\u53D8\uFF08final\u5173\u952E\u5B57\uFF09</li><li>\u4FDD\u8BC1\u4F9D\u8D56\u4E0D\u4E3A\u7A7A\uFF08\u7701\u53BB\u4E86\u6211\u4EEC\u5BF9\u5176\u68C0\u67E5\uFF09</li><li>\u4FDD\u8BC1\u8FD4\u56DE\u5BA2\u6237\u7AEF\uFF08\u8C03\u7528\uFF09\u7684\u4EE3\u7801\u7684\u65F6\u5019\u662F\u5B8C\u5168\u521D\u59CB\u5316\u7684\u72B6\u6001</li><li>\u907F\u514D\u4E86\u5FAA\u73AF\u4F9D\u8D56</li><li>\u907F\u514D\u4E86\u548C\u5BB9\u5668\u7684\u9AD8\u5EA6\u8026\u5408\uFF0C\u63D0\u5347\u4E86\u4EE3\u7801\u7684\u53EF\u590D\u7528\u6027</li></ul><p>\u6784\u9020\u5668\u6CE8\u5165\u9002\u7528\u4E8E\u5F3A\u5236\u5BF9\u8C61\u6CE8\u5165\uFF1BSetter \u6CE8\u5165\u9002\u5408\u4E8E\u53EF\u9009\u5BF9\u8C61\u6CE8\u5165\uFF1B\u5E76\u4E14\u6784\u9020\u5668\u6CE8\u5165\u5728\u6784\u9020\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4FDD\u8BC1\u7EBF\u7A0B\u7684\u5B89\u5168</p><h2 id="\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219" tabindex="-1">\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219 <a class="header-anchor" href="#\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219" aria-hidden="true">#</a></h2><p>\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219\u7684\u82F1\u6587\u7FFB\u8BD1\u662F Dependency Inversion Principle\uFF0C\u7F29\u5199\u4E3A DIP\u3002\u4E2D\u6587\u7FFB\u8BD1\u6709\u65F6\u5019\u4E5F\u53EB\u4F9D\u8D56\u5012\u7F6E\u539F\u5219\u3002</p><p>\u4E3B\u8981\u7684\u6982\u5FF5\u662F\uFF1A\u9AD8\u5C42\u6A21\u5757\uFF08high-level modules\uFF09\u4E0D\u8981\u4F9D\u8D56\u4F4E\u5C42\u6A21\u5757\uFF08low-level\uFF09\u3002\u9AD8\u5C42\u6A21\u5757\u548C\u4F4E\u5C42\u6A21\u5757\u5E94\u8BE5\u901A\u8FC7\u62BD\u8C61\uFF08abstractions\uFF09\u6765\u4E92\u76F8\u4F9D\u8D56\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u62BD\u8C61\uFF08abstractions\uFF09\u4E0D\u8981\u4F9D\u8D56\u5177\u4F53\u5B9E\u73B0\u7EC6\u8282\uFF08details\uFF09\uFF0C\u5177\u4F53\u5B9E\u73B0\u7EC6\u8282 \uFF08details\uFF09\u4F9D\u8D56\u62BD\u8C61\uFF08abstractions\uFF09\u3002</p><p>\u6240\u8C13\u9AD8\u5C42\u6A21\u5757\u548C\u4F4E\u5C42\u6A21\u5757\u7684\u5212\u5206\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\uFF0C\u5728\u8C03\u7528\u94FE\u4E0A\uFF0C\u8C03\u7528\u8005\u5C5E\u4E8E\u9AD8\u5C42\uFF0C\u88AB\u8C03\u7528\u8005\u5C5E\u4E8E\u4F4E\u5C42\u3002\u5728\u5E73\u65F6\u7684\u4E1A\u52A1\u4EE3\u7801\u5F00\u53D1\u4E2D\uFF0C\u9AD8\u5C42\u6A21\u5757\u4F9D\u8D56\u5E95\u5C42\u6A21\u5757\u662F\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u7684\u3002\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u6761\u539F\u5219\u4E3B\u8981\u8FD8\u662F\u7528\u6765\u6307\u5BFC\u6846\u67B6\u5C42\u9762\u7684\u8BBE\u8BA1\u3002</p><p>Tomcat \u662F\u8FD0\u884C Java Web \u5E94\u7528\u7A0B\u5E8F\u7684\u5BB9\u5668\u3002\u6211\u4EEC\u7F16\u5199\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u53EA\u9700\u8981\u90E8\u7F72\u5728Tomcat \u5BB9\u5668\u4E0B\uFF0C\u4FBF\u53EF\u4EE5\u88AB Tomcat \u5BB9\u5668\u8C03\u7528\u6267\u884C\u3002\u6309\u7167\u4E4B\u524D\u7684\u5212\u5206\u539F\u5219\uFF0CTomcat \u5C31\u662F\u9AD8\u5C42\u6A21\u5757\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u5C31\u662F\u4F4E\u5C42\u6A21\u5757\u3002</p><p>Tomcat \u548C\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E4B\u95F4\u5E76\u6CA1\u6709\u76F4\u63A5\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E24\u8005\u90FD\u4F9D\u8D56\u540C\u4E00\u4E2A\u201C\u62BD\u8C61\u201D\uFF0C\u4E5F\u5C31\u662F Sevlet \u89C4\u8303\u3002Servlet \u89C4\u8303\u4E0D\u4F9D\u8D56\u5177\u4F53\u7684 Tomcat \u5BB9\u5668\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u5B9E\u73B0\u7EC6\u8282\uFF0C\u800C Tomcat \u5BB9\u5668\u548C\u5E94\u7528\u7A0B\u5E8F\u4F9D\u8D56 Servlet\u89C4\u8303\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4F9D\u8D56\u6CE8\u5165\u5C31\u662F\u901A\u8FC7DI\u6846\u67B6\uFF08\u5916\u90E8\u6E90\uFF09\u5C06\u7A0B\u5E8F\u4E2D\u670D\u52A1\u7C7B\u6240\u9700\u7684\u4F9D\u8D56\u9879\u8FDB\u884C\u63D0\u53D6\u5E76\u5B9E\u4F8B\u5316\uFF0C\u6700\u540E\u81EA\u52A8\u6CE8\u5165\u5230\u6307\u5B9A\u670D\u52A1\u7C7B\u4E2D\u7684\u4E00\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u3002\u5176\u65E0\u9700\u6211\u4EEC\u5728\u670D\u52A1\u7C7B\u4E2D\u518D\u624B\u52A8\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u89C4\u907F\u4E86\u7C7B\u4E0E\u7C7B\u4E4B\u95F4\u7684\u9AD8\u5EA6\u8026\u5408\u7684\u60C5\u51B5\u3002</p>`,46),i=[r];function c(l,p,s,d,h,u){return t(),n("div",null,i)}var m=e(o,[["render",c]]);export{y as __pageData,m as default};