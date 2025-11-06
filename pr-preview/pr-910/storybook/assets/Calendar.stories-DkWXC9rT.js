import{$ as S,r as k,j as y}from"./iframe-P7vGAEPf.js";import{C as s}from"./Calendar-B-6f3NQx.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BuhurBqc.js";import"./Button-D-J3k31G.js";import"./utils-C4AsHK4M.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dd1MY3p8.js";import"./useFocusRing-Z18YPlKo.js";import"./index-BkwmXWKL.js";import"./index-B_mfWF_k.js";import"./useLabels-CRiZEYvW.js";import"./useButton-BqR4PLc1.js";import"./RSPContexts-D3POtDHv.js";import"./Text-Cr0XNUkF.js";import"./useDateFormatter-BntKGyvV.js";import"./useControlledState-B91FfRND.js";import"./useLocalizedStringFormatter-DmgwXs2T.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-V5e7vsOq.js";import"./useEvent-7z0Ak1sV.js";import"./getScrollParent-DS2trQpL.js";import"./scrollIntoView-BuIGknW7.js";import"./useDescription-752gTmDS.js";import"./VisuallyHidden-M2DcD3Mi.js";import"./clsx-Ciqy0D92.js";import"./Button-DY1ErDAz.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-ciePIdUU.js";import"./chevron-right-KtTlsCoC.js";import"./Heading-BNyZLvof.js";import"./FieldError-1QrZotGi.js";import"./Text-ByrMKtSv.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
