import{$ as S,r as k,j as y}from"./iframe-Cda3lYJ5.js";import{C as s}from"./Calendar-DB_zUEhE.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DQ49BI44.js";import"./Button-D8D8PjNo.js";import"./utils-B37MiCy-.js";import"./clsx-B-dksMZM.js";import"./Hidden-Drd1oYtq.js";import"./useFocusRing-qxJMSdl4.js";import"./index-DR8SmJ9z.js";import"./index-Bum8_rPP.js";import"./useLabels-CF0q-n_g.js";import"./useButton-DT6XtdxM.js";import"./RSPContexts-Cq6nLQIu.js";import"./Text-wVSZCUEv.js";import"./useDateFormatter-DpxNQ7Pf.js";import"./useControlledState--bhftPx-.js";import"./useLocalizedStringFormatter-7kHjTTHP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-DEH2X-Se.js";import"./useEvent-Bd_m2_rp.js";import"./getScrollParent-lWuACJzg.js";import"./scrollIntoView-CmVJJQVv.js";import"./useDescription-DvxOexdT.js";import"./VisuallyHidden-HwlOoIXR.js";import"./clsx-Ciqy0D92.js";import"./Button-C29Mqe4M.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-BXWKhSvD.js";import"./chevron-right-C1xtZWJR.js";import"./Heading-B80yNP41.js";import"./FieldError-CN0JwA9_.js";import"./Text-CsATnSke.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
