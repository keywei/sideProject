!function(){var t={5789:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},631:function(t,n,r){var e=r(869);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},5266:function(t,n,r){var e=r(869);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},6453:function(t,n,r){"use strict";var e=r(5462),o=r(4836),i=r(3506),c=r(696),u=r(5090),a=r(4016),f=r(6984);t.exports=function(t){var n,r,s,l,p,v,y=o(t),h="function"==typeof this?this:Array,g=arguments.length,d=g>1?arguments[1]:void 0,x=void 0!==d,m=f(y),b=0;if(x&&(d=e(d,g>2?arguments[2]:void 0,2)),null==m||h==Array&&c(m))for(r=new h(n=u(y.length));n>b;b++)v=x?d(y[b],b):y[b],a(r,b,v);else for(p=(l=m.call(y)).next,r=new h;!(s=p.call(l)).done;b++)v=x?i(l,d,[s.value,b],!0):s.value,a(r,b,v);return r.length=b,r}},5830:function(t,n,r){var e=r(7712),o=r(5090),i=r(2569),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},3756:function(t,n,r){var e=r(8427),o=r(5324),i=r(5094),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},1117:function(t,n,r){var e=r(9720),o=r(8427),i=r(3065),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},3506:function(t,n,r){var e=r(5266),o=r(6278);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){throw o(t),n}}},6711:function(t,n,r){var e=r(5324)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},274:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},2088:function(t,n,r){var e=r(5970),o=r(274),i=r(5324)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},496:function(t,n,r){var e=r(3065),o=r(4248),i=r(5597),c=r(8160);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},4073:function(t,n,r){var e=r(8427);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4749:function(t,n,r){"use strict";var e=r(2703).IteratorPrototype,o=r(1374),i=r(7262),c=r(7516),u=r(1187),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),c(t,f,!1,!0),u[f]=a,t}},3733:function(t,n,r){var e=r(9720),o=r(8160),i=r(7262);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},7262:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},4016:function(t,n,r){"use strict";var e=r(95),o=r(8160),i=r(7262);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},289:function(t,n,r){"use strict";var e=r(1693),o=r(4749),i=r(6530),c=r(3959),u=r(7516),a=r(3733),f=r(5526),s=r(5324),l=r(7522),p=r(1187),v=r(2703),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,g=s("iterator"),d="keys",x="values",m="entries",b=function(){return this};t.exports=function(t,n,r,s,v,S,O){o(r,n,s);var w,j,A,E=function(t){if(t===v&&C)return C;if(!h&&t in T)return T[t];switch(t){case d:case x:case m:return function(){return new r(this,t)}}return function(){return new r(this)}},I=n+" Iterator",P=!1,T=t.prototype,_=T[g]||T["@@iterator"]||v&&T[v],C=!h&&_||E(v),k="Array"==n&&T.entries||_;if(k&&(w=i(k.call(new t)),y!==Object.prototype&&w.next&&(l||i(w)===y||(c?c(w,y):"function"!=typeof w[g]&&a(w,g,b)),u(w,I,!0,!0),l&&(p[I]=b))),v==x&&_&&_.name!==x&&(P=!0,C=function(){return _.call(this)}),l&&!O||T[g]===C||a(T,g,C),p[n]=C,v)if(j={values:E(x),keys:S?C:E(d),entries:E(m)},O)for(A in j)(h||P||!(A in T))&&f(T,A,j[A]);else e({target:n,proto:!0,forced:h||P},j);return j}},9720:function(t,n,r){var e=r(8427);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6514:function(t,n,r){var e=r(4396),o=r(869),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},9123:function(t,n,r){var e=r(2642);t.exports=e("navigator","userAgent")||""},5094:function(t,n,r){var e,o,i=r(4396),c=r(9123),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},6472:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1693:function(t,n,r){var e=r(4396),o=r(5597).f,i=r(3733),c=r(5526),u=r(6726),a=r(496),f=r(5162);t.exports=function(t,n){var r,s,l,p,v,y=t.target,h=t.global,g=t.stat;if(r=h?e:g?e[y]||u(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(h?s:y+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},8427:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5462:function(t,n,r){var e=r(5789);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},2642:function(t,n,r){var e=r(1221),o=r(4396),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},6984:function(t,n,r){var e=r(2088),o=r(1187),i=r(5324)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},4396:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},3065:function(t){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},9031:function(t){t.exports={}},2501:function(t,n,r){var e=r(2642);t.exports=e("document","documentElement")},9741:function(t,n,r){var e=r(9720),o=r(8427),i=r(6514);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2196:function(t,n,r){var e=r(8427),o=r(274),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2026:function(t,n,r){var e=r(2232),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},3162:function(t,n,r){var e,o,i,c=r(5687),u=r(4396),a=r(869),f=r(3733),s=r(3065),l=r(2232),p=r(9406),v=r(9031),y=u.WeakMap;if(c){var h=l.state||(l.state=new y),g=h.get,d=h.has,x=h.set;e=function(t,n){return n.facade=t,x.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return d.call(h,t)}}else{var m=p("state");v[m]=!0,e=function(t,n){return n.facade=t,f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},696:function(t,n,r){var e=r(5324),o=r(1187),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3779:function(t,n,r){var e=r(274);t.exports=Array.isArray||function(t){return"Array"==e(t)}},5162:function(t,n,r){var e=r(8427),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},869:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},7522:function(t){t.exports=!1},6278:function(t,n,r){var e=r(5266);t.exports=function(t){var n=t.return;if(void 0!==n)return e(n.call(t)).value}},2703:function(t,n,r){"use strict";var e,o,i,c=r(6530),u=r(3733),a=r(3065),f=r(5324),s=r(7522),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||u(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},1187:function(t){t.exports={}},4108:function(t,n,r){var e=r(8427);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},5687:function(t,n,r){var e=r(4396),o=r(2026),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},1374:function(t,n,r){var e,o=r(5266),i=r(3419),c=r(6472),u=r(9031),a=r(2501),f=r(6514),s=r(9406)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=e?function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete v.prototype[c[r]];return v()};u[s]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[s]=t):r=v(),void 0===n?r:i(r,n)}},3419:function(t,n,r){var e=r(9720),o=r(8160),i=r(5266),c=r(6613);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},8160:function(t,n,r){var e=r(9720),o=r(9741),i=r(5266),c=r(95),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},5597:function(t,n,r){var e=r(9720),o=r(7639),i=r(7262),c=r(7712),u=r(95),a=r(3065),f=r(9741),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},848:function(t,n,r){var e=r(481),o=r(6472).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},4374:function(t,n){n.f=Object.getOwnPropertySymbols},6530:function(t,n,r){var e=r(3065),o=r(4836),i=r(9406),c=r(4073),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},481:function(t,n,r){var e=r(3065),o=r(7712),i=r(5830).indexOf,c=r(9031);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},6613:function(t,n,r){var e=r(481),o=r(6472);t.exports=Object.keys||function(t){return e(t,o)}},7639:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},3959:function(t,n,r){var e=r(5266),o=r(631);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},5649:function(t,n,r){"use strict";var e=r(5970),o=r(2088);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},4248:function(t,n,r){var e=r(2642),o=r(848),i=r(4374),c=r(5266);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},1221:function(t,n,r){var e=r(4396);t.exports=e},5526:function(t,n,r){var e=r(4396),o=r(3733),i=r(3065),c=r(6726),u=r(2026),a=r(3162),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(a=s(r)).source||(a.source=l.join("string"==typeof n?n:""))),t!==e?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},3958:function(t,n,r){"use strict";var e=r(5266);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},5654:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},6726:function(t,n,r){var e=r(4396),o=r(3733);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},7516:function(t,n,r){var e=r(8160).f,o=r(3065),i=r(5324)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},9406:function(t,n,r){var e=r(2296),o=r(7263),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},2232:function(t,n,r){var e=r(4396),o=r(6726),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},2296:function(t,n,r){var e=r(7522),o=r(2232);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},7677:function(t,n,r){var e=r(4554),o=r(5654),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},2569:function(t,n,r){var e=r(4554),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},7712:function(t,n,r){var e=r(2196),o=r(5654);t.exports=function(t){return e(o(t))}},4554:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},5090:function(t,n,r){var e=r(4554),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},4836:function(t,n,r){var e=r(5654);t.exports=function(t){return Object(e(t))}},95:function(t,n,r){var e=r(869);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},5970:function(t,n,r){var e={};e[r(5324)("toStringTag")]="z",t.exports="[object z]"===String(e)},7263:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},4141:function(t,n,r){var e=r(4108);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5324:function(t,n,r){var e=r(4396),o=r(2296),i=r(3065),c=r(7263),u=r(4108),a=r(4141),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},294:function(t,n,r){var e=r(1693),o=r(6453);e({target:"Array",stat:!0,forced:!r(6711)((function(t){Array.from(t)}))},{from:o})},9155:function(t,n,r){"use strict";var e=r(1693),o=r(869),i=r(3779),c=r(2569),u=r(5090),a=r(7712),f=r(4016),s=r(5324),l=r(3756),p=r(1117),v=l("slice"),y=p("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),g=[].slice,d=Math.max;e({target:"Array",proto:!0,forced:!v||!y},{slice:function(t,n){var r,e,s,l=a(this),p=u(l.length),v=c(t,p),y=c(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[h])&&(r=void 0):r=void 0,r===Array||void 0===r))return g.call(l,v,y);for(e=new(void 0===r?Array:r)(d(y-v,0)),s=0;v<y;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})},342:function(t,n,r){var e=r(9720),o=r(8160).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,a="name";e&&!(a in i)&&o(i,a,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},6082:function(t,n,r){var e=r(5970),o=r(5526),i=r(5649);e||o(Object.prototype,"toString",i,{unsafe:!0})},8860:function(t,n,r){"use strict";var e=r(5526),o=r(5266),i=r(8427),c=r(3958),u="toString",a=RegExp.prototype,f=a.toString,s=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=u;(s||l)&&e(RegExp.prototype,u,(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in a)?c.call(t):r)}),{unsafe:!0})},2814:function(t,n,r){"use strict";var e=r(7677).charAt,o=r(3162),i=r(289),c="String Iterator",u=o.set,a=o.getterFor(c);i(String,"String",(function(t){u(this,{type:c,string:String(t),index:0})}),(function(){var t,n=a(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))}},n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}r(294),r(9155),r(342),r(6082),r(8860),r(2814);for(var n=0,e=document.getElementsByClassName("carousel")[0],o=document.getElementsByClassName("images")[0],i=document.getElementsByClassName("btns")[0],c=document.getElementsByClassName("prev")[0],u=document.getElementsByClassName("next")[0],a=o.children[0].offsetWidth,f=null,s=null,l="",p=0;p<o.children.length;p++)l+='<a class = "btn">'+(p+1)+"</a>";i.innerHTML=l,o.style.width=o.children.length*a+"px";for(var v=function(t){i.children[t].addEventListener("click",(function(){h(t)}))},y=0;y<i.children.length;y++)v(y);function h(t){var r=30;(0===t&&n===o.children.length-1||0===n&&t===o.children.length-1)&&(r=10),clearInterval(s),g(t),n=t;var e=t*-a;s=setInterval((function(){var t=o.offsetLeft,n=40;t+=n=t<e?n:-n,Math.abs(t-e)>Math.abs(n)?o.style.left=t+"px":(clearInterval(s),o.style.left=e+"px")}),r)}function g(n){n=n||0;var r,e=function(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,c=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw c}}}}(i.children);try{for(e.s();!(r=e.n()).done;){var o=r.value;o.classList.contains("active")&&o.classList.remove("active")}}catch(t){e.e(t)}finally{e.f()}i.children[n].classList.add("active")}function d(){f=setInterval((function(){h(n===o.children.length-1?0:n+1)}),2e3)}c.addEventListener("click",(function(){h(0===n?o.children.length-1:n-1)})),u.addEventListener("click",(function(){h(n===o.children.length-1?0:n+1)})),e.addEventListener("mouseenter",(function(){clearInterval(f)})),e.addEventListener("mouseleave",(function(){d()})),g(),d()}()}();