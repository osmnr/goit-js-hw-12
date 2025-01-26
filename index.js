import{i as m,a as b,S as v}from"./assets/vendor-BJlxXftY.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();window.global||(window.global=window);const w="https://pixabay.com/api/?",L="48399114-e6afb1ef5f2eaab40be0bb5b8";let s={key:L,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1},r=0;const q="Sorry, there are no images matching your search query.Please, try again!",f="We're sorry, but you've reached the end of search results",y=document.querySelector(".image-content"),d=document.querySelector(".loader"),l=document.querySelector(".load-more-button");function c(o,n){m.settings({timeout:5e3,transitionIn:"flipInX",transitionOut:"flipOutX"}),m.show({maxWidth:"350px",message:`${o}`,position:"topRight",backgroundColor:`${n}`})}function M(o){const n=o.hits.map(({webformatURL:p,largeImageURL:i,tags:e,likes:t,views:a,comments:h,downloads:g})=>`<li class="content-list-item">
            <div class="container-div">
                <a href="${i}">
                    <img src="${p}" alt="${e}" width="240" height="200">
                </a>
                <div class="content-bottom">
                    <div class="content-bottom-inner">
                        <p><b>Likes</b></p>
                        <p class="stats">${t}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Views</b></p>
                        <p class="stats">${a}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Comments</b></p>
                        <p class="stats">${h}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Downloads</b></p>
                        <p class="stats">${g}</p></div>
                </div> 
            </div> 
        </li>`).join("");y.innerHTML+=n,new v(".content-list-item a",{captionsData:"alt",captionDelay:250})}async function u(){try{const o=await b.get(w,{params:s});d.style.display="none",l.style.display="none",r=o.data.totalHits,r===0?c(q,"red"):(M(o.data),s.page<Math.ceil(r/s.per_page)&&(l.style.display="block"),Math.ceil(r/s.per_page)===1&&c(f,"aqua"))}catch(o){d.style.display="none",c(o,"purple")}}const S=document.querySelector(".search-form"),$=document.querySelector(".search-input");S.addEventListener("submit",o=>{o.preventDefault(),s.q=$.value,s.page=1,y.innerHTML="",d.style.display="flex",u()});l.addEventListener("click",o=>{s.page+=1,s.page>=Math.ceil(r/s.per_page)?(u(),c(f,"aqua"),l.style.display="none"):u()});
//# sourceMappingURL=index.js.map
