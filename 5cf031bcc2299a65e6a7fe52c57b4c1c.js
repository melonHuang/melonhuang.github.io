// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({12:[function(require,module,exports) {
!function(){"use strict";var e,n={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};n.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},e=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):e.doT=n;var t={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},r=/$^/;function o(e,n,t){return("string"==typeof n?n:n.toString()).replace(e.define||r,function(n,r,o,a){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in t||(":"===o?(e.defineParams&&a.replace(e.defineParams,function(e,n,o){t[r]={arg:n,text:o}}),r in t||(t[r]=a)):new Function("def","def['"+r+"']="+a)(t)),""}).replace(e.use||r,function(n,r){e.useParams&&(r=r.replace(e.useParams,function(e,n,r,o){if(t[r]&&t[r].arg&&o){var a=(r+":"+o).replace(/'|\\/g,"_");return t.__exp=t.__exp||{},t.__exp[a]=t[r].text.replace(new RegExp("(^|[^\\w$])"+t[r].arg+"([^\\w$])","g"),"$1"+o+"$2"),n+"def.__exp['"+a+"']"}}));var a=new Function("def","return "+r)(t);return a?o(e,a,t):a})}function a(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}n.template=function(i,c,u){var d,s,p=(c=c||n.templateSettings).append?t.append:t.split,l=0,f=c.use||c.define?o(c,i,u||{}):i;f=("var out='"+(c.strip?f.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):f).replace(/'|\\/g,"\\$&").replace(c.interpolate||r,function(e,n){return p.start+a(n)+p.end}).replace(c.encode||r,function(e,n){return d=!0,p.startencode+a(n)+p.end}).replace(c.conditional||r,function(e,n,t){return n?t?"';}else if("+a(t)+"){out+='":"';}else{out+='":t?"';if("+a(t)+"){out+='":"';}out+='"}).replace(c.iterate||r,function(e,n,t,r){return n?(l+=1,s=r||"i"+l,n=a(n),"';var arr"+l+"="+n+";if(arr"+l+"){var "+t+","+s+"=-1,l"+l+"=arr"+l+".length-1;while("+s+"<l"+l+"){"+t+"=arr"+l+"["+s+"+=1];out+='"):"';} } out+='"}).replace(c.evaluate||r,function(e,n){return"';"+a(n)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),d&&(c.selfcontained||!e||e._encodeHTML||(e._encodeHTML=n.encodeHTMLSource(c.doNotSkipEncoded)),f="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+n.encodeHTMLSource.toString()+"("+(c.doNotSkipEncoded||"")+"));"+f);try{return new Function(c.varname,f)}catch(e){throw e}},n.compile=function(e,t){return n.template(e,null,t)}}();
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={speakings:[{name:"High Performance Animation",time:"2014-07-26",link:"https://melonhuang.github.io/sharing/slides.html?file=high_performance_animation#/"},{name:"Web Component",time:"2014-04-21",link:"https://melonhuang.github.io/sharing/slides.html?file=web_component"},{name:"构造可重用的组件",time:"2014-11-07",link:"https://melonhuang.github.io/sharing/slides.html?file=reusable_component#/"},{name:"移动端基础<br>从 PC 到 Mobile",time:"2015-06-03",link:"https://melonhuang.github.io/sharing/slides.html?file=beginner-guide-of-mobile-website"},{name:"浏览器关键渲染路径",time:"2017-03-05",link:"https://ppt.baomitu.com/d/258e0812#/"},{name:"度量 Web 性能",time:"2017-04-13",link:"https://ppt.baomitu.com/d/a6d23476#/"},{name:"360国际官网<br>案例学习",time:"2013-08-12",link:"https://melonhuang.github.io/sharing/slides.html?file=casestudy-of-360international"}],projects:[{name:"Nova.js",desc:"A light weight Web Component library",link:"https://melonhuang.github.io/nova/"},{name:"NovaUI",desc:"A high performance Mobile-side component gallery",link:"https://75team.github.io/novaUI/"},{name:"Animation Generator",desc:"A Chrome Devtool to help generate animation code",link:"https://chrome.google.com/webstore/detail/animation-generator/kionilekanaambbbnjghihllokicnnlj?utm_source=chrome-ntp-ico"}]};exports.default=e;
},{}],10:[function(require,module,exports) {
"use strict";var e=require("dot"),t=o(e),r=require("./project_data"),u=o(r);function o(e){return e&&e.__esModule?e:{default:e}}var c=document.querySelector("#project_tmpl").innerHTML,n=t.default.template(c),a=n(u.default);document.querySelector(".Projects").innerHTML=a;
},{"dot":12,"./project_data":11}]},{},[10])