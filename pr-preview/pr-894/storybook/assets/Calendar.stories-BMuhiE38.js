import{$ as S,r as k,j as y}from"./iframe-gK1_N6qS.js";import{C as s}from"./Calendar-DijLlRib.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Cv_Ibn4C.js";import"./Button-SpLOdCu_.js";import"./utils-BoLO2M80.js";import"./clsx-B-dksMZM.js";import"./Hidden-CoJp1EvR.js";import"./useFocusRing-Ba82UfpZ.js";import"./index-BjzeHDTh.js";import"./index-D3i9FaRc.js";import"./useLabels-Bfmg59OJ.js";import"./useButton-Ghph8APF.js";import"./RSPContexts-IUkIF0MY.js";import"./Text-DCRa_ZDz.js";import"./useDateFormatter-D0VM0NiL.js";import"./useControlledState-grVJNrHE.js";import"./useLocalizedStringFormatter-CeDCq_Ye.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BhnfVIGm.js";import"./useEvent-_9tPrreA.js";import"./getScrollParent-CA2eFQOC.js";import"./scrollIntoView-a32w2YNi.js";import"./useDescription-Blhl2KNR.js";import"./VisuallyHidden-BjqTXMpW.js";import"./clsx-Ciqy0D92.js";import"./Button-CPX1ZHTP.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-O4guha0-.js";import"./chevron-right-OkWSSIAY.js";import"./Heading-BR7P4A7g.js";import"./FieldError-BHzOfjZ2.js";import"./Text-WgxXKuVv.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
