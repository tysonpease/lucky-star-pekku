(()=>{let e,n,t=null,o=null,l=null,i=5,d=!0,c=!1,a=null,g=null;function r(){!function(){if(t=0,o=-1,!window.location.href.includes("#"))return;let n=window.location.href.split("#")[1];console.log("Loading page named "+n);for(let l=0;l<e.length;l++)if(console.log(e[l].page_name),e[l].page_name===n)return console.log("Starting on page "+l),0!==l&&(document.getElementById("load-older").hidden=!1),t=l,void(o=l-1);console.log("Couldn't find page named "+n)}(),u(),function(){if(!window.location.href.includes("#"))return;let e=window.location.href.split("#")[1],n=document.getElementById(decodeURI(e)).offsetTop;window.scrollTo(0,n)}()}function s(e){let n=document.createElement("div");Object.assign(n,{class:"infinite-page",id:e.page_name});let t=document.createElement("a");t.href=`${window.location.origin}/comic/${e.page_name}/`;let o=document.createElement("img");return o.className="infinite-page-image",console.log("Adding div for page "+e.page_name),o.src=`${window.location.origin}/assets/thumbs/${e.Filename}`,o.title=e["Alt text"],t.appendChild(o),n.appendChild(t),n}function f(){if(!(t<=0||c)){c=!0;try{for(let o=0;o<i;o++){t--,l++;let o=s(e[t]);if(n.insertBefore(o,n.firstChild),t<=0){document.getElementById("load-older").hidden=!0;break}}}finally{c=!1}}}function u(){if(!(o+1>=e.length||c)){c=!0,document.getElementById("loading-infinite-scroll").hidden=!0;try{for(let t=0;t<i;t++){o++;let t=s(e[o]);if(n.appendChild(t),o+1>=e.length){document.getElementById("load-newer").hidden=!0,document.getElementById("caught-up-notification").hidden=!1;break}}console.log("Done loading images")}finally{c=!1}}}function m(e){if(d)return;window.innerHeight+window.pageYOffset>=document.body.offsetHeight-1e3&&u();let t=function(e,t=!1){null===e&&(e=0);let o=n.childNodes,l=.3*window.innerHeight;t&&(console.log("childNodes length: "+o.length),console.log(l));for(let n=e;n<o.length;n++){let e=o[n].getBoundingClientRect();if(t&&console.log("id="+o[n].id+", top="+e.top),e.top>=l)return Math.max(0,n-1)}return o.length-1}(l);l!==t&&function(e){l=e,console.log("Current page: "+l);let t=n.childNodes[l].id;console.log("Anchor: "+t);let o=window.location.href.split("#")[0]+"#"+t;window.history.replaceState(null,null,o)}(t)}!async function(t,o){if(a="/",g="/",d=!0,await async function(){let n=await fetch("/assets/json/page_info_list.json");console.log("Fetched page info list");let t=await n.json();e=t.page_info_list}(),0===e.length)return document.getElementById("loading-infinite-scroll").innerHTML="<h2>No comics have been published yet.</h2>",document.getElementById("jump-to").hidden=!0,void(document.getElementById("load-newer").hidden=!0);n=document.getElementById("infinite-scroll"),r(),document.getElementById("load-older-button").onclick=f,document.getElementById("load-newer-button").onclick=u,window.onscroll=m;for(let e of document.getElementsByClassName("chapter-links"))e.addEventListener("click",(function(){let e=this.getAttribute("href");console.log(e),window.location.href=e,d=!0,n.textContent="",r(),d=!1}));d=!1}()})();