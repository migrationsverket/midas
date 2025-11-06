import{$ as S,r as k,j as y}from"./iframe-BxABzvsr.js";import{C as s}from"./Calendar-ByUzQa1f.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-BXvextw0.js";import"./Button-CQqQcPYq.js";import"./utils-BhUqFzNj.js";import"./clsx-B-dksMZM.js";import"./Hidden-CuvaBcVJ.js";import"./useFocusRing-COIxRXK5.js";import"./index-C3YMpM8e.js";import"./index-DtAlXBW-.js";import"./useLabels-Dm2JA2a8.js";import"./useButton-7P-vX4FP.js";import"./RSPContexts-BGVLssUF.js";import"./Text-CnoN3EMi.js";import"./useDateFormatter-BepI2mJH.js";import"./useControlledState-Cm49iVED.js";import"./useLocalizedStringFormatter-CXKuKS0e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BLuvENfD.js";import"./useEvent-CGgHwB68.js";import"./getScrollParent-CBAn_BEw.js";import"./scrollIntoView-B3x4tWZO.js";import"./useDescription-BC5U6Sl2.js";import"./VisuallyHidden-CNA-4Q6l.js";import"./clsx-Ciqy0D92.js";import"./Button-ba5vxjeM.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DJpot9Rw.js";import"./chevron-right-DfAyULEk.js";import"./Heading-CsP7xGGQ.js";import"./FieldError-m9ZGUe0y.js";import"./Text-aSELrP8c.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
