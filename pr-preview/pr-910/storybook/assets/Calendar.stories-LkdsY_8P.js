import{$ as S,r as k,j as y}from"./iframe-BNPU2RD9.js";import{C as s}from"./Calendar-D5pZEQgf.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-Dc_MqgGb.js";import"./Button-DAw_R2Cq.js";import"./utils-Bbv0K-E4.js";import"./clsx-B-dksMZM.js";import"./Hidden-BD2434_s.js";import"./useFocusRing-DWY18r7i.js";import"./index-ncgLMVEm.js";import"./index-LADeIPUW.js";import"./useLabels-CnVI-j1s.js";import"./useButton-mh303P8m.js";import"./RSPContexts-iVr-Bt_y.js";import"./Text-C6bkZg3Q.js";import"./useDateFormatter-DV8IVk9r.js";import"./useControlledState-Jm4zSMMC.js";import"./useLocalizedStringFormatter-BLJVHQVo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CJwSl1aN.js";import"./useEvent-BW_YZl41.js";import"./getScrollParent-Druzei2R.js";import"./scrollIntoView-BEpVchKx.js";import"./useDescription-BI0rSHsF.js";import"./VisuallyHidden-DOwMSwmn.js";import"./clsx-Ciqy0D92.js";import"./Button-C_nJVgGE.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-CHelv_kA.js";import"./chevron-right-CW2OOibK.js";import"./Heading-BzKa86qs.js";import"./FieldError-RRNeuoep.js";import"./Text-CUr2vUBT.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
