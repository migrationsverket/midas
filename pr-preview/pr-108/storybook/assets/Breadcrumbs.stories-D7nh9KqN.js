import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{a as ee,c as re,$ as ae,b as te}from"./Collection-TFJR_E55.js";import{n as x,A as se,f as ce,$ as ue}from"./useFocusable-VocBF6K7.js";import{a as de}from"./Link-DTBCvxNE.js";import{r as l,R as u}from"./index-BwDkhjyp.js";import{$ as be}from"./useLocalizedStringFormatter-BTb93L0a.js";import{L as ne}from"./Link-yWuDSudb.js";import"./Hidden-C_TSN0PF.js";import"./index-Drt3gf4w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bb28N59q.js";import"./clsx-B-dksMZM.js";import"./context-Cc6IY3a2.js";var v={};v={breadcrumbs:"عناصر الواجهة"};var h={};h={breadcrumbs:"Трохи хляб"};var g={};g={breadcrumbs:"Popis cesty"};var B={};B={breadcrumbs:"Brødkrummer"};var C={};C={breadcrumbs:"Breadcrumbs"};var D={};D={breadcrumbs:"Πλοηγήσεις breadcrumb"};var A={};A={breadcrumbs:"Breadcrumbs"};var E={};E={breadcrumbs:"Migas de pan"};var y={};y={breadcrumbs:"Lingiread"};var k={};k={breadcrumbs:"Navigointilinkit"};var P={};P={breadcrumbs:"Chemin de navigation"};var _={};_={breadcrumbs:"שבילי ניווט"};var N={};N={breadcrumbs:"Navigacijski putovi"};var R={};R={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var F={};F={breadcrumbs:"탐색 표시"};var S={};S={breadcrumbs:"Naršymo kelias"};var J={};J={breadcrumbs:"Atpakaļceļi"};var I={};I={breadcrumbs:"Navigasjonsstier"};var M={};M={breadcrumbs:"Broodkruimels"};var T={};T={breadcrumbs:"Struktura nawigacyjna"};var z={};z={breadcrumbs:"Caminho detalhado"};var K={};K={breadcrumbs:"Categorias"};var U={};U={breadcrumbs:"Miez de pâine"};var w={};w={breadcrumbs:"Навигация"};var O={};O={breadcrumbs:"Navigačné prvky Breadcrumbs"};var G={};G={breadcrumbs:"Drobtine"};var H={};H={breadcrumbs:"Putanje navigacije"};var V={};V={breadcrumbs:"Sökvägar"};var q={};q={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var Q={};Q={breadcrumbs:"導覽列"};var X={};X={"ar-AE":v,"bg-BG":h,"cs-CZ":g,"da-DK":B,"de-DE":C,"el-GR":D,"en-US":A,"es-ES":E,"et-EE":y,"fi-FI":k,"fr-FR":P,"he-IL":_,"hr-HR":N,"hu-HU":R,"it-IT":j,"ja-JP":L,"ko-KR":F,"lt-LT":S,"lv-LV":J,"nb-NO":I,"nl-NL":M,"pl-PL":T,"pt-BR":z,"pt-PT":K,"ro-RO":U,"ru-RU":w,"sk-SK":O,"sl-SI":G,"sr-SP":H,"sv-SE":V,"tr-TR":q,"uk-UA":W,"zh-CN":Z,"zh-TW":Q};function oe(e){return e&&e.__esModule?e.default:e}function ie(e){let{"aria-label":r,...s}=e,a=be(oe(X),"@react-aria/breadcrumbs");return{navProps:{...x(s,{labelable:!0}),"aria-label":r||a.format("breadcrumbs")}}}const o=l.createContext(null);function le(e,r){[e,r]=ue(e,r,o);let{CollectionRoot:s}=l.useContext(re),{navProps:a}=ie(e);return u.createElement(ae,{content:u.createElement(te,e)},t=>{var c;return u.createElement("ol",{ref:r,...a,slot:e.slot||void 0,style:e.style,className:(c=e.className)!==null&&c!==void 0?c:"react-aria-Breadcrumbs"},u.createElement(o.Provider,{value:e},u.createElement(s,{collection:t})))})}const fe=l.forwardRef(le),$e=ee("item",function(r,s,a){let t=a.nextKey==null,{isDisabled:c,onAction:b}=se(o),Y={"aria-current":t?"page":null,isDisabled:c||t,onPress:()=>b==null?void 0:b(a.key)},f=ce({...a.props,children:a.rendered,values:{isDisabled:c||t,isCurrent:t},defaultClassName:"react-aria-Breadcrumb"});return u.createElement("li",{...x(r),...f,ref:s,"data-disabled":c||t||void 0,"data-current":t||void 0},u.createElement(de.Provider,{value:Y},f.children))}),me='"../../../theme/src/lib/tokens.css"',pe='"Inter", sans-serif',xe="#1f1f1f",ve="_container_1219g_4",he={tokens:me,display:pe,gray150:xe,container:ve},i=({items:e})=>n.jsx(fe,{className:he.container,children:e.map((r,s)=>n.jsx($e,{children:n.jsx(ne,{href:r.href,isDisabled:r.isDisabled,children:r.title})},r.title.toLocaleLowerCase()+s))});try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MidasBreadcrumb[]"}}}}}catch{}const Le={component:i,title:"Components/Breadcrumbs",tags:["autodocs"]},d={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]}};var $,m,p;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Fe=["Primary"];export{d as Primary,Fe as __namedExportsOrder,Le as default};
