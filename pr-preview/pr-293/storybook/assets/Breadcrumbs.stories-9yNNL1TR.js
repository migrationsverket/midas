import{j as b}from"./jsx-runtime-DtgEGaVE.js";import{b as ee,$ as re,a as ae,d as te}from"./Collection-B65vjQb4.js";import{n as x,$ as se,B as ue,c as ce}from"./useFocusable-DTLHoeQe.js";import{a as de}from"./Link-D-7ck5zw.js";import{r as o,R as c}from"./index-BbAIUH2N.js";import{$ as ne}from"./useLocalizedStringFormatter-BfPjM0Dg.js";import{L as be}from"./Link-nCOwpkq7.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DwWe6W7f.js";import"./clsx-B-dksMZM.js";import"./context-DVpahnpO.js";import"./createLucideIcon-8wDOqnHv.js";var v={};v={breadcrumbs:"عناصر الواجهة"};var h={};h={breadcrumbs:"Трохи хляб"};var g={};g={breadcrumbs:"Popis cesty"};var B={};B={breadcrumbs:"Brødkrummer"};var C={};C={breadcrumbs:"Breadcrumbs"};var D={};D={breadcrumbs:"Πλοηγήσεις breadcrumb"};var A={};A={breadcrumbs:"Breadcrumbs"};var E={};E={breadcrumbs:"Migas de pan"};var k={};k={breadcrumbs:"Lingiread"};var y={};y={breadcrumbs:"Navigointilinkit"};var P={};P={breadcrumbs:"Chemin de navigation"};var _={};_={breadcrumbs:"שבילי ניווט"};var N={};N={breadcrumbs:"Navigacijski putovi"};var R={};R={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var F={};F={breadcrumbs:"탐색 표시"};var S={};S={breadcrumbs:"Naršymo kelias"};var J={};J={breadcrumbs:"Atpakaļceļi"};var I={};I={breadcrumbs:"Navigasjonsstier"};var M={};M={breadcrumbs:"Broodkruimels"};var T={};T={breadcrumbs:"Struktura nawigacyjna"};var z={};z={breadcrumbs:"Caminho detalhado"};var K={};K={breadcrumbs:"Categorias"};var U={};U={breadcrumbs:"Miez de pâine"};var w={};w={breadcrumbs:"Навигация"};var O={};O={breadcrumbs:"Navigačné prvky Breadcrumbs"};var G={};G={breadcrumbs:"Drobtine"};var H={};H={breadcrumbs:"Putanje navigacije"};var V={};V={breadcrumbs:"Sökvägar"};var q={};q={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var Q={};Q={breadcrumbs:"導覽列"};var X={};X={"ar-AE":v,"bg-BG":h,"cs-CZ":g,"da-DK":B,"de-DE":C,"el-GR":D,"en-US":A,"es-ES":E,"et-EE":k,"fi-FI":y,"fr-FR":P,"he-IL":_,"hr-HR":N,"hu-HU":R,"it-IT":j,"ja-JP":L,"ko-KR":F,"lt-LT":S,"lv-LV":J,"nb-NO":I,"nl-NL":M,"pl-PL":T,"pt-BR":z,"pt-PT":K,"ro-RO":U,"ru-RU":w,"sk-SK":O,"sl-SI":G,"sr-SP":H,"sv-SE":V,"tr-TR":q,"uk-UA":W,"zh-CN":Z,"zh-TW":Q};function oe(r){return r&&r.__esModule?r.default:r}function ie(r){let{"aria-label":e,...a}=r,t=ne(oe(X),"@react-aria/breadcrumbs");return{navProps:{...x(a,{labelable:!0}),"aria-label":e||t.format("breadcrumbs")}}}const i=o.createContext(null),le=o.forwardRef(function(e,a){[e,a]=se(e,a,i);let{CollectionRoot:t}=o.useContext(ee),{navProps:s}=ie(e);return c.createElement(re,{content:c.createElement(ae,e)},d=>{var u;return c.createElement("ol",{ref:a,...s,slot:e.slot||void 0,style:e.style,className:(u=e.className)!==null&&u!==void 0?u:"react-aria-Breadcrumbs"},c.createElement(i.Provider,{value:e},c.createElement(t,{collection:d})))})}),fe=te("item",function(e,a,t){let s=t.nextKey==null,{isDisabled:d,onAction:u}=ue(i),Y={"aria-current":s?"page":null,isDisabled:d||s,onPress:()=>u==null?void 0:u(t.key)},f=ce({...t.props,children:t.rendered,values:{isDisabled:d||s,isCurrent:s},defaultClassName:"react-aria-Breadcrumb"});return c.createElement("li",{...x(e),...f,ref:a,"data-disabled":d||s||void 0,"data-current":s||void 0},c.createElement(de.Provider,{value:Y},f.children))}),$e='"../theme/tokens.css"',me='"Inter", sans-serif',pe="#1f1f1f",xe="_container_k9jic_4",ve={tokens:$e,display:me,gray150:pe,container:xe},l=({items:r})=>b.jsx(le,{className:ve.container,children:r.map((e,a)=>b.jsx(fe,{children:b.jsx(be,{href:e.href,isDisabled:e.isDisabled,children:e.title})},e.title.toLocaleLowerCase()+a))});try{l.displayName="Breadcrumbs",l.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MidasBreadcrumb[]"}}}}}catch{}const Le={component:l,title:"Components/Breadcrumbs",tags:["autodocs"]},n={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]}};var $,m,p;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Fe=["Primary"];export{n as Primary,Fe as __namedExportsOrder,Le as default};
