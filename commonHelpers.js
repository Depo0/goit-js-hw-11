import{S as h,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="44781960-4338c4c6360104e4623fadff2",g="photo",L="horizontal",$=!0;function S(s){return fetch(`${p}?key=${y}&q=${s}&image_type=${g}&orientation=${L}&safesearch=${$}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function b({hits:s},r){if(s.length===0){n();return}const o=s.map(({webformatURL:e,largeImageURL:t,tags:i,likes:l,views:u,comments:d,downloads:f})=>`
            <li class="item">
                <a href="${t}">
                    <img class="image" src="${e}" alt="${i}" width="360">
                </a>
                <ul class="descr-list">
                    <li class="descr-item">
                        <h3 class="descr-title">Likes</h3>
                        <p class="descr-value">${l}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Views</h3>
                        <p class="descr-value">${u}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Comments</h3>
                        <p class="descr-value">${d}</p>
                    </li>
                    <li class="descr-item">
                        <h3 class="descr-title">Downloads</h3>
                        <p class="descr-value">${f}</p>
                    </li>
                </ul>
            </li>
        `).join("");r.innerHTML=o,new h(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function n(){m.error({message:"Sorry, there are no images matching your search query. Please try again!"})}const w=document.querySelector(".form-search"),v=document.querySelector(".card-container"),a=document.querySelector(".loader");w.addEventListener("submit",P);function P(s){s.preventDefault();const r=s.currentTarget,o=r.elements.search.value.toLowerCase();q(),S(o).then(c=>b(c,v)).catch(n).finally(()=>{r.reset(),E()})}function q(){a.style.display="flex"}function E(){a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
