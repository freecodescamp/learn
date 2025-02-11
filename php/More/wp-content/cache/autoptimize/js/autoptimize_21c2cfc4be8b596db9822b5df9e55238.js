"use strict";function addBackToTop(){var o,t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.backgroundColor,d=void 0===r?"#000":r,a=i.cornerOffset,c=void 0===a?20:a,s=i.diameter,l=void 0===s?56:s,u=i.ease,p=void 0===u?function(o){return 0.5*(1-Math.cos(Math.PI*o));}:u,m=i.id,h=void 0===m?"back-to-top":m,b=i.innerHTML,v=void 0===b?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':b,f=i.onClickScrollTo,x=void 0===f?0:f,w=i.scrollContainer,g=void 0===w?document.body:w,k=i.scrollDuration,y=void 0===k?100:k,T=i.showWhenScrollTopIs,M=void 0===T?1:T,z=i.size,E=void 0===z?l:z,C=i.textColor,L=void 0===C?"#fff":C,N=i.zIndex,I=void 0===N?1:N,A=g===document.body,B=A&&document.documentElement;(o=Math.round(0.43*E)),(t=Math.round(0.29*E)),(e="#"+
h+"{background:"+
d+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+
c+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+
L+";cursor:pointer;display:block;height:"+
E+"px;opacity:1;outline:0;position:fixed;right:"+
c+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+
E+"px;z-index:"+
I+"}#"+
h+" svg{display:block;fill:currentColor;height:"+
o+"px;margin:"+
t+"px auto 0;width:"+
o+"px}#"+
h+".hidden{bottom:-"+
E+"px;opacity:0}"),(n=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.insertAdjacentElement("afterbegin",n);var D=(function(){var o=document.createElement("div");return((o.id=h),(o.className="hidden"),(o.innerHTML=v),o.addEventListener("click",function(o){o.preventDefault(),(function(){var o="function"==typeof x?x():x,t=window,e=t.performance,n=t.requestAnimationFrame;if(y<=0||void 0===e||void 0===n)return q(o);var i=e.now(),r=j(),d=r-o;n(function o(t){var e=Math.min((t-i)/y,1);q(r-Math.round(p(e)*d)),e<1&&n(o);});})();}),document.body.appendChild(o),o);})(),H=!0;function S(){j()>=M?(function(){if(!H)return;(D.className=""),(H=!1);})():(function(){if(H)return;(D.className="hidden"),(H=!0);})();}
function j(){return g.scrollTop||(B&&document.documentElement.scrollTop)||0;}
function q(o){(g.scrollTop=o),B&&(document.documentElement.scrollTop=o);}
(A?window:g).addEventListener("scroll",S),S();};
(function(){if(!navigator.clipboard){return;}
function swapIcons(btn){let css=btn.classList;if(css.contains("icon-copy")){css.remove("icon-copy");css.add("icon-done");setTimeout(function(){css.remove("icon-done");css.add("icon-copy");},1000);}}
function onCopyButtonClick(e){const btn=e.target;if(btn.parentNode){const code=btn.parentNode.querySelector("code");if(code){navigator.clipboard.writeText(code.textContent||code.innerText);swapIcons(btn);}}}
const codeBlocks=document.querySelectorAll(".wp-block-code");if(codeBlocks.length>0){let btnCopy=document.createElement("i");btnCopy.classList.add("icon-copy");btnCopy.classList.add("btn-copy-code");for(let i=0;i<codeBlocks.length;i++){codeBlocks[i].appendChild(btnCopy.cloneNode(true));codeBlocks[i].addEventListener("click",onCopyButtonClick);}}})();
(function(){const root=document.querySelector('html');const switcher=document.querySelector('.switch-theme');if(!root||!switcher){return;}
const setTheme=(theme)=>(root.dataset.theme=theme);const getTheme=()=>root.dataset.theme;switcher.addEventListener('click',toggleTheme);const iframes=document.querySelectorAll('.iframe');function toggleTheme(e){e.preventDefault();const isDarkMode=getTheme()==='dark';let theme=isDarkMode?'light':'dark';setTheme(theme);localStorage.setItem('theme',theme);for(const iframe of iframes){iframe.contentWindow.postMessage({type:'modechange',darkMode:isDarkMode,},'*');}}})();
(function(){let siteNav=document.querySelector(".site-menu");if(!siteNav){return;}
let toggle=document.querySelector(".menu-toggle");if(!toggle){return;}
toggle.addEventListener("click",function(){toggle.classList.toggle("activated");if(siteNav.classList.contains("active")){this.setAttribute("aria-expanded","false");this.setAttribute("aria-label","menu");siteNav.classList.remove("active");}else{siteNav.classList.add("active");this.setAttribute("aria-label","close menu");this.setAttribute("aria-expanded","true");}});})();
(function(){function backToTop(){addBackToTop({diameter:56,backgroundColor:'var(--button-bg-color)',textColor:'var(--button-color)',});}
backToTop();})();
(function(){const options=wth_js_lang;let post;const wth=document.querySelector(".helpful-block-content");if(!wth){return;}
const btnYes=wth.querySelector(".helpful-block-content .wth-yes-btn");const btnNo=wth.querySelector(".helpful-block-content .wth-no-btn");const btnSubmit=wth.querySelector(".wth-btn-submit");const btnCancel=wth.querySelector(".wth-btn-cancel");const feedbackForm=wth.querySelector(".wth-form");const messageEl=document.querySelector(".wth-message");messageEl.addEventListener("change",function(){if(this.classList.contains("wth-feedback-error")&&this.value.trim()!==""){this.classList.remove("wth-feedback-error");}});btnNo.addEventListener("click",function(e){feedback(this,options.negative_feedback_required==="true",true);btnYes.disabled=true;});btnYes.addEventListener("click",function(e){feedback(this,options.positive_feedback_required==="true",false);btnNo.disabled=true;});btnCancel.addEventListener("click",function(e){if(messageEl.classList.contains("wth-feedback-error")){messageEl.classList.remove("wth-feedback-error");}
hideFeedbackForm();btnYes.disabled=false;btnNo.disabled=false;});function feedback(element,feedbackRequired,isNegative=true){post=getPost(element);if(!feedbackRequired){return sendFeedback(post,options,false);}
showFeedbackForm(post,options,isNegative);}
btnSubmit.addEventListener("click",function(e){sendFeedback(post,options);});function getPost(element){return{url:element.getAttribute("data-post-url"),id:element.getAttribute("data-post"),title:element.getAttribute("data-post-title"),response:element.getAttribute("data-response"),};}
function hideFeedbackForm(){feedbackForm.classList.add("hidden");}
function showFeedbackForm(post,options,isNegative){feedbackForm.classList.remove("hidden");feedbackForm.querySelector(".wth-title").textContent=isNegative?options.wth_title_nothank:options.wth_title_yesthank;btnSubmit.setAttribute("data-response",post.response);btnSubmit.setAttribute("data-post",post.id);btnSubmit.setAttribute("value",options.submit_text);}
function showMessage({success,message}){const className=success?"wth-success":"wth-error";const messageHTML=`<p class="${className}">${message}</p>`;wth.innerHTML=messageHTML;}
function showProgress(){const spinnerHTML=`
			<div class="wth-loader">
				<svg class="spinner" viewBox="0 0 50 50">
					<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
				</svg>
				<p>Sending your feedback ...</p>
			</div>
		`;wth.innerHTML=spinnerHTML;}
async function sendFeedback(post,options,messageRequired=true){let message="";if(messageRequired){message=messageEl.value.trim();if(!message){messageEl.classList.add("wth-feedback-error");return;}}
const feedback={post_id:post.id,response:post.response,message:messageRequired?message:"",title:document.querySelector("h1").innerText.trim(),action:"wth_ajax_call",operation:"wthp_log_feedback",nonce:options.nonce,};try{showProgress();const response=await fetch(options.ajax_url,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","Cache-Control":"no-cache",},body:new URLSearchParams(feedback),});const result=await response.json();showMessage(result);}catch(error){}}})();