import{$ as S,r as k,j as y}from"./iframe-DtxoFKwo.js";import{C as s}from"./Calendar-B4ujA76p.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-CRoS_bGd.js";import"./Button-BE_Do470.js";import"./utils-DIWkIshB.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHiOEcku.js";import"./useFocusRing-CdyWXIln.js";import"./index-CtRPRv0Z.js";import"./index-B505Biom.js";import"./useLabels-D54vKqlx.js";import"./useButton-mneyLtoN.js";import"./RSPContexts-XAz2G-XR.js";import"./Text-D4YkJF8T.js";import"./useDateFormatter-CDTxrw_P.js";import"./useControlledState-Cf9Dm7V0.js";import"./useLocalizedStringFormatter-CQ08zqg5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DTKFOHkj.js";import"./useEvent-otJ549iY.js";import"./getScrollParent-Bw9ZEnJh.js";import"./scrollIntoView-WFVR6_rQ.js";import"./useDescription-Dpo2AssW.js";import"./VisuallyHidden-Cxgi0rpi.js";import"./clsx-Ciqy0D92.js";import"./Button-B7Jqdyxh.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-Ba6NwseB.js";import"./chevron-right-BpC8tecC.js";import"./Heading-CYUOCyeI.js";import"./FieldError-BDMwdtmq.js";import"./Text-CZZKswuy.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
