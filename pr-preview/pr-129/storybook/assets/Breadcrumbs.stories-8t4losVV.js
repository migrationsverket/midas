import{j as o}from"./jsx-runtime-CfatFE5O.js";import{a as ee,c as re,$ as ae,b as te}from"./Collection-Ds_E47gG.js";import{m as x,A as se,f as ce,$ as ue}from"./useFocusable-CumRtMek.js";import{a as de}from"./Link-jczcf95z.js";import{r as l,R as u}from"./index-ClcD9ViR.js";import{$ as be}from"./useLocalizedStringFormatter-CJQ2YW_-.js";import{L as oe}from"./Link-CCVdKers.js";import"./Hidden-BDrfkcGl.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvHoLfqc.js";import"./clsx-B-dksMZM.js";import"./context-B-CHLIzY.js";import"./createLucideIcon-DQK9Z80p.js";var v={};v={breadcrumbs:"عناصر الواجهة"};var h={};h={breadcrumbs:"Трохи хляб"};var g={};g={breadcrumbs:"Popis cesty"};var B={};B={breadcrumbs:"Brødkrummer"};var C={};C={breadcrumbs:"Breadcrumbs"};var D={};D={breadcrumbs:"Πλοηγήσεις breadcrumb"};var A={};A={breadcrumbs:"Breadcrumbs"};var E={};E={breadcrumbs:"Migas de pan"};var y={};y={breadcrumbs:"Lingiread"};var k={};k={breadcrumbs:"Navigointilinkit"};var P={};P={breadcrumbs:"Chemin de navigation"};var _={};_={breadcrumbs:"שבילי ניווט"};var N={};N={breadcrumbs:"Navigacijski putovi"};var R={};R={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var F={};F={breadcrumbs:"탐색 표시"};var S={};S={breadcrumbs:"Naršymo kelias"};var J={};J={breadcrumbs:"Atpakaļceļi"};var I={};I={breadcrumbs:"Navigasjonsstier"};var z={};z={breadcrumbs:"Broodkruimels"};var M={};M={breadcrumbs:"Struktura nawigacyjna"};var T={};T={breadcrumbs:"Caminho detalhado"};var K={};K={breadcrumbs:"Categorias"};var U={};U={breadcrumbs:"Miez de pâine"};var w={};w={breadcrumbs:"Навигация"};var O={};O={breadcrumbs:"Navigačné prvky Breadcrumbs"};var G={};G={breadcrumbs:"Drobtine"};var H={};H={breadcrumbs:"Putanje navigacije"};var V={};V={breadcrumbs:"Sökvägar"};var q={};q={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var Q={};Q={breadcrumbs:"導覽列"};var X={};X={"ar-AE":v,"bg-BG":h,"cs-CZ":g,"da-DK":B,"de-DE":C,"el-GR":D,"en-US":A,"es-ES":E,"et-EE":y,"fi-FI":k,"fr-FR":P,"he-IL":_,"hr-HR":N,"hu-HU":R,"it-IT":j,"ja-JP":L,"ko-KR":F,"lt-LT":S,"lv-LV":J,"nb-NO":I,"nl-NL":z,"pl-PL":M,"pt-BR":T,"pt-PT":K,"ro-RO":U,"ru-RU":w,"sk-SK":O,"sl-SI":G,"sr-SP":H,"sv-SE":V,"tr-TR":q,"uk-UA":W,"zh-CN":Z,"zh-TW":Q};function ne(e){return e&&e.__esModule?e.default:e}function ie(e){let{"aria-label":r,...s}=e,a=be(ne(X),"@react-aria/breadcrumbs");return{navProps:{...x(s,{labelable:!0}),"aria-label":r||a.format("breadcrumbs")}}}const n=l.createContext(null);function le(e,r){[e,r]=ue(e,r,n);let{CollectionRoot:s}=l.useContext(re),{navProps:a}=ie(e);return u.createElement(ae,{content:u.createElement(te,e)},t=>{var c;return u.createElement("ol",{ref:r,...a,slot:e.slot||void 0,style:e.style,className:(c=e.className)!==null&&c!==void 0?c:"react-aria-Breadcrumbs"},u.createElement(n.Provider,{value:e},u.createElement(s,{collection:t})))})}const fe=l.forwardRef(le),$e=ee("item",function(r,s,a){let t=a.nextKey==null,{isDisabled:c,onAction:b}=se(n),Y={"aria-current":t?"page":null,isDisabled:c||t,onPress:()=>b==null?void 0:b(a.key)},f=ce({...a.props,children:a.rendered,values:{isDisabled:c||t,isCurrent:t},defaultClassName:"react-aria-Breadcrumb"});return u.createElement("li",{...x(r),...f,ref:s,"data-disabled":c||t||void 0,"data-current":t||void 0},u.createElement(de.Provider,{value:Y},f.children))}),me='"../../../theme/src/lib/tokens.css"',pe='"Inter", sans-serif',xe="#1f1f1f",ve="_container_g1nfz_4",he={tokens:me,display:pe,gray150:xe,container:ve},i=({items:e})=>o.jsx(fe,{className:he.container,children:e.map((r,s)=>o.jsx($e,{children:o.jsx(oe,{href:r.href,isDisabled:r.isDisabled,children:r.title})},r.title.toLocaleLowerCase()+s))});try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MidasBreadcrumb[]"}}}}}catch{}const Fe={component:i,title:"Components/Breadcrumbs",tags:["autodocs"]},d={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]}};var $,m,p;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Se=["Primary"];export{d as Primary,Se as __namedExportsOrder,Fe as default};