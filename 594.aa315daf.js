"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[594],{36594:(e,t,i)=>{i.r(t),i.d(t,{ExtensionProvider:()=>N});var s=i(60987),n=i(4615),r=i(10161),a=i(91827),o=i(64146),c=i(90241);function h(){const e=new BigUint64Array(2);return crypto.getRandomValues(e),(e[1]<<BigInt(64)|e[0]).toString(36)}var d,f,l,p,u,w,m,b,v,g,y,k,E,M,C,I,W,P=function(e,t,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?n.call(e,i):n?n.value=i:t.set(e,i),i},$=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};const T="substrate-connect-extension",_="substrate-connect-client",j=(0,n.k)(_),S={chain_finalisedHead:"chain_finalizedHead",chain_subscribeFinalisedHeads:"chain_subscribeFinalizedHeads",chain_unsubscribeFinalisedHeads:"chain_unsubscribeFinalizedHeads"},R=e=>{window.postMessage(e,"*")},H=e=>new Promise(((t,i)=>{const s=({data:n})=>{if(n.origin===T&&n.chainId===e.chainId){if(window.removeEventListener("message",s),"chain-ready"===n.type)return t();i(new Error("error"===n.type?n.errorMessage:"Unexpected message received from the extension while waiting for 'chain-ready' message"))}};window.addEventListener("message",s),R(e)}));class N{constructor(e,t){d.add(this),f.set(this,new s.K),l.set(this,new r),p.set(this,{}),u.set(this,{}),w.set(this,{}),m.set(this,void 0),b.set(this,void 0),v.set(this,!1),g.set(this,void 0),y.set(this,void 0),this.healthPingerInterval=2e3,k.set(this,(e=>{const{type:t}=e;if("error"===t){P(this,v,!1,"f");const t=new Error(e.errorMessage);return this.emit("error",t),(0,a.f)($(this,p,"f"),(e=>e.callback(t,void 0))),void(0,a.f)($(this,w,"f"))}if("rpc"===t&&e.jsonRpcMessage){j.debug((()=>["received",e.jsonRpcMessage]));const t=JSON.parse(e.jsonRpcMessage);return(0,a.o)(t.method)?$(this,E,"f").call(this,t):$(this,M,"f").call(this,t)}const i=`Unrecognised message type from extension ${t}`;return this.emit("error",new Error(i))})),E.set(this,(e=>{const t=$(this,p,"f")[e.id];if(t){try{const{method:i,subscription:s}=t,n=$(this,f,"f").decodeResponse(e);if(t.callback(null,n),s){const e=`${s.type}::${n}`;$(this,u,"f")[e]={...s,method:i},$(this,w,"f")[e]&&$(this,M,"f").call(this,$(this,w,"f")[e])}}catch(e){t.callback(e,void 0)}delete $(this,p,"f")[e.id]}else j.debug((()=>`Unable to find handler for id=${e.id}`))})),M.set(this,(e=>{const t=`${S[e.method]||e.method||"invalid"}::${e.params.subscription}`,i=$(this,u,"f")[t];if(!i)return $(this,w,"f")[t]=e,void j.debug((()=>`Unable to find handler for subscription=${t} responseId=${e.id}`));delete $(this,w,"f")[t];try{const t=$(this,f,"f").decodeResponse(e);i.callback(null,t)}catch(e){i.callback(e,void 0)}})),C.set(this,(e=>{if(0==e.shouldHavePeers)return $(this,v,"f")?void 0:(P(this,v,!0,"f"),this.emit("connected"),void j.debug("emitted CONNECTED"));const t=e.peers,i=(t>0||!e.shouldHavePeers)&&!e.isSyncing;return j.debug("Simulating lifecylce events from system_health"),j.debug(`isConnected: ${$(this,v,"f").toString()}, new peerCount: ${t}`),$(this,v,"f")&&i?void 0:$(this,v,"f")&&0===t?(P(this,v,!1,"f"),this.emit("disconnected"),void j.debug("emitted DISCONNECTED")):!$(this,v,"f")&&i?(P(this,v,!0,"f"),this.emit("connected"),void j.debug("emitted CONNECTED")):void 0})),I.set(this,(()=>{this.send("system_health",[]).then($(this,C,"f")).catch((e=>this.emit("error",new o.Z(e))))})),P(this,g,e,"f"),P(this,b,null,"f"),P(this,y,"","f"),t&&P(this,y,t,"f"),P(this,m,h(),"f")}get hasSubscriptions(){return!0}clone(){throw new Error("clone() is not supported.")}async connect(){try{await $(this,d,"m",W).call(this)}catch(e){const t=e instanceof Error?e:new Error(`An unnexpected error happened while trying to connect. ${e}`);return this.emit("error",t),void(0,a.f)($(this,p,"f"),(e=>e.callback(t,void 0)))}window.addEventListener("message",(({data:e})=>{e.origin===T&&e.chainId===$(this,m,"f")&&$(this,k,"f").call(this,e)})),P(this,b,setInterval($(this,I,"f"),this.healthPingerInterval),"f")}disconnect(){return null!==$(this,b,"f")&&clearInterval($(this,b,"f")),R({origin:_,chainId:$(this,m,"f"),type:"remove-chain"}),P(this,v,!1,"f"),this.emit("disconnected"),Promise.resolve()}get isConnected(){return $(this,v,"f")}on(e,t){return $(this,l,"f").on(e,t),()=>{$(this,l,"f").removeListener(e,t)}}async send(e,t,i,s){return new Promise(((i,n)=>{const r=$(this,f,"f").encodeJson(e,t),a=$(this,f,"f").getId();j.debug((()=>["calling",e,r])),$(this,p,"f")[a]={callback:(e,t)=>{e?n(e):i(t)},method:e,subscription:s};const o={origin:_,chainId:$(this,m,"f"),type:"rpc",jsonRpcMessage:r};R(o)}))}async subscribe(e,t,i,s){return await this.send(t,i,!1,{callback:s,type:e})}async unsubscribe(e,t,i){const s=`${e}::${i}`;return(0,a.o)($(this,u,"f")[s])?(j.debug((()=>`Unable to find active subscription=${s}`)),!1):(delete $(this,u,"f")[s],await this.send(t,[i]))}emit(e,...t){$(this,l,"f").emit(e,...t)}}f=new WeakMap,l=new WeakMap,p=new WeakMap,u=new WeakMap,w=new WeakMap,m=new WeakMap,b=new WeakMap,v=new WeakMap,g=new WeakMap,y=new WeakMap,k=new WeakMap,E=new WeakMap,M=new WeakMap,C=new WeakMap,I=new WeakMap,d=new WeakSet,W=async function(){const e={origin:_,chainId:$(this,y,"f")?h():$(this,m,"f"),...c.p[$(this,g,"f")]?{type:"add-well-known-chain",chainName:$(this,g,"f")}:{type:"add-chain",chainSpec:$(this,g,"f"),potentialRelayChainIds:[]}};await H(e),$(this,y,"f")&&await H({origin:_,chainId:$(this,m,"f"),type:"add-chain",chainSpec:$(this,y,"f"),potentialRelayChainIds:[e.chainId]})}},64146:(e,t,i)=>{i.d(t,{Z:()=>n});var s;class n extends Error{constructor(e,t="Got error response asking for system health"){super(t),s.set(this,void 0),function(e,t,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===s?n.call(e,i):n?n.value=i:t.set(e,i)}(this,s,e,"f"),Object.setPrototypeOf(this,new.target.prototype)}getCause(){return function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)}(this,s,"f")}}s=new WeakMap},91827:(e,t,i)=>{i.d(t,{f:()=>n,o:()=>s});const s=e=>void 0===e;function n(e,t){Object.keys(e).forEach((i=>{t&&t(e[i]),delete e[i]}))}}}]);