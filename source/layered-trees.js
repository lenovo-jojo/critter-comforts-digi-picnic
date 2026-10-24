(()=>{
if(document.documentElement.classList.contains('companion-mode'))return;
const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.id='layered-woods';svg.setAttribute('viewBox','0 0 1000 1000');svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('aria-hidden','true');
const leafPath='M0 9L-9 2-5-1-8-9-1-5 3-12 5-4 12-5 8 2 2 6 1 12Z';window.picnicLeafArt=Object.freeze({path:leafPath});
let seed=83;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
let art=`<defs><linearGradient id="wood-ground" x2="0" y2="1"><stop stop-color="var(--ground-back)"/><stop offset="1" stop-color="var(--ground-front)"/></linearGradient><radialGradient id="wood-crown" cx=".38" cy=".28" r=".8"><stop stop-color="var(--crown-light)" stop-opacity=".67"/><stop offset=".7" stop-color="var(--crown-mid)" stop-opacity=".49"/><stop offset="1" stop-color="var(--crown-dark)" stop-opacity=".21"/></radialGradient></defs><path fill="var(--far-hill)" opacity=".55" d="M0 650Q180 590 370 650T740 635T1000 650V1000H0Z"/><path fill="url(#wood-ground)" d="M0 695Q260 650 500 692T1000 672V1000H0Z"/>`;
function tree(x,y,s,index,back=false){
const clusters=[[-65,-285,91],[48,-340,100],[-13,-424,80],[98,-245,73],[-91,-195,66]];
let branches=`<path d="M-19 0L-11-150-31-232-39-338-26-403-22-301 3-238 8-124 23 0Z"/><path d="M-6-125Q-65-161-104-239L-72-211-28-184-22-252ZM-16-215Q49-263 69-344L59-285 14-228 7-174ZM-27-293L-82-346-63-340-26-312ZM2-119L70-197 99-255 85-204 22-124Z"/>`;
let crowns='';clusters.forEach(([cx,cy,r],k)=>{
const clip=`crown-${index}-${k}`;
crowns+=`<defs><clipPath id="${clip}"><ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r*.96}"/></clipPath></defs><ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r*.96}" fill="url(#wood-crown)"/><g clip-path="url(#${clip})" fill="var(--leaf-ink)" opacity=".52">`;
for(let j=0;j<14;j++){const a=rand()*Math.PI*2,d=Math.sqrt(rand())*r*.88,lx=cx+Math.cos(a)*d,ly=cy+Math.sin(a)*d,angle=rand()*360;crowns+=`<path transform="translate(${lx} ${ly}) rotate(${angle})" d="${leafPath}"/>`;}
crowns+='</g>';
});
return `<g class="wood-tree ${back?'wood-back':''}" style="--tree-delay:${index*-.8}s" transform="translate(${x} ${y}) scale(${s})"><g class="wood-boughs"><g fill="var(--trunk)">${branches}</g>${crowns}</g></g>`;
}
art+=tree(40,682,.73,0,true)+tree(378,679,.48,1,true)+tree(653,676,.50,2,true)+tree(979,685,.77,3,true);
art+=tree(149,720,1.08,4)+tree(847,716,1.12,5);
// Sparse marks anchor the clearing without filling the open center.
art+='<g fill="var(--leaf-ink)" opacity=".23">';for(let i=0;i<55;i++){const x=rand()*1000,y=715+rand()*240;art+=`<path transform="translate(${x} ${y}) rotate(${rand()*180})" d="M-3 0L0-2 5 0 0 2Z"/>`;}art+='</g>';
svg.innerHTML=art;document.querySelector('.main-container').append(svg);
const trunks=[...svg.querySelectorAll('.wood-tree')].map(g=>({g,parts:g.getAttribute('transform').match(/translate\(([-\d.]+) ([-\d.]+)\) scale\(([-\d.]+)\)/).slice(1).map(Number)}));
function fit(){for(const {g,parts:[x,y,s]} of trunks)g.setAttribute('transform',`translate(${x} ${y}) scale(${s*innerHeight/innerWidth} ${s})`);}fit();addEventListener('resize',fit);
})();
