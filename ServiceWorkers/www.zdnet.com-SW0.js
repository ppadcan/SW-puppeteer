const worker=this;class CacheService{static get precacheMapping(){return new Map([["https://zdnet2.cbsistatic.com/fly/bundles/zdnetcss/fonts/Proxima Nova/Semibold.woff2","fonts"],["https://zdnet2.cbsistatic.com/fly/bundles/zdnetcss/fonts/Proxima Nova/Regular.woff2","fonts"]])}static addResourceToCache(e){if(CacheService.hasCacheDirective(e.url)){caches.open(CacheService.getCacheDirective(e.url)).then((function(t){Utils.log("info","Adding resource to cache: "+e.url),t.put(e.url,e)}))}return e.clone()}static getCacheDirective(e){return CacheService.precacheMapping.get(e)||""}static hasCacheDirective(e){return CacheService.precacheMapping.has(e)}static precacheAll(){return new Promise((function(){CacheService.precacheMapping.forEach((function(e,t){caches.open(e).then((function(r){return Utils.log("info",`Precaching (${e}) resource: ${t}`),r.add(t)}))}))}))}static purgeUnusedCaches(){const e=CacheService.precacheMapping.entries();return caches.keys().then((function(t){return Promise.all(t.map((function(t){if(!e.includes(t))return Utils.log("info","Purging unused cache: "+t),caches.delete(t)})))}))}}class RequestService{constructor(e,t){this.request=e,this.ruleService=t}static get internalHostPattern(){return/(\.zdnet\.com)|(\.cbsistatic\.com)$/}fetchWithTimeout(){const e=new URL(this.request.url),t=this.ruleService.getTimeout(),r=this;if(null===t||e.host.match(RequestService.internalHostPattern))return fetch(this.request);if(0===t)return Utils.log("info","Request cancelled automatically: "+this.request.url),new Promise((function(){return new Response("",{status:408,statusText:"Request Timeout"})}));if(this.ruleService.hasValidTimeout()){const e=fetch(this.request),s=new Promise((function(e){setTimeout(e,t)}));return Promise.race([s,e]).then((function(e){return e instanceof Response?e:(Utils.log("warn",`Request forcibly timed out after ${t}ms: ${r.request.url}`),new Response("",{status:408,statusText:"Request Timeout"}))})).catch((function(e){return Utils.log("error","Fetch of resource failed: "+r.request.url,e),new Response("",{status:400,statusText:"Bad Request"})}))}return Utils.log("warn","Invalid timeout set for "+this.request.url),fetch(this.request)}getCanonicalRequest(){if(this.request instanceof Request){const e=["referrer","referrerPolicy","url"],t=this.ruleService.getCanonicalUrl();if(this.request.url!==t){Utils.log("log",`Generating new request replacing the original URL (${this.request.url}) with the canonical URL (${t}).`);let r={};for(let t in this.request)"function"==typeof this.request[t]||e.includes(t)||(r[t]=this.request[t]);return new Request(t,r)}}return this.request}fetchResource(){const e=this.getCanonicalRequest(),t=this;return CacheService.hasCacheDirective(e.url)?caches.match(e).then((function(r){return r?(Utils.log("info","Returning cached copy of resource: "+e.url),r):(Utils.log("info","Fetching and caching resource: "+e.url),t.fetchWithTimeout().then((function(e){return CacheService.addResourceToCache(e)})))})).catch((function(t){return Utils.log("error","Fetch of resource failed: "+e.url,t),Response.error()})):this.fetchWithTimeout()}}class RuleService{constructor(e){this.request=e,this.resourceRule=this.findResourceRule()}static get defaultResourceRule(){return{service:"default"}}static get minimumSafeTimeout(){return 4e3}static get resourceRules(){return[{service:"fonts",targetPattern:/^https:\/\/((zdnet[1-4]\.cbsistatic\.com)|([^\\]*\.zdnet\.com))\/(fly\/.+\/)?bundles\/zdnetcss\/fonts\/(.*)\.woff2$/,destinationPattern:"https://zdnet2.cbsistatic.com/fly/bundles/zdnetcss/fonts/$5.woff2"}]}findResourceRule(){const e=this.request.url;for(let t of RuleService.resourceRules)if(e===t.targetUrl||t.targetPattern instanceof RegExp&&e.match(t.targetPattern))return Utils.log("log","Resource rule matched for url: "+e,t),t;return RuleService.defaultResourceRule}getCanonicalUrl(){return"string"==typeof this.resourceRule.destinationUrl?this.resourceRule.destinationUrl:"string"==typeof this.resourceRule.destinationPattern&&this.resourceRule.targetPattern instanceof RegExp?this.request.url.replace(this.resourceRule.targetPattern,this.resourceRule.destinationPattern):this.request.url}getTimeout(){return this.hasValidTimeout()?this.resourceRule.timeout:null}hasRedirectRule(){return void 0!==this.resourceRule.destinationUrl||void 0!==this.resourceRule.destinationPattern}hasValidTimeout(){return Number.isInteger(this.resourceRule.timeout)&&RuleService.minimumSafeTimeout<=this.resourceRule.timeout}shouldIntercept(){return"GET"===this.request.method&&(this.hasRedirectRule()||this.hasValidTimeout()||CacheService.hasCacheDirective(this.request.url))}}class Utils{static log(){const e=arguments[0],t=[].slice.call(arguments,1);t.unshift("%c ServiceWorker ","color:#FFF;border-radius:3px;background-color:#B80000;"),console[e].apply(console,t)}}const events=new Map([["activate",function(e){Utils.log("info","event: activate",e),e.waitUntil(CacheService.purgeUnusedCaches),e.waitUntil(clients.claim())}],["fetch",function(e){const t=new RuleService(e.request);if(t.shouldIntercept()){const r=new RequestService(e.request,t);e.respondWith(r.fetchResource())}else Messenger.sendMessage(e)}],["install",function(e){Utils.log("info","event: install",e),CacheService.precacheAll(),worker.skipWaiting()}]]);class Messenger{static sendMessage(e){e.waitUntil(async function(){if(!e.clientId)return;await clients.get(e.clientId)&&self.clients.matchAll().then((function(t){t.forEach((function(t){t.postMessage({url:e.request.url})}))}))}())}}events.forEach((function(e,t){worker.addEventListener(t,e.bind(worker))}));