import{j as o}from"./jsx-runtime-CBDCb4rg.js";import{b as ee,c as re,$ as ae,a as te}from"./Collection-DVrKtIZX.js";import{p as x,$ as se,z as ue,c as ce}from"./useFocusable-B8HhqQIl.js";import{a as de}from"./Link-sqMiXbJS.js";import{r as n,R as c}from"./index-B-o1Wr-g.js";import{$ as be}from"./useLocalizedStringFormatter-4pChcv_1.js";import{L as oe}from"./Link-DBMihZ04.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Btf1eDe9.js";import"./clsx-B-dksMZM.js";import"./context-e_uznqlg.js";import"./createLucideIcon-DjmUzaoT.js";var v={};v={breadcrumbs:"عناصر الواجهة"};var h={};h={breadcrumbs:"Трохи хляб"};var g={};g={breadcrumbs:"Popis cesty"};var B={};B={breadcrumbs:"Brødkrummer"};var C={};C={breadcrumbs:"Breadcrumbs"};var D={};D={breadcrumbs:"Πλοηγήσεις breadcrumb"};var A={};A={breadcrumbs:"Breadcrumbs"};var E={};E={breadcrumbs:"Migas de pan"};var k={};k={breadcrumbs:"Lingiread"};var P={};P={breadcrumbs:"Navigointilinkit"};var _={};_={breadcrumbs:"Chemin de navigation"};var y={};y={breadcrumbs:"שבילי ניווט"};var N={};N={breadcrumbs:"Navigacijski putovi"};var R={};R={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var F={};F={breadcrumbs:"탐색 표시"};var S={};S={breadcrumbs:"Naršymo kelias"};var J={};J={breadcrumbs:"Atpakaļceļi"};var z={};z={breadcrumbs:"Navigasjonsstier"};var I={};I={breadcrumbs:"Broodkruimels"};var M={};M={breadcrumbs:"Struktura nawigacyjna"};var T={};T={breadcrumbs:"Caminho detalhado"};var K={};K={breadcrumbs:"Categorias"};var U={};U={breadcrumbs:"Miez de pâine"};var w={};w={breadcrumbs:"Навигация"};var O={};O={breadcrumbs:"Navigačné prvky Breadcrumbs"};var G={};G={breadcrumbs:"Drobtine"};var H={};H={breadcrumbs:"Putanje navigacije"};var V={};V={breadcrumbs:"Sökvägar"};var q={};q={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var Q={};Q={breadcrumbs:"導覽列"};var X={};X={"ar-AE":v,"bg-BG":h,"cs-CZ":g,"da-DK":B,"de-DE":C,"el-GR":D,"en-US":A,"es-ES":E,"et-EE":k,"fi-FI":P,"fr-FR":_,"he-IL":y,"hr-HR":N,"hu-HU":R,"it-IT":j,"ja-JP":L,"ko-KR":F,"lt-LT":S,"lv-LV":J,"nb-NO":z,"nl-NL":I,"pl-PL":M,"pt-BR":T,"pt-PT":K,"ro-RO":U,"ru-RU":w,"sk-SK":O,"sl-SI":G,"sr-SP":H,"sv-SE":V,"tr-TR":q,"uk-UA":W,"zh-CN":Z,"zh-TW":Q};function ne(r){return r&&r.__esModule?r.default:r}function ie(r){let{"aria-label":e,...a}=r,t=be(ne(X),"@react-aria/breadcrumbs");return{navProps:{...x(a,{labelable:!0}),"aria-label":e||t.format("breadcrumbs")}}}const i=n.createContext(null),le=n.forwardRef(function(e,a){[e,a]=se(e,a,i);let{CollectionRoot:t}=n.useContext(re),{navProps:s}=ie(e);return c.createElement(ae,{content:c.createElement(te,e)},d=>{var u;return c.createElement("ol",{ref:a,...s,slot:e.slot||void 0,style:e.style,className:(u=e.className)!==null&&u!==void 0?u:"react-aria-Breadcrumbs"},c.createElement(i.Provider,{value:e},c.createElement(t,{collection:d})))})}),fe=ee("item",function(e,a,t){let s=t.nextKey==null,{isDisabled:d,onAction:u}=ue(i),Y={"aria-current":s?"page":null,isDisabled:d||s,onPress:()=>u==null?void 0:u(t.key)},f=ce({...t.props,children:t.rendered,values:{isDisabled:d||s,isCurrent:s},defaultClassName:"react-aria-Breadcrumb"});return c.createElement("li",{...x(e),...f,ref:a,"data-disabled":d||s||void 0,"data-current":s||void 0},c.createElement(de.Provider,{value:Y},f.children))}),$e="_container_k9jic_4",me={container:$e},l=({items:r})=>o.jsx(le,{className:me.container,children:r.map((e,a)=>o.jsx(fe,{children:o.jsx(oe,{href:e.href,isDisabled:e.isDisabled,children:e.title})},e.title.toLocaleLowerCase()+a))});try{l.displayName="Breadcrumbs",l.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MidasBreadcrumb[]"}}}}}catch{}const Ne={component:l,title:"Components/Breadcrumbs",tags:["autodocs"]},b={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]}};var $,m,p;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(p=(m=b.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Re=["Primary"];export{b as Primary,Re as __namedExportsOrder,Ne as default};
