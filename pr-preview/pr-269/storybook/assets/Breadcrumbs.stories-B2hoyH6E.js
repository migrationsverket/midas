import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{b as ee,$ as re,a as ae,d as te}from"./Collection-CP0FkJ5j.js";import{o as p,$ as se,y as ue,c as ce}from"./useFocusable-BTV2lCc9.js";import{a as de}from"./Link-CQB74Beb.js";import{r as o,R as c}from"./index-BbAIUH2N.js";import{$ as be}from"./useLocalizedStringFormatter-BrmR15lP.js";import{L as ne}from"./Link-TveTsma3.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DwWe6W7f.js";import"./clsx-B-dksMZM.js";import"./context-DC_sGW0u.js";import"./createLucideIcon-8wDOqnHv.js";var x={};x={breadcrumbs:"عناصر الواجهة"};var v={};v={breadcrumbs:"Трохи хляб"};var h={};h={breadcrumbs:"Popis cesty"};var g={};g={breadcrumbs:"Brødkrummer"};var C={};C={breadcrumbs:"Breadcrumbs"};var D={};D={breadcrumbs:"Πλοηγήσεις breadcrumb"};var B={};B={breadcrumbs:"Breadcrumbs"};var A={};A={breadcrumbs:"Migas de pan"};var E={};E={breadcrumbs:"Lingiread"};var k={};k={breadcrumbs:"Navigointilinkit"};var y={};y={breadcrumbs:"Chemin de navigation"};var P={};P={breadcrumbs:"שבילי ניווט"};var N={};N={breadcrumbs:"Navigacijski putovi"};var R={};R={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var _={};_={breadcrumbs:"탐색 표시"};var F={};F={breadcrumbs:"Naršymo kelias"};var S={};S={breadcrumbs:"Atpakaļceļi"};var J={};J={breadcrumbs:"Navigasjonsstier"};var I={};I={breadcrumbs:"Broodkruimels"};var T={};T={breadcrumbs:"Struktura nawigacyjna"};var z={};z={breadcrumbs:"Caminho detalhado"};var K={};K={breadcrumbs:"Categorias"};var M={};M={breadcrumbs:"Miez de pâine"};var U={};U={breadcrumbs:"Навигация"};var w={};w={breadcrumbs:"Navigačné prvky Breadcrumbs"};var O={};O={breadcrumbs:"Drobtine"};var G={};G={breadcrumbs:"Putanje navigacije"};var H={};H={breadcrumbs:"Sökvägar"};var V={};V={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var q={};q={breadcrumbs:"導覽列"};var Q={};Q={"ar-AE":x,"bg-BG":v,"cs-CZ":h,"da-DK":g,"de-DE":C,"el-GR":D,"en-US":B,"es-ES":A,"et-EE":E,"fi-FI":k,"fr-FR":y,"he-IL":P,"hr-HR":N,"hu-HU":R,"it-IT":j,"ja-JP":L,"ko-KR":_,"lt-LT":F,"lv-LV":S,"nb-NO":J,"nl-NL":I,"pl-PL":T,"pt-BR":z,"pt-PT":K,"ro-RO":M,"ru-RU":U,"sk-SK":w,"sl-SI":O,"sr-SP":G,"sv-SE":H,"tr-TR":V,"uk-UA":W,"zh-CN":Z,"zh-TW":q};function oe(r){return r&&r.__esModule?r.default:r}function ie(r){let{"aria-label":e,...a}=r,t=be(oe(Q),"@react-aria/breadcrumbs");return{navProps:{...p(a,{labelable:!0}),"aria-label":e||t.format("breadcrumbs")}}}const i=o.createContext(null),le=o.forwardRef(function(e,a){[e,a]=se(e,a,i);let{CollectionRoot:t}=o.useContext(ee),{navProps:s}=ie(e);return c.createElement(re,{content:c.createElement(ae,e)},d=>{var u;return c.createElement("ol",{ref:a,...s,slot:e.slot||void 0,style:e.style,className:(u=e.className)!==null&&u!==void 0?u:"react-aria-Breadcrumbs"},c.createElement(i.Provider,{value:e},c.createElement(t,{collection:d})))})}),fe=te("item",function(e,a,t){let s=t.nextKey==null,{isDisabled:d,onAction:u}=ue(i),Y={"aria-current":s?"page":null,isDisabled:d||s,onPress:()=>u==null?void 0:u(t.key)},l=ce({...t.props,children:t.rendered,values:{isDisabled:d||s,isCurrent:s},defaultClassName:"react-aria-Breadcrumb"});return c.createElement("li",{...p(e),...l,ref:a,"data-disabled":d||s||void 0,"data-current":s||void 0},c.createElement(de.Provider,{value:Y},l.children))}),$e='"../theme/tokens.css"',me='"Inter", sans-serif',pe="#1f1f1f",xe="_container_k9jic_4",ve={tokens:$e,display:me,gray150:pe,container:xe},X=({items:r})=>n.jsx(le,{className:ve.container,children:r.map((e,a)=>n.jsx(fe,{children:n.jsx(ne,{href:e.href,isDisabled:e.isDisabled,children:e.title})},e.title.toLocaleLowerCase()+a))});X.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const _e={component:X,title:"Components/Breadcrumbs",tags:["autodocs"]},b={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]}};var f,$,m;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Jag vill förlänga',
      href: '#'
    }, {
      title: 'Arbete',
      href: '#'
    }, {
      title: 'Anställd',
      href: '#'
    }, {
      title: 'Jag vill förlänga',
      href: '#'
    }, {
      title: 'Arbete',
      href: '#'
    }, {
      title: 'Anställd',
      href: '#'
    }, {
      title: 'Jag vill förlänga',
      href: '#'
    }, {
      title: 'Arbete',
      href: '#'
    }, {
      title: 'Anställd',
      href: '#'
    }]
  }
}`,...(m=($=b.parameters)==null?void 0:$.docs)==null?void 0:m.source}}};const Fe=["Primary"];export{b as Primary,Fe as __namedExportsOrder,_e as default};
