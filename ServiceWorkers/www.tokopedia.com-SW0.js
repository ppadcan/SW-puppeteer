const VERSION = "1602694626286_318598b26e21ef93";
const PUBLIC_PATH_REGEX = "https:\\/\\/assets.tokopedia.net\\/assets-tokopedia-lite\\/v2\\/zeus\\/kratos\\/";
const OFFLINE_SHELL_PATH = "https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/sw-shell.zeus-offline.1602694458892.html";
const BLACKLISTED_ROUTES = [/^\/mybills/, /^\/iklan/, /^\/kejutan/, /^\/kotak-kejutan/, /^\/redeem/, /^\/seller/, /^\/saldo/, /^\/payment/, /^\/flash-sale/, /^\/about/, /^\/bantuan/, /^\/contact/, /^\/ajax/, /^\/logistic/, /\.pl/, /\.txt/, /\opensearch.xml/, /\/__/, /\/help\/inbox/, /^\/.well-known\/?/, /^\/[\w-]+\/review/, /^\/[\w-]+\/talk/, /^\/accounts-logout/, /^\/add-product/, /^\/after_sq/, /^\/agen/, /^\/akamai/, /^\/angsuran/, /^\/assets\//, /^\/asuransi/, /^\/belajar/, /^\/berbagi/, /^\/blog/, /^\/bpjs/, /^\/broadcast/, /^\/cart/, /^\/catalog/, /^\/chat/, /^\/deals/, /^\/donasi-online/, /^\/edit-product/, /^\/edu/, /^\/emas/, /^\/e-pharmacy/, /^\/events/, /^\/find\//, /^\/flight/, /^\/fm\//, /^\/forms\//, /^\/ft-forms\//, /^\/gift-card/, /^\/help/, /^\/hotel/, /^\/inbox-reputation/, /^\/inbox-talk/, /^\/jasa\//, /^\/kartu-kredit/, /^\/kartu-prakerja/, /^\/kereta-api/, /^\/kredit-motor/, /^\/kredivo/, /^\/langganan/, /^\/login/, /^\/logout/, /^\/manage-product/, /^\/mitra-toppers/, /^\/mpn/, /^\/my-shop/, /^\/myshop/, /^\/order\/invoice/, /^\/otp/, /^\/ovo-paylater/, /^\/ovo/, /^\/pajak/, /^\/paket-data/, /^\/partner/, /^\/pascabayar/, /^\/payment-list/, /^\/pdam/, /^\/pengaturan-diskon/, /^\/people\//, /^\/pgn/, /^\/pinjaman-online/, /^\/play/, /^\/pln/, /^\/product-camp/, /^\/produk-digital/, /^\/promo/, /^\/proteksi/, /^\/pulsa/, /^\/register/, /^\/reksa-dana/, /^\/reset/, /^\/resolution-center\//, /^\/retribusi/, /^\/roaming/, /^\/s\//, /^\/s\/umroh/, /^\/s\/donasi/, /^\/salam/, /^\/saldo-prioritas/, /^\/seru/, /^\/settings/, /^\/snapshot_product/, /^\/streaming/, /^\/tagihan-listrik/, /^\/tagihan/, /^\/telepon/, /^\/tokopediaumroh/, /^\/rewards/, /^\/top-up/, /^\/tv-kabel/, /^\/v1\//, /^\/v2\//, /^\/voucher/, /^\/appauth\/code/, /^\/discovery\/tukar-tambah/, /^\/buka-toko-gratis/, /^\/buka-toko-online-gratis/, /^\/official-store\/registration/, /^\/mitra/, /^\/official-store\/brand\//, /^\/official-store\/brand/, /^\/official-store\/store-display-management/, /^\/official-store\/secdep\/download/, /^\/official-store\/security-deposit/, /^\/sale/, /^\/careers/, /^\/pasang-tv-kabel/, /^\/pendidikan/, /^\/panduan-keamanan/, /^\/seo-console/, /^\/bebas-penipuan/, /^\/power-zero/, /^\/forms/, /^\/ft-forms/, /^\/keuangan/, /^\/finance/, /^\/bayar-sekaligus/, /^\/membership\/campaign\/hujanemas/, /^\/discovery\/kurban/, /^\/discovery\/qurban/, /^\/discovery\/halal/, /^\/discovery\/salam/, /^\/mobile-apps/, /^\/dev-camp/, /^\/cashback/, /^\/ulang-tahun/, /^\/academy/, /^\/donasi/, /^\/find-your-purpose/, /^\/pd-academy/, /^\/program-trip/, /^\/referral/, /^\/scholarship/, /^\/ramadan/, /^\/festival-juni\/pemenang/, /^\/discovery\/donasi/, /^\/tap-tap-kotak\/pemenang/, /^\/manage-flash-sale/, /^\/discovery\/cod/, /^\/discovery\/bayar-di-tempat/, /^\/cod/, /^\/brand-asset/, /^\/waktunya-kita-kuis\/pemenang/, /^\/langganan/];
!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/",s(s.s=6)}([function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:expiration:5.1.3"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:cacheable-response:5.1.3"]&&_()}catch(n){}},function(e,t,s){"use strict";s.r(t),s(0);class n extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s})(e,t)),this.name=e,this.details=t}}const a=new Set,r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},c=e=>[r.prefix,e,r.suffix].filter(e=>e&&e.length>0).join("-"),i=e=>e||c(r.precache),o=e=>e||c(r.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),l=(e,t)=>e.filter(e=>t in e),u=async({request:e,mode:t,plugins:s=[]})=>{const n=l(s,"cacheKeyWillBeUsed");let a=e;for(const r of n)a=await r.cacheKeyWillBeUsed.call(r,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},p=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),c=await u({plugins:a,request:t,mode:"read"});let i=await r.match(c,n);for(const o of a)if("cachedResponseWillBeUsed"in o){const t=o.cachedResponseWillBeUsed;i=await t.call(o,{cacheName:e,event:s,matchOptions:n,cachedResponse:i,request:c})}return i},d=async({cacheName:e,request:t,response:s,event:r,plugins:c=[],matchOptions:i})=>{const o=await u({plugins:c,request:t,mode:"write"});if(!s)throw new n("cache-put-with-no-response",{url:h(o.url)});const d=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const c of n)if("cacheWillUpdate"in c){r=!0;const t=c.cacheWillUpdate;if(a=await t.call(c,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:r,plugins:c,response:s,request:o});if(!d)return;const f=await self.caches.open(e),g=l(c,"cacheDidUpdate"),w=g.length>0?await p({cacheName:e,matchOptions:i,request:o}):null;try{await f.put(o,d)}catch(m){throw"QuotaExceededError"===m.name&&await async function(){for(const e of a)await e()}(),m}for(const n of g)await n.cacheDidUpdate.call(n,{cacheName:e,event:r,oldResponse:w,newResponse:d,request:o})},f=p;let g;function m(e){e.then(()=>{})}class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(c,i)=>{const o=c.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?i(l):e.continue()):i(l)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const r=s.objectStore(t),c=r[e].apply(r,n);c.onsuccess=()=>a(c.result)})}close(){this._db&&(this._db.close(),this._db=null)}}w.prototype.OPEN_TIMEOUT=2e3;const _={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[Z,ee]of Object.entries(_))for(const e of ee)e in IDBObjectStore.prototype&&(w.prototype[e]=async function(t,...s){return await this._call(e,t,Z,...s)});const y=async({request:e,fetchOptions:t,event:s,plugins:a=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=l(a,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of a)if("requestWillFetch"in t){const n=t.requestWillFetch,a=e.clone();e=await n.call(t,{request:a,event:s})}}catch(i){throw new n("plugin-error-request-will-fetch",{thrownError:i})}const h=e.clone();try{let n;n="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of a)"fetchDidSucceed"in e&&(n=await e.fetchDidSucceed.call(e,{event:s,request:h,response:n}));return n}catch(o){for(const t of r)await t.fetchDidFail.call(t,{error:o,event:s,originalRequest:c.clone(),request:h.clone()});throw o}};s(1);const x=[],R={get:()=>x,add(e){x.push(...e)}};function v(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class E{constructor(e){this._cacheName=i(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=v(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),c=new Set(r.map(e=>e.url));for(const[o,h]of this._urlsToCacheKeys)c.has(h)?n.push(o):s.push({cacheKey:h,url:o});const i=s.map(({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})});return await Promise.all(i),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:a,plugins:r,integrity:c}){const i=new Request(t,{integrity:c,cache:s,credentials:"same-origin"});let o,h=await y({event:a,plugins:r,request:i});for(const n of r||[])"cacheWillUpdate"in n&&(o=n);if(!(o?await o.cacheWillUpdate({event:a,request:i,response:h}):h.status<400))throw new n("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=await async function(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===g){const t=new Response("");if("body"in t)try{new Response(t.body),g=!0}catch(e){g=!1}g=!1}return g}()?s.body:await s.blob();return new Response(r,a)}(h)),await d({event:a,plugins:r,response:h,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this._cacheName)).match(s)}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new n("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new n("non-precached-url",{url:e});const s=this.createHandler(t),a=new Request(e);return()=>s({request:a})}}let q;const b=()=>(q||(q=new E),q);let T=!1;const U=e=>{const t=b(),s=R.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},N=e=>{const t=b();e.waitUntil(t.activate())};s(5);class L{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}class O{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new L(e)}}s(4);const C="cache-entries",S=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class k{constructor(e){this._cacheName=e,this._db=new w("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(C,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=S(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(C,s)}async getTimestamp(e){return(await this._db.get(C,this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction(C,"readwrite",(s,n)=>{const a=s.objectStore(C).index("timestamp").openCursor(null,"prev"),r=[];let c=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&c>=t?r.push(s.value):c++),s.continue()}else n(r)}}),n=[];for(const a of s)await this._db.delete(C,a.id),n.push(a.url);return n}_getId(e){return this._cacheName+"|"+S(e)}}class M{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new k(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s.delete(n);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,m(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){return!!this._maxAgeSeconds&&await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class A{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);m(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(c){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),a.add(t))}_getCacheExpiration(e){if(e===o())throw new n("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new M(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(3);class P{constructor(e={}){this._cacheName=o(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,r=await f({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r);else try{r=await this._getFromNetwork(t,e)}catch(a){s=a}if(!r)throw new n("no-response",{url:t.url,error:s});return r}async _getFromNetwork(e,t){const s=await y({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),r=d({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(r)}catch(a){}return s}}const K={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(2);const j=e=>e&&"object"==typeof e?e:{handle:e};class I{constructor(e,t,s="GET"){this.handler=j(t),this.match=e,this.method=s}}class D extends I{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class W{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let r,i=a&&a.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),i){try{r=i.handle({url:s,request:e,event:t,params:n})}catch(c){r=Promise.reject(c)}return r instanceof Promise&&this._catchHandler&&(r=r.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),r}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const a of n){let n;const r=a.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=j(e)}setCatchHandler(e){this._catchHandler=j(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let F;function H(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);a=new I(({url:e})=>e.href===n.href,t,s)}else if(e instanceof RegExp)a=new D(e,t,s);else if("function"==typeof e)a=new I(e,t,s);else{if(!(e instanceof I))throw new n("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return(F||(F=new W,F.addFetchListener(),F.addCacheListener()),F).registerRoute(a),a}var B;self.__precacheManifest=[].concat(self.__precacheManifest||[{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/chunk.main-page.5fda4147e297aae23d96.js'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/chunk.main.565579c89003ffa130c7.js'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/chunk.nonLoggedIn.0c5a11b3d1df700131a7.js'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/chunk.nonLoggedInCart.6b60a0699bdb353c8b7d.js'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/offline-image.a493fd3d.jpg'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/runtime.e743bda254c3a06401a6.js'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/sw-shell.zeus-offline.1602694458892.html'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/unify.7ef1a5d816abeadcdd96.js'},{'revision':null,'url':'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/vendor.292f0c2eabd451341d94.js'}]),B={},function(e){b().addToCacheList(e),e.length>0&&(self.addEventListener("install",U),self.addEventListener("activate",N))}(self.__precacheManifest),function(e){T||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=i();self.addEventListener("fetch",r=>{const c=((e,t)=>{const s=b().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}})(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return;let i=self.caches.open(a).then(e=>e.match(c)).then(e=>e||fetch(c));r.respondWith(i)})})(e),T=!0)}(B),self.addEventListener("activate",e=>{const t=i();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter(s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e);return await Promise.all(s.map(e=>self.caches.delete(e))),s})(t).then(e=>{}))});var z=new P({cacheName:"zeus-js-cache",plugins:[new O({statuses:[200],headers:{"Content-Type":"application/javascript"}})]}),G=new P({cacheName:"zeus-css-cache",plugins:[new O({statuses:[200],headers:{"Content-Type":"text/css"}})]}),$=new P({cacheName:"zeus-general-cache",plugins:[new O({statuses:[200]})]}),V=new class{constructor(e={}){if(this._cacheName=o(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[K,...e.plugins]}else this._plugins=[K];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const a=[];let r;if(this._networkTimeoutSeconds){const{id:n,promise:c}=this._getTimeoutPromise({request:t,event:e,logs:s});r=n,a.push(c)}const c=this._getNetworkPromise({timeoutId:r,request:t,event:e,logs:s});a.push(c);let i=await Promise.race(a);if(i||(i=await c),!i)throw new n("no-response",{url:t.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let a,c;try{c=await y({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(r){a=r}if(e&&clearTimeout(e),a||!c)c=await this._respondFromCache({request:t,event:n});else{const e=c.clone(),s=d({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(r){}}return c}_respondFromCache({event:e,request:t}){return f({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}({cacheName:"zeus-tkpd-gql-cache",plugins:[new O({statuses:[200]}),new A({maxEntries:20,maxAgeSeconds:86400})]}),X=new P({cacheName:"zeus-static-cache",plugins:[new O({statuses:[0,200]}),new A({maxEntries:20,maxAgeSeconds:604800})]}),Q=new P({cacheName:"zeus-3rd-party-cache",plugins:[new O({statuses:[0,200]}),new A({maxEntries:20,maxAgeSeconds:86400})]});[{regex:new RegExp("^".concat(PUBLIC_PATH_REGEX,".*(\\.js)$")),cache:z},{regex:new RegExp("^".concat(PUBLIC_PATH_REGEX,".*(\\.css)$")),cache:G},{regex:new RegExp("^".concat(PUBLIC_PATH_REGEX,".*\\.(jpg|png|bmp|jpeg|svg|webp|gif)$")),cache:$},{regex:new RegExp("^https://assets.tokopedia.net/assets-tokopedia-lite/(.*)"),cache:$},{regex:new RegExp("^https:\\/\\/ecs7(-p)?.tokopedia.net\\/img\\/.*\\.(jpg|png|bmp|jpeg|svg|webp|gif)$"),cache:$},{regex:new RegExp("^https:\\/\\/ecs7.tokopedia.net\\/fonts\\/.*\\.(ttf|woff)$"),cache:$},{regex:new RegExp("^https:\\/\\/ecs7.tokopedia.net\\/assets-desktop-common-assets\\/.*\\.(js|css)$"),cache:$},{regex:new RegExp("^https:\\/\\/gql(-staging|-beta)?.tokopedia.com"),cache:V},{regex:new RegExp("^https://fonts.(?:googleapis|gstatic).com/(.*)"),cache:X},{regex:new RegExp("^https://storage.(?:googleapis|gstatic).com/(.*)"),cache:X},{regex:new RegExp("^https://scripts.jixie.io/(.*)\\.js"),cache:X},{regex:new RegExp("^https://static.criteo.net/(.*)"),cache:X},{regex:new RegExp("^https://static.ads-twitter.com/(.*)"),cache:X},{regex:new RegExp("^https://connect.facebook.net/(.*)"),cache:Q}].forEach((function(e){H(e.regex,e.cache,"GET")}));var J,Y=!1;caches.match("/sw-shell.zeus.html").then((function(e){e&&(J=e.clone(),Y=!(J.headers.get("x-zeus-shell-expiry-timestamp")<=(new Date).getTime()))})),H(new class extends I{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(e=>this._match(e),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const n of this._denylist)if(n.test(s))return!1;return!!this._allowlist.some(e=>e.test(s))}}((function(e){return e.url,fetch("/sw-shell.zeus.html").then((function(e){if(!e.ok)throw new Error("Received non-2xx response when fetching app shell");return J=e.clone(),Y=!(J.headers.get("x-zeus-shell-expiry-timestamp")<=(new Date).getTime()),caches.open("zeus-app-shell-cache").then((function(t){t.put("/sw-shell.zeus.html",e.clone())})),Promise.resolve(e.clone())})).catch((function(e){return console.log("[customNavigationStrategy] err:",e),Y?Promise.resolve(J.clone()):caches.match(function(e){return b().getCacheKeyForURL(e)}(OFFLINE_SHELL_PATH))}))}),{denylist:BLACKLISTED_ROUTES})),self.addEventListener("install",(function(){console.log("zeus SW installed!"),console.log("version:",VERSION)})),self.addEventListener("message",(function(e){var t=e.data;"CLIENT"===t.source&&"LOGOUT"===t.message&&self.clients.matchAll().then((function(e){e.forEach((function(e){e.postMessage({message:"LOGOUT",version:VERSION})}))}))})),self.addEventListener("activate",(function(){console.log("zeus SW activated!"),self.clients.matchAll().then((function(e){e.forEach((function(e){e.postMessage({message:"UPDATE_AVAILABLE",version:VERSION})}))}))})),importScripts("https://cdn.moengage.com/webpush/releases/serviceworker_cdn.min.latest.js")}]);