import{n as e}from"./rolldown-runtime-BCiCTKAo.js";var t,n;function r(){return(r=e((()=>{t=(e,t,n)=>{let r=e.split(`
`),i=r.findIndex(e=>RegExp(`^\\s*<${t}(\\s|/>|$)`).test(e));if(i===-1)return e;let a=r[i].match(/^\s*/)?.[0]??``,o=[...n.split(`
`).map(e=>`${a}  ${e}`),`${a}</${t}>`];if(r[i].trimEnd().endsWith(`/>`))return r.splice(i,1,r[i].replace(/\s*\/>\s*$/,`>`),...o),r.join(`
`);for(let t=i+1;t<r.length;t++)if(!(r[t].length-r[t].trimStart().length>a.length+1))return r[t].trim()===`/>`?(r.splice(t,1,`${a}>`,...o),r.join(`
`)):e;return e},n=(e,n)=>({docs:{source:{transform:r=>t(r,e,n)}}})})))()}export{r as n,n as t};