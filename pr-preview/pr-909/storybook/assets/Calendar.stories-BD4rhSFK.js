import{$ as S,r as k,j as y}from"./iframe-9wQrY9zG.js";import{C as s}from"./Calendar-BNS2xUjt.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Dr7PL8BU.js";import"./Button-CcConEX7.js";import"./utils-Ct0NP8oH.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWbsuBxz.js";import"./useFocusRing-CJHE3N5e.js";import"./index-CngVD_i4.js";import"./index-zTo9SEP5.js";import"./useLabels-CvyvtziS.js";import"./useButton-BifDqv96.js";import"./RSPContexts-DaBplACw.js";import"./Text-p8mTqcX0.js";import"./useDateFormatter-DHAC6xl3.js";import"./useControlledState-BoNh64tF.js";import"./useLocalizedStringFormatter-DgRXsYyn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-o-oT6hhM.js";import"./useEvent-CuyYpIiB.js";import"./getScrollParent-gRy3nDOQ.js";import"./scrollIntoView-PkI1aY2O.js";import"./useDescription-BF73wtY0.js";import"./VisuallyHidden-DUw__YaA.js";import"./clsx-Ciqy0D92.js";import"./Button-CqfDtPrC.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BLxQ-GJh.js";import"./chevron-right-BrNrqVO6.js";import"./Heading-Df6ituER.js";import"./FieldError-DVQ01JQe.js";import"./Text-DPBC4wEr.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
