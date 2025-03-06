import{j as o}from"./jsx-runtime-DtgEGaVE.js";import{b as ee,$ as re,a as ae,d as te}from"./Collection-B65vjQb4.js";import{n as x,$ as se,B as ce,c as ue}from"./useFocusable-DTLHoeQe.js";import{a as de}from"./Link-D-7ck5zw.js";import{r as b,R as u}from"./index-BbAIUH2N.js";import{$ as ne}from"./useLocalizedStringFormatter-BfPjM0Dg.js";import{L as oe}from"./Link-nCOwpkq7.js";import{w as be,e as le}from"./index-DtSMq7G1.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DwWe6W7f.js";import"./clsx-B-dksMZM.js";import"./context-DVpahnpO.js";import"./createLucideIcon-8wDOqnHv.js";var v={};v={breadcrumbs:"عناصر الواجهة"};var h={};h={breadcrumbs:"Трохи хляб"};var g={};g={breadcrumbs:"Popis cesty"};var B={};B={breadcrumbs:"Brødkrummer"};var y={};y={breadcrumbs:"Breadcrumbs"};var C={};C={breadcrumbs:"Πλοηγήσεις breadcrumb"};var D={};D={breadcrumbs:"Breadcrumbs"};var E={};E={breadcrumbs:"Migas de pan"};var A={};A={breadcrumbs:"Lingiread"};var k={};k={breadcrumbs:"Navigointilinkit"};var P={};P={breadcrumbs:"Chemin de navigation"};var _={};_={breadcrumbs:"שבילי ניווט"};var R={};R={breadcrumbs:"Navigacijski putovi"};var N={};N={breadcrumbs:"Morzsamenü"};var j={};j={breadcrumbs:"Breadcrumb"};var L={};L={breadcrumbs:"パンくずリスト"};var F={};F={breadcrumbs:"탐색 표시"};var S={};S={breadcrumbs:"Naršymo kelias"};var J={};J={breadcrumbs:"Atpakaļceļi"};var T={};T={breadcrumbs:"Navigasjonsstier"};var w={};w={breadcrumbs:"Broodkruimels"};var I={};I={breadcrumbs:"Struktura nawigacyjna"};var M={};M={breadcrumbs:"Caminho detalhado"};var z={};z={breadcrumbs:"Categorias"};var K={};K={breadcrumbs:"Miez de pâine"};var U={};U={breadcrumbs:"Навигация"};var O={};O={breadcrumbs:"Navigačné prvky Breadcrumbs"};var G={};G={breadcrumbs:"Drobtine"};var H={};H={breadcrumbs:"Putanje navigacije"};var V={};V={breadcrumbs:"Sökvägar"};var q={};q={breadcrumbs:"İçerik haritaları"};var W={};W={breadcrumbs:"Навігаційна стежка"};var Z={};Z={breadcrumbs:"导航栏"};var Q={};Q={breadcrumbs:"導覽列"};var X={};X={"ar-AE":v,"bg-BG":h,"cs-CZ":g,"da-DK":B,"de-DE":y,"el-GR":C,"en-US":D,"es-ES":E,"et-EE":A,"fi-FI":k,"fr-FR":P,"he-IL":_,"hr-HR":R,"hu-HU":N,"it-IT":j,"ja-JP":L,"ko-KR":F,"lt-LT":S,"lv-LV":J,"nb-NO":T,"nl-NL":w,"pl-PL":I,"pt-BR":M,"pt-PT":z,"ro-RO":K,"ru-RU":U,"sk-SK":O,"sl-SI":G,"sr-SP":H,"sv-SE":V,"tr-TR":q,"uk-UA":W,"zh-CN":Z,"zh-TW":Q};function ie(r){return r&&r.__esModule?r.default:r}function fe(r){let{"aria-label":e,...a}=r,t=ne(ie(X),"@react-aria/breadcrumbs");return{navProps:{...x(a,{labelable:!0}),"aria-label":e||t.format("breadcrumbs")}}}const l=b.createContext(null),me=b.forwardRef(function(e,a){[e,a]=se(e,a,l);let{CollectionRoot:t}=b.useContext(ee),{navProps:s}=fe(e);return u.createElement(re,{content:u.createElement(ae,e)},d=>{var c;return u.createElement("ol",{ref:a,...s,slot:e.slot||void 0,style:e.style,className:(c=e.className)!==null&&c!==void 0?c:"react-aria-Breadcrumbs"},u.createElement(l.Provider,{value:e},u.createElement(t,{collection:d})))})}),$e=te("item",function(e,a,t){let s=t.nextKey==null,{isDisabled:d,onAction:c}=ce(l),Y={"aria-current":s?"page":null,isDisabled:d||s,onPress:()=>c==null?void 0:c(t.key)},f=ue({...t.props,children:t.rendered,values:{isDisabled:d||s,isCurrent:s},defaultClassName:"react-aria-Breadcrumb"});return u.createElement("li",{...x(e),...f,ref:a,"data-disabled":d||s||void 0,"data-current":s||void 0},u.createElement(de.Provider,{value:Y},f.children))}),pe='"../theme/tokens.css"',xe='"Inter", sans-serif',ve="#1f1f1f",he="_container_k9jic_4",ge={tokens:pe,display:xe,gray150:ve,container:he},i=({items:r})=>o.jsx(me,{className:ge.container,children:r.map((e,a)=>o.jsx($e,{children:o.jsx(oe,{href:e.href,isDisabled:e.isDisabled,children:e.title})},e.title.toLocaleLowerCase()+a))});try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MidasBreadcrumb[]"}}}}}catch{}const Je={component:i,title:"Components/Breadcrumbs",tags:["autodocs"]},n={args:{items:[{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"},{title:"Jag vill förlänga",href:"#"},{title:"Arbete",href:"#"},{title:"Anställd",href:"#"}]},play:async({canvasElement:r,step:e})=>{const a=be(r);e("it should should render successfully",async()=>{const t=a.getByRole("list");le(t).toBeTruthy()})}};var m,$,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    step('it should should render successfully', async () => {
      const breadcrumbs = canvas.getByRole('list');
      expect(breadcrumbs).toBeTruthy();
    });
  }
}`,...(p=($=n.parameters)==null?void 0:$.docs)==null?void 0:p.source}}};const Te=["Primary"];export{n as Primary,Te as __namedExportsOrder,Je as default};
