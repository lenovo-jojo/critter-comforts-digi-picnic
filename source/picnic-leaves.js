(()=>{
const root=document.documentElement;if(root.classList.contains('companion-mode'))return;
// Use the very same pointed leaf silhouette as the translucent tree crowns.
const ns='http://www.w3.org/2000/svg',shape=window.picnicLeafArt?.path||'M0 9L-9 2-5-1-8-9-1-5 3-12 5-4 12-5 8 2 2 6 1 12Z';
for(const id of ['fall-leaves','leaves-behind-blanket','settled-front-leaves'])document.getElementById(id)?.remove();
const host=document.querySelector('.main-container'),svg=document.createElementNS(ns,'svg');svg.id='illustrated-leaves';svg.setAttribute('aria-hidden','true');svg.innerHTML='<g class="leaf-piles"></g><g class="leaves-in-breeze"></g>';host.append(svg);
const pileLayer=svg.firstElementChild,airLayer=svg.lastElementChild,reduced=matchMedia('(prefers-reduced-motion: reduce)');
const colors=['#bc683d','#d99d4e','#a84c44','#be7c58','#8d584d'];
const clusters=[{x:.08,y:.79},{x:.92,y:.785},{x:.19,y:.955},{x:.82,y:.96},{x:.31,y:.80},{x:.69,y:.80}];
const flying=[],settled=[];let w=innerWidth,h=innerHeight,last=0,time=0,next=0,landings=0,canopy=[];
function fit(){w=host.clientWidth;h=host.clientHeight;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);const hr=host.getBoundingClientRect();canopy=[...document.querySelectorAll('#layered-woods g[clip-path] path')].map(p=>{const r=p.getBoundingClientRect();return{x:r.left+r.width/2-hr.left,y:r.top+r.height/2-hr.top};}).filter(p=>p.x>0&&p.x<w&&p.y>30&&p.y<h*.66);for(const l of settled)placeRest(l);}
function makeLeaf(parent,color){const p=document.createElementNS(ns,'path');p.setAttribute('d',shape);p.setAttribute('fill',color);parent.append(p);return p;}
function placeRest(l){const neighbors=settled.filter(o=>o!==l&&o.cluster===l.cluster&&Math.abs(o.nx-l.nx)*w<22).length;const mound=Math.min(h*.018,neighbors*.75);l.p.setAttribute('transform',`translate(${l.nx*w} ${l.ny*h-mound}) rotate(${l.angle}) scale(${l.scale} ${l.scale*l.flat})`);}
function rest(p,cluster,nx,ny,scale){const l={p,cluster,nx,ny,scale,angle:-28+Math.random()*56+(Math.random()<.5?0:180),flat:.36+Math.random()*.25};settled.push(l);placeRest(l);if(settled.length>210){settled.shift().p.remove();}svg.dataset.settled=String(settled.length);}
// A few existing leaves anchor the clearing; later landings visibly build the mounds.
fit();for(let i=0;i<24;i++){const ci=i%clusters.length,c=clusters[ci];rest(makeLeaf(pileLayer,colors[i%colors.length]),ci,c.x+(Math.random()-.5)*.065,c.y+(Math.random()-.5)*.012,.45+Math.random()*.30);}
function spawn(){if(flying.length>=18)return;const ci=Math.floor(Math.random()*clusters.length),c=clusters[ci],origin=canopy[Math.floor(Math.random()*canopy.length)]||{x:w*(Math.random()<.5?.15:.85),y:h*.32};const p=makeLeaf(airLayer,colors[Math.floor(Math.random()*colors.length)]);flying.push({p,ci,x:origin.x,y:origin.y,startX:origin.x,startY:origin.y,targetX:w*(c.x+(Math.random()-.5)*.07),targetY:h*(c.y+(Math.random()-.5)*.009),age:0,duration:8+Math.random()*7,angle:Math.random()*360,spin:(Math.random()-.5)*100,scale:.46+Math.random()*.32,phase:Math.random()*6.28});}
function frame(now){requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000||0);last=now;if(document.hidden||root.dataset.picnicBackground!=='fall'||reduced.matches)return;time+=dt;
if(time>=next){spawn();next=time+1.1+Math.random()*1.6;}
const breeze=Math.sin(time*.36)*Math.sin(time*.11+.8);
for(let i=flying.length-1;i>=0;i--){const l=flying[i];l.age+=dt;const t=Math.min(1,l.age/l.duration),travel=t*t*(3-2*t);l.x=l.startX+(l.targetX-l.startX)*travel+(Math.sin(l.age*1.7+l.phase)*18+breeze*30)*Math.sin(Math.PI*t);l.y=l.startY+(l.targetY-l.startY)*t;const a=l.angle+l.age*l.spin+breeze*15,flutter=.45+.55*Math.abs(Math.cos(l.age*2+l.phase));l.p.setAttribute('transform',`translate(${l.x} ${l.y}) rotate(${a}) scale(${l.scale*flutter} ${l.scale})`);l.p.setAttribute('opacity',String(Math.min(.82,l.age*1.8)));
if(t===1){pileLayer.append(l.p);l.p.setAttribute('opacity','.86');rest(l.p,l.ci,l.targetX/w,l.targetY/h,l.scale);flying.splice(i,1);svg.dataset.landings=String(++landings);}}
svg.dataset.airborne=String(flying.length);}
let resizeTimer;addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{for(const l of flying)l.p.remove();flying.length=0;fit();},120);});svg.dataset.landings='0';requestAnimationFrame(frame);
})();
