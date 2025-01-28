import{i as m,a as b,S as v}from"./assets/vendor-BJlxXftY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();window.global||(window.global=window);const w="https://pixabay.com/api/?",L="48399114-e6afb1ef5f2eaab40be0bb5b8",a=new URLSearchParams({key:L,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1});let i=0;const P="Sorry, there are no images matching your search query.Please, try again!",f="We're sorry, but you've reached the end of search results",g=document.querySelector(".image-content"),d=document.querySelector(".loader"),p=document.querySelector(".load-more-button");function l(s,o){m.settings({timeout:5e3,transitionIn:"flipInX",transitionOut:"flipOutX"}),m.show({maxWidth:"350px",message:`${s}`,position:"topRight",backgroundColor:`${o}`})}function q(s){const o=s.hits.map(({webformatURL:r,largeImageURL:c,tags:e,likes:t,views:n,comments:y,downloads:h})=>`<li class="content-list-item">
            <div class="container-div">
                <a href="${c}">
                    <img src="${r}" alt="${e}" width="240" height="200">
                </a>
                <div class="content-bottom">
                    <div class="content-bottom-inner">
                        <p><b>Likes</b></p>
                        <p class="stats">${t}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Views</b></p>
                        <p class="stats">${n}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Comments</b></p>
                        <p class="stats">${y}</p></div>
                    <div class="content-bottom-inner">
                        <p><b>Downloads</b></p>
                        <p class="stats">${h}</p></div>
                </div> 
            </div> 
        </li>`).join("");g.innerHTML+=o,new v(".content-list-item a",{captionsData:"alt",captionDelay:250})}async function u(){try{const s=await b.get(w,{params:a});if(d.style.display="none",p.style.display="none",i=s.data.totalHits,i===0)l(P,"red");else{q(s.data);const o=Number(a.get("page")),r=Number(a.get("per_page"));o<Math.ceil(i/r)&&(p.style.display="block"),Math.ceil(i/r)===1&&l(f,"aqua")}}catch(s){d.style.display="none",l(s,"purple")}}const S=document.querySelector(".search-form"),M=document.querySelector(".search-input");S.addEventListener("submit",s=>{s.preventDefault(),a.set("q",M.value),a.set("page","1"),g.innerHTML="",d.style.display="flex",u()});p.addEventListener("click",s=>{let o=Number(a.get("page")),r=a.get("per_page");a.set("page",o+1),o+1>=Math.ceil(i/r)?(u(),l(f,"aqua"),p.style.display="none"):u()});
//# sourceMappingURL=index.js.map
