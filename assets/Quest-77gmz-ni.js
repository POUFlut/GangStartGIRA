import{j as e,s as u,r as n,t as d}from"./index-B9ZZYpx8.js";import{P as p,b as h,L as m,d as j}from"./popover-FcqgqrgO.js";const g=({idList:r,loadImg:i=!0,flexCol:t=!0})=>{const c=r.map((s,a)=>{const l=s.itemId,o=s.itemName,x=`https://raw.githubusercontent.com/POUFlut/GangStartAssets/main/quest/${l}.png`;return e.jsxs(p,{children:[e.jsx(h,{className:`bg-transparent ${t?"":"p-0 pr-2"}`,children:e.jsxs("div",{className:`flex ${t?"flex-col":""}`,children:[i&&e.jsx("img",{src:x,alt:"圖片",className:`${t?"w-24 h-24":"w-5 h-5"} m-2`},a),e.jsx(m,{className:"self-center",children:o})]})}),e.jsxs(j,{children:[e.jsxs("div",{className:"mb-3 flex",children:[e.jsx(m,{className:"text-gray-600 min-w-[65px] self-center",children:"稀有度:"}),e.jsx("span",{className:"text-yellow-500",children:u(s.itemRarity)})]}),e.jsxs("div",{className:"mb-3 flex",children:[e.jsx(m,{className:"text-gray-600 min-w-[65px] self-center",children:"獲取方式:"}),e.jsx("span",{children:s.route})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx(m,{className:"text-gray-600 min-w-[65px] self-center",children:"說明:"}),e.jsx("p",{className:"text-gray-700 break-words",children:s.itemDesc})]})]})]},`quest-popover-${a}`)});return e.jsx(e.Fragment,{children:c})},y=()=>{const[r,i]=n.useState([]),[t,c]=n.useState();return n.useEffect(()=>{c([]),(async()=>{try{const a=await d("SELECT itemId, itemRarity, itemName, itemDesc, route FROM items WHERE itemSubType = 'Quest' AND enable = 'Y' ORDER BY itemSubType, itemRarity");i(a)}catch(a){console.error("查詢失敗:",a)}})()},[]),n.useEffect(()=>{r.length>0&&c(e.jsx(g,{idList:r}))},[r]),e.jsxs("div",{className:"w-4/5",children:[e.jsx("p",{className:"mb-4 text-3xl",children:"道具-委託"}),e.jsx("div",{className:"flex flex-wrap mt-4 max-w-4/5 justify-center",children:t&&t})]})};export{y as default};
