import{$ as S,r as k,j as y}from"./iframe-Cr4WfoQu.js";import{C as s}from"./Calendar-CXd5VxFM.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-C9bWqaQL.js";import"./Button-CWNWBCLL.js";import"./utils-DHqaSaah.js";import"./clsx-B-dksMZM.js";import"./Hidden-y5xVPkEo.js";import"./useFocusRing-A0Iejy3t.js";import"./index-ahcTeaoi.js";import"./index-Cl3XFRZD.js";import"./useLabels-D5cPIeJx.js";import"./useButton-Cn1nrHEi.js";import"./RSPContexts-hqjNZRiO.js";import"./Text-CLBerHO9.js";import"./useDateFormatter-B0rY-bUo.js";import"./useControlledState-CJTE2atU.js";import"./useLocalizedStringFormatter-DL8Gx4OI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DmbLZLMU.js";import"./useEvent-D78zWiNU.js";import"./getScrollParent-D1z4-oxg.js";import"./scrollIntoView-DBzOrzZT.js";import"./useDescription-DyKVOJrP.js";import"./VisuallyHidden-8S_NTlsa.js";import"./clsx-Ciqy0D92.js";import"./Button-DVboz95x.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-Dwgci-K1.js";import"./chevron-right-CqyaNNVM.js";import"./Heading-B9tC5tD_.js";import"./FieldError-DwFat6Pu.js";import"./Text-XRFpH-QD.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
