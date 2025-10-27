import{$ as S,r as k,j as y}from"./iframe-BUv19Pfm.js";import{C as s}from"./Calendar-DDSv1V1R.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DpQEV_KV.js";import"./Button-Bnuz47IZ.js";import"./utils-wWdqzEgH.js";import"./clsx-B-dksMZM.js";import"./Hidden-ibpybbWV.js";import"./useFocusRing-BLpf4bXn.js";import"./index-Oaftp3y1.js";import"./index-C0mmQlW6.js";import"./useLabels-8eOjNWa3.js";import"./useButton-DTRM6duW.js";import"./RSPContexts-oPcm55Gc.js";import"./Text-DqfUBUk_.js";import"./useDateFormatter-yxVFlQtq.js";import"./useControlledState-D20wQpuO.js";import"./useLocalizedStringFormatter-BEZuMr3D.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BHub5D10.js";import"./useEvent-CChhRtjC.js";import"./getScrollParent-BYz-ejQ6.js";import"./scrollIntoView-CBbya3YB.js";import"./useDescription-L2Otz7rx.js";import"./VisuallyHidden-8tTSqkmf.js";import"./clsx-Ciqy0D92.js";import"./Button-DW5K109X.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-Dr9gusPm.js";import"./chevron-right-Bib_YMsT.js";import"./Heading-Cgxh7xOL.js";import"./FieldError-Cw8Gf3T5.js";import"./Text-CgVBjen3.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
