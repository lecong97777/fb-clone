(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[51,11],{"0YPa":function(e,t,n){var i=n("q1tI");t.a=(e,t)=>{const n=Object(i.useRef)(()=>{});Object(i.useEffect)(()=>{n.current=e},[e]),Object(i.useEffect)(()=>{if(null===t)return()=>{};const e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}},"3/Bf":function(e,t,n){n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return w})),n.d(t,"d",(function(){return h}));var i=n("7w6Q"),r=n("FZ8N"),o=n("LrH5"),a=n("HMdf"),c=n("SyXB"),s=n("Og0o");const u=Object(o.a)("logPwtStats");let l=null;const d=Math.random()<.2;let m=!0;const f=e=>{l=e},p=e=>{l&&(l.historyAction=e)},g=e=>{l&&(l.initialAppLoadSurface=e)},_=(e,t)=>{if(!d||r.c)return;if(!l)return void i.a.increment("performanceEntries.no_context",1,{name:e});const{browserName:n,deviceType:o,initialAppLoadSurface:u,isAppShell:m,isAuthenticated:f,isBot:p,isSocialBot:g}=l;if(!u)return void i.a.increment("performanceEntries.no_surface",1,{name:e});const _=(g?"socialBot":p&&"bot")||"nonbot",b=`${_}.${o}.${u}.${e}`;i.a.timing("performanceEntries."+b,t);const w={isAppShell:m,isAuthenticated:f,isChrome:"Chrome"===n};if(i.a.timing(`performanceEntries.${b}.with_tags`,t,1,w),"LCP"===e&&"Chrome"===n&&"phone"===o&&"nonbot"===_&&!f){const e=m?"appShell":"noAppShell";i.a.timing(`seoPerf.LCP.${u}.overall`,t),i.a.timing(`seoPerf.LCP.${u}.${e}`,t);const n=Object(c.d)(),r=["initialAppLoad","RenderReactContainer","mountUnauthPageWrapper",..."pin_closeup"===u?["closeupImageLoaded"]:[]].map(e=>({annotation:e,time:n[e]})),o="pin_closeup"===u?(()=>{const e=Object(s.b)();return e&&Object(a.c)().find(({name:t})=>t===e)||null})():null;[...r,...o?[{annotation:"mainImage_startTime",time:o.startTime},{annotation:"mainImage_requestStart",time:o.startTime},{annotation:"mainImage_responseStart",time:o.responseStart},{annotation:"mainImage_responseEnd",time:o.responseEnd}]:[]].forEach(({annotation:t,time:n})=>{n&&i.a.timing(`seoPerf.LCP_annotations.${u}.${e}.${t}`,Math.round(n))})}},b=(e,t,n=!0)=>{if(!d)return;if(!l)return u("pwt.metrics_quality.no_context"),void i.a.increment("pwt.metrics_quality.no_context",1,{eventName:e});const{browserName:o,browserVersion:a,deviceType:c,isBot:s,isSocialBot:m}=l,f=`pwt.${(m?"socialBot":s&&"bot")||"nonbot"}.metrics_quality.${c}.${e}`,p={...(null==t?void 0:t.tags)||{},browserName:o,browserVersion:(null==a?void 0:a.split(".")[0])||"0"},g=null==t?void 0:t.count;n&&(u(`${f}: ${"number"==typeof g?g:1}`),null!=t&&t.tags&&u(Object.entries(t.tags))),r.c||i.a.count(f,"number"==typeof g?g:1,1,p)},w=(e,t)=>b(`ERROR.${null!=t&&t.action?t.action+".":""}${e}`,{tags:t}),h=({appLoadName:e,clientNavName:t},n)=>{if(d)if(l){const i="APP_VOLUME.";m?(b(i.concat(e),{tags:{browserSupportsPwtProfiler:!!n}}),m=!1):"PUSH"===l.historyAction&&b(i.concat(t),{tags:{browserSupportsPwtProfiler:!!n}})}else i.a.increment("pwt.metrics_quality.no_context",1,{eventName:e.concat("."+t)})}},FZ8N:function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));const i=window.location.search.includes("debug_tracing"),r=window.location.search.includes("debug_lab_tracing"),o=i||r},HMdf:function(e,t,n){n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return p}));var i=n("vzKb"),r=n("SyXB");function o(e){var t,n;return(null===(t=window)||void 0===t||null===(n=t.performance)||void 0===n?void 0:n.getEntriesByType)&&window.performance.getEntriesByType(e)||[]}var a=n("FZ8N"),c=n("3/Bf");let s;function u(){window.performance&&window.performance.clearResourceTimings&&(Object(r.c)("resourceBufferCleared"),a.b&&console.info("Warning: Clearing resource timings in default buffer."),Object(c.c)("resourceBufferSize",{count:o("resource").length}),window.performance.clearResourceTimings())}const l=({size:e})=>{if(window.performance){window.PerformanceObserver?(s=o("resource"),Object(i.a)({entryTypes:["resource"]},t=>{s=(s||[]).concat(t.getEntries()),s.length>e&&(s=s.slice(-e))})):(window.addEventListener("popstate",()=>{o("resource").length>e&&u()}),window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(e));try{window.performance.onresourcetimingbufferfull=()=>{s||u()}}catch(t){}}},d=()=>s||o("resource"),m=()=>{s&&(Object(c.c)("customBufferSize",{count:s.length}),s=[]),u()},f=()=>({customBufferSize:s?s.length:0,defaultBufferSize:o("resource").length}),p=(e,t=!0)=>{let n=0,i=0;const r=(o=e.filter(e=>t?(e.responseEnd||"img"!==e.initiatorType||(n+=1),e.transferSize||"img"!==e.initiatorType||(i+=1),!!e.responseEnd&&!!e.transferSize&&"img"===e.initiatorType):!!e.responseEnd&&!!e.transferSize).map(e=>8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3)).length?o.reduce((e,t)=>e+t,0)/o.length:null;var o;return t&&(n>0&&Object(c.c)("images.downloadSpeed.noResponseEnd",{tags:{count:n}},!1),i>0&&Object(c.c)("images.downloadSpeed.transferSize",{tags:{count:i}},!1)),r}},LrH5:function(e,t,n){n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n("FZ8N");const r=(e,t)=>{i.b&&(e.style.outline="10px solid "+t,e.style.outlineOffset="-30px")},o=e=>(t,...n)=>{i.b&&console.log("string"==typeof t?`[PWT:${e}] ${t}`:t,...n)}},Og0o:function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));const i="closeupImage",r=()=>{if(!document.querySelector)return null;const e=document.querySelector(`[data-pwt-element-id="${i}"] img`);return e instanceof HTMLImageElement?e.src:null}},SyXB:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return l}));var i=n("XtwW");const r="masonryPagination";let o={};const a=e=>"📌 "+e,c=()=>{const e={};return Object.keys(o).forEach(t=>{(o[t]||[]).slice(0,3).forEach((n,i)=>{e[i?`${t}_${i+1}`:t]=n})}),e},s=(e,t)=>(o[e]||[]).filter(e=>e<t).length,u=(e,t)=>s(e,t)>0,l=()=>{i.a&&Object.keys(o).forEach(e=>((e,t)=>{const n=a(t);e.clearMarks(n),e.clearMeasures(n)})(i.a,e)),o={}};t.c=e=>{i.a&&(o[e]=(o[e]||[]).concat([i.a.now()]),((e,t)=>{const n=a(t);e.mark(n),e.measure(n)})(i.a,e))}},XtwW:function(e,t,n){var i;t.a=(i=window.performance)&&i.clearMarks&&i.clearMeasures&&i.clearResourceTimings&&i.getEntries&&i.getEntriesByName&&i.getEntriesByType&&i.mark&&i.measure&&i.now&&i.setResourceTimingBufferSize?i:null},bNC6:function(e,t,n){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));const i={id:14,name:"own_profile"},r={id:15,name:"other_profile"},o={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"}}},client_route_push:{unauth:{},auth:{bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},pin_closeup:{id:13,name:"pin_closeup_details"},own_profile:i,other_profile:r}},client_route_replace:{unauth:{},auth:{own_profile:i,other_profile:r}}},a={client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"}}}}},c={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},s=e=>{var t,n;const{navigationType:i,isAuthenticated:r,segment:c,surface:s}=e,u=r?"auth":"unauth",l=null===(t=a[i])||void 0===t||null===(n=t[u])||void 0===n?void 0:n[s];return c&&l&&l[c]||o[i][u][s]},u=e=>{if("stopwatch"===e.type)return c[e.name]||null;const t=s(e);return t?t.id:null},l=e=>{if("stopwatch"===e.type)return e.name;const{navigationType:t,isAuthenticated:n,segment:i,surface:r}=e,o=n?"auth":"unauth",a=s(e);return a?a.name:`${t}_${o}_${r}${i?"_"+i:""}`}},bZU8:function(e,t,n){n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return s}));const i="pwt-grid-item",r=['div[data-grid-item="true"]',"div.Masonry div.Collection-Item","div.Grid__Item",`div[data-test-id="${i}"]`],o=r.join(","),a=r.map(e=>e+" img").join(","),c=r.map(e=>e+" div[style*=background-image]").join(","),s=r.map(e=>e+" video").join(",")},gg0E:function(e,t,n){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n("q1tI"),r=n("SyXB"),o=n("0YPa"),a=n("bNC6"),c=n("HMdf"),s=n("3/Bf"),u=n("QAzJ"),l=n("y2Ga"),d=n("bZU8");const m=(e,t)=>{const n=(e=>e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null)(e);if(!n)return Object(s.b)("missing_client_rect"),!1;return!(e instanceof HTMLImageElement&&n.width<100&&n.height<100)&&(({top:e,height:t},{foldY:n,pageYOffset:i})=>{const r=e+i;if(r>=n)return!1;const o=Math.min(t,n-r);return o>.5*t||o>.2*n})(n,t)},f=()=>{const e=(()=>{if(!document.querySelector)return Object(s.b)("missing_document_query_selector"),null;const e=document.querySelectorAll(d.d);return e[e.length-1]||null})();if(!e)return!1;const t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},p=(e,t)=>{if(!document.querySelector)return Object(s.b)("missing_document_query_selector"),[];const n={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},i=[d.b,...e?[d.a]:[],...t?[d.e]:[]].join(",");return[...document.querySelectorAll(i)].reduce((e,i)=>{if((i instanceof HTMLImageElement||i instanceof HTMLDivElement||i instanceof HTMLVideoElement&&t)&&m(i,n)){const t=(e=>{if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;const t=((e.style||{}).backgroundImage||"").match(/^url\(["'](http.*)["']\)$/);return t&&t[1]||null})(i);if(t)return e.concat([{htmlElement:i,url:t}])}return e},[])};var g=n("LrH5");const _=Object(g.a)("GridProfiler"),b=()=>!!(window.addEventListener&&window.removeEventListener&&"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&document.querySelector&&document.querySelectorAll),w=(e,t)=>{if(!t){const t=document.querySelector?document.querySelectorAll(d.d).length:(Object(s.b)("missing_document_query_selector"),0);if(t===e)return _("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!f())return _("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}};function h({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:n,includeVideos:d=!1}){const m=Object(l.c)(),f=null==m?void 0:m.id,b=null==m?void 0:m.setVisuallyCompleteResult,[h,v]=Object(i.useState)({status:"DISABLED"});let y=n,E=d;const O=null!=m&&m.metricId.isAuthenticated?"auth_perf_better_grid_item_detection":"unauth_perf_better_grid_item_detection",{anyEnabled:S}=Object(u.a)(O);S&&(y=!0,E=!0),Object(i.useEffect)(()=>{v(b?{status:"LAYOUT",failedCount:0,numOfItemsChecked:0}:{status:"DISABLED"})},[f,b]),Object(i.useEffect)(()=>{if("DISABLED"!==h.status&&Object(r.c)("GridVisuallyCompleteProfiler_"+h.status),_("new status",h),"LAYOUT"===h.status){const e=((e,t)=>{const n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)})("scroll",()=>{Object(r.c)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[h.status]),Object(o.a)(()=>{if(!m||!b)return;const{abort:n,metricId:i}=m;switch(h.status){case"LAYOUT":{const t=w(h.numOfItemsChecked,e);t.complete?v({status:"TIMING",failedCount:0,pinElements:p(y,E).map(({htmlElement:e,url:t})=>({fileName:(t||"").replace(/.*\//,""),element:e}),[])}):500*h.failedCount>6e4?(Object(s.c)(`images.${Object(a.b)(i)}.visuallyComplete.maxLayoutAttempt`),n("visuallyComplete_layoutTimeout"),v({status:"DISABLED"})):v({...h,failedCount:h.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{const e=Object(c.c)(),r=h.pinElements.length,o=[];let u=0,l=0,d=0;if(h.pinElements.forEach(({element:t,fileName:n})=>{const i=e.find(e=>("img"===e.initiatorType||"css"===e.initiatorType)&&e.name.endsWith(n));i?i.responseEnd?(o.push(i),Object(g.b)(t,"green")):(d+=1,Object(g.b)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(l+=1,Object(g.b)(t,"red")):(u+=1,Object(g.b)(t,"greenyellow"))}),u||d)100*h.failedCount>6e4?(Object(s.c)(`images.${Object(a.b)(i)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:r,incompleteCount:u,noTimingCount:l,noTimingResponseEndCount:d}}),n("visuallyComplete_timingTimeout"),v({status:"DISABLED"})):v({...h,failedCount:h.failedCount+1});else if(_(`All ${o.length} images are fetched`),b({imageTimings:o}),v({status:"DISABLED"}),Object(s.c)(`images.${Object(a.b)(i)}.visuallyComplete.complete`,{tags:{totalImageCount:r,noTimingCount:l}}),t&&t.length>0&&S){const e=((e,t)=>{let n=0,i=0,r=0,o=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,a)=>{var c,s,u,l,d;const m=t.fileName.split(".")[0];let f;f=e[a],m!==f.image_signature&&(f=e.find(e=>m===e.image_signature)||{}),f.is_promoted||"PROMOTED_PIN"===(null===(c=f.recommendation_reason)||void 0===c?void 0:c.reason)||null!==(s=f)&&void 0!==s&&null!==(u=s.promoter)&&void 0!==u&&u.length?r+=1:null!==f.story_pin_data_id&&void 0!==f.story_pin_data_id?n+=1:null!==(l=f)&&void 0!==l&&null!==(d=l.videos)&&void 0!==d&&d.video_list?i+=1:o+=1}),{storyPinCount:n,videoCount:i,adCount:r,imageCount:o}})(t,h.pinElements);Object(s.c)(Object(a.b)(i)+".pinTypes",{tags:e})}break}}},(e=>("LAYOUT"===e.status?500:"TIMING"===e.status&&100)||null)(h))}},vzKb:function(e,t,n){t.a=(e,t,n)=>{if(window.PerformanceObserver)try{const i=new window.PerformanceObserver(t);i.observe(e),window.addEventListener("beforeunload",()=>{i.disconnect()}),n&&window.addEventListener("popstate",()=>{n()})}catch(i){}}},y2Ga:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}));var i=n("1dBE");const{Consumer:r,Provider:o,useHook:a}=Object(i.b)("pwtSurfaceContext")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/51-5274ee9b91be8ed949df.mjs.map