import{j as o}from"./jsx-runtime-CBDCb4rg.js";import{b as ee,c as re,$ as ae,a as te}from"./Collection-BhSMiv7E.js";import{o as p,$ as se,y as ue,c as ce}from"./useFocusable-BFvoMS9y.js";import{a as de}from"./Link-BI5iYWNl.js";import{r as n,R as c}from"./index-B-o1Wr-g.js";import{$ as be}from"./useLocalizedStringFormatter-CABpxIsR.js";import{L as oe}from"./Link-C5AQAQQW.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Btf1eDe9.js";import"./clsx-B-dksMZM.js";import"./context-DFvSrY_x.js";import"./createLucideIcon-DjmUzaoT.js";var x={};x={breadcrumbs:"عناصر الواجهة"};var v={};v={breadcrumbs:"Трохи хляб"};var h={};h={breadcrumbs:"Popis cesty"};var g={};g={breadcrumbs:"Brødkrummer"};var C={};C={breadcrumbs:"Breadcrumbs"};var D={};D={breadcrumbs:"Πλοηγήσεις breadcrumb"};var B={};B={breadcrumbs:"Breadcrumbs"};var A={};A={breadcrumbs:"Migas de pan"};var E={};E={breadcrumbs:"Lingiread"};var k={};k={breadcrumbs:"Navigointilinkit"};var P={};P={breadcrumbs:"Chemin de navigation"};var N={};N={breadcrumbs:"שבילי ניווט"};var R={};R={breadcrumbs:"Navigacijski putovi"};var y={};y={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var _={};_={breadcrumbs:"탐색 표시"};var F={};F={breadcrumbs:"Naršymo kelias"};var S={};S={breadcrumbs:"Atpakaļceļi"};var J={};J={breadcrumbs:"Navigasjonsstier"};var I={};I={breadcrumbs:"Broodkruimels"};var T={};T={breadcrumbs:"Struktura nawigacyjna"};var z={};z={breadcrumbs:"Caminho detalhado"};var K={};K={breadcrumbs:"Categorias"};var M={};M={breadcrumbs:"Miez de pâine"};var U={};U={breadcrumbs:"Навигация"};var w={};w={breadcrumbs:"Navigačné prvky Breadcrumbs"};var O={};O={breadcrumbs:"Drobtine"};var G={};G={breadcrumbs:"Putanje navigacije"};var H={};H={breadcrumbs:"Sökvägar"};var V={};V={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var q={};q={breadcrumbs:"導覽列"};var Q={};Q={"ar-AE":x,"bg-BG":v,"cs-CZ":h,"da-DK":g,"de-DE":C,"el-GR":D,"en-US":B,"es-ES":A,"et-EE":E,"fi-FI":k,"fr-FR":P,"he-IL":N,"hr-HR":R,"hu-HU":y,"it-IT":j,"ja-JP":L,"ko-KR":_,"lt-LT":F,"lv-LV":S,"nb-NO":J,"nl-NL":I,"pl-PL":T,"pt-BR":z,"pt-PT":K,"ro-RO":M,"ru-RU":U,"sk-SK":w,"sl-SI":O,"sr-SP":G,"sv-SE":H,"tr-TR":V,"uk-UA":W,"zh-CN":Z,"zh-TW":q};function ne(r){return r&&r.__esModule?r.default:r}function le(r){let{"aria-label":e,...a}=r,t=be(ne(Q),"@react-aria/breadcrumbs");return{navProps:{...p(a,{labelable:!0}),"aria-label":e||t.format("breadcrumbs")}}}const l=n.createContext(null),ie=n.forwardRef(function(e,a){[e,a]=se(e,a,l);let{CollectionRoot:t}=n.useContext(re),{navProps:s}=le(e);return c.createElement(ae,{content:c.createElement(te,e)},d=>{var u;return c.createElement("ol",{ref:a,...s,slot:e.slot||void 0,style:e.style,className:(u=e.className)!==null&&u!==void 0?u:"react-aria-Breadcrumbs"},c.createElement(l.Provider,{value:e},c.createElement(t,{collection:d})))})}),fe=ee("item",function(e,a,t){let s=t.nextKey==null,{isDisabled:d,onAction:u}=ue(l),Y={"aria-current":s?"page":null,isDisabled:d||s,onPress:()=>u==null?void 0:u(t.key)},i=ce({...t.props,children:t.rendered,values:{isDisabled:d||s,isCurrent:s},defaultClassName:"react-aria-Breadcrumb"});return c.createElement("li",{...p(e),...i,ref:a,"data-disabled":d||s||void 0,"data-current":s||void 0},c.createElement(de.Provider,{value:Y},i.children))}),$e="_container_k9jic_4",me={container:$e},X=({items:r})=>o.jsx(ie,{className:me.container,children:r.map((e,a)=>o.jsx(fe,{children:o.jsx(oe,{href:e.href,isDisabled:e.isDisabled,children:e.title})},e.title.toLocaleLowerCase()+a))});X.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const ye={component:X,title:"Components/Breadcrumbs",tags:["autodocs"]},b={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]}};var f,$,m;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(m=($=b.parameters)==null?void 0:$.docs)==null?void 0:m.source}}};const je=["Primary"];export{b as Primary,je as __namedExportsOrder,ye as default};
