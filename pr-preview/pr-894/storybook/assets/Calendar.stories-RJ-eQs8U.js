import{$ as S,r as k,j as y}from"./iframe-C1xkKcfZ.js";import{C as s}from"./Calendar-Brsdxuon.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-CVDfiyXB.js";import"./Button-3GQO97zm.js";import"./utils-CIwcQmyM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CP0qe3cu.js";import"./useFocusRing-BisJsM0Y.js";import"./index-m-lDxEOy.js";import"./index-DbI_VynI.js";import"./useLabels-DecHiXST.js";import"./useButton-Dsc1RD5R.js";import"./RSPContexts-ClEziChI.js";import"./Text-CMQFVGEq.js";import"./useDateFormatter-L-fQ_d3M.js";import"./useControlledState-B5NDMWqh.js";import"./useLocalizedStringFormatter-zf0PXjQ3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CJvx5dE3.js";import"./useEvent-CXA8x_uh.js";import"./getScrollParent-VUJGe-lS.js";import"./scrollIntoView-C6qeH3Y-.js";import"./useDescription-Cv4ZGqtk.js";import"./VisuallyHidden-DMZktvKr.js";import"./clsx-Ciqy0D92.js";import"./Button-BbFNfB1b.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-a3ujvLJc.js";import"./chevron-right-TI-QnjHV.js";import"./Heading-BYGGaevl.js";import"./FieldError-Cl8Vhntk.js";import"./Text-CPFq_c7k.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ar=["Primary","Disabled","Invalid","UnavailableWeekends"];export{e as Disabled,o as Invalid,r as Primary,a as UnavailableWeekends,ar as __namedExportsOrder,or as default};
