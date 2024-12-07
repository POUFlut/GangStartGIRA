import{j as e,s as d,r as m,t as p}from"./index-B9ZZYpx8.js";import{P as u,b as h,L as c,d as j}from"./popover-FcqgqrgO.js";const g=({idList:r,loadImg:l=!0,flexCol:t=!0})=>{const n=r.map((s,a)=>{const i=s.itemId,x=s.itemName,o=`https://raw.githubusercontent.com/POUFlut/GangStartAssets/main/ascend/${i}.png`;return e.jsxs(u,{children:[e.jsx(h,{className:`bg-transparent ${t?"":"p-0 pr-2"}`,children:e.jsxs("div",{className:`flex ${t?"flex-col":""}`,children:[l&&e.jsx("img",{src:o,alt:"圖片",className:`${t?"w-24 h-24":"w-5 h-5"} m-2`},a),e.jsx(c,{className:"self-center",children:x})]})}),e.jsxs(j,{children:[e.jsxs("div",{className:"mb-3 flex",children:[e.jsx(c,{className:"text-gray-600 min-w-[65px] self-center",children:"稀有度:"}),e.jsx("span",{className:"text-yellow-500",children:d(s.itemRarity)})]}),e.jsxs("div",{className:"mb-3 flex",children:[e.jsx(c,{className:"text-gray-600 min-w-[65px] self-center",children:"獲取方式:"}),e.jsx("span",{children:s.route})]}),e.jsxs("div",{className:"mb-3 flex",children:[e.jsx(c,{className:"text-gray-600 min-w-[65px] self-center",children:"用途:"}),e.jsx("span",{children:s.itemRmk})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx(c,{className:"text-gray-600 min-w-[65px] self-center",children:"說明:"}),e.jsx("p",{className:"text-gray-700 break-words",children:s.itemDesc})]})]})]},`quest-popover-${a}`)});return e.jsx(e.Fragment,{children:n})},y=()=>{const[r,l]=m.useState([]),[t,n]=m.useState();return m.useEffect(()=>{n([]),(async()=>{try{const a=await p("SELECT itemId, itemRarity, itemName, itemDesc, route, itemRmk FROM items WHERE itemSubType = 'Ascend' AND enable = 'Y' ORDER BY itemSubType, itemRarity");l(a)}catch(a){console.error("查詢失敗:",a)}})()},[]),m.useEffect(()=>{r.length>0&&n(e.jsx(g,{idList:r}))},[r]),e.jsxs("div",{className:"w-4/5",children:[e.jsx("p",{className:"mb-4 text-3xl",children:"道具-升階材料"}),e.jsx("div",{className:"flex flex-wrap mt-4 max-w-4/5 justify-center",children:t&&t})]})};export{y as default};
