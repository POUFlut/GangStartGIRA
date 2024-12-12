import{r as i,j as e,R as l,A as u,w as L,x as I,t as E,y as f}from"./index-BQ2CVA4a.js";import{B as o,S as h}from"./switch-B6Y1Ten8.js";import{L as p}from"./popover-Dkfj8yR4.js";import"./index-C5WWort5.js";const F=()=>{const[r,d]=i.useState([]),[c,m]=i.useState(),[n,x]=i.useState(!1);return i.useEffect(()=>{m([]),(async()=>{try{const t=await E("SELECT a.battleName, a.consumes, a.rank, GROUP_CONCAT(CASE WHEN d.isFirst = 'Y' THEN CONCAT(d.itemId, 'x', d.count, 'x', i.itemRarity, 'x', IFNULL(i.route, '無'), 'x', IFNULL(i.itemPicFolder, '無'), 'x', i.itemName, 'x', i.itemDesc, 'x', IFNULL(i.itemRmk, '無')) END) AS isFirstItems, GROUP_CONCAT(CASE WHEN d.isBonus = 'N' THEN CONCAT(d.itemId, 'x', d.count, 'x', i.itemRarity, 'x', IFNULL(i.route, '無'), 'x', IFNULL(i.itemPicFolder, '無'), 'x', i.itemName, 'x', i.itemDesc, 'x', IFNULL(i.itemRmk, '無')) END) AS nonBonusItems, GROUP_CONCAT(CASE WHEN d.isBonus = 'Y' THEN CONCAT(d.itemId, 'x', d.count, 'x', i.itemRarity, 'x', IFNULL(i.route, '無'), 'x', IFNULL(i.itemPicFolder, '無'), 'x', i.itemName, 'x', i.itemDesc, 'x', IFNULL(i.itemRmk, '無')) END) AS bonusItems FROM area a LEFT JOIN drops d ON a.chapterId = d.chapterId AND a.containLevel = d.containLevel LEFT JOIN items i ON d.itemId = i.itemId WHERE a.chapterId = 'Area_Garden' GROUP BY a.battleName ORDER BY a.containLevel");d(t)}catch(t){console.error("查詢失敗:",t)}})()},[]),i.useEffect(()=>{if(r.length>0){let a;if(n)a=r.map((t,s)=>e.jsx(l.Fragment,{children:e.jsx(o,{battleInfo:t})},`battle-table-${s}`));else{const t=r.map((s,N)=>e.jsx(l.Fragment,{children:e.jsxs(u,{value:s.battleName,children:[e.jsx(L,{className:"mt-2 text-base font-medium py-2 h-auto bg-background",children:s.battleName}),e.jsx(I,{className:"pt-1",children:e.jsx(o,{battleInfo:s})})]})},`battle-table-${N}`));a=()=>e.jsx(f,{type:"multiple",children:t})}m(a)}},[r,n]),e.jsxs("div",{className:"w-4/5",children:[e.jsx("p",{className:"mb-4 text-3xl",children:"關卡資訊-魔花養殖所"}),e.jsxs("div",{className:"flex flex-col mt-4 max-w-4/5 justify-center bg-background rounded-md",children:[e.jsxs("div",{className:"flex space-x-2 m-4",children:[e.jsx(h,{className:"p-0",onCheckedChange:a=>x(a)}),e.jsx(p,{className:"self-center",children:"詳細檢視"})]}),c||e.jsx("p",{children:"載入中或無資料"})]})]})};export{F as default};