import{$ as S,r as k,j as y}from"./iframe-uM3qqLC1.js";import{C as s}from"./Calendar-BmHr1e0U.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-QrLQ0-gw.js";import"./Button-DoT16R3T.js";import"./utils-HBEDfByc.js";import"./clsx-B-dksMZM.js";import"./Hidden-ChuQCa3d.js";import"./useFocusRing-BSauiWtM.js";import"./index-C5wsGSUN.js";import"./index-BQhIt1Gf.js";import"./useLabels-BbpNPeJk.js";import"./useButton-DypzjKrp.js";import"./RSPContexts-wp9z8r7-.js";import"./Text-CN_gt17r.js";import"./useDateFormatter-DmjN4BAG.js";import"./useControlledState-B_Yl3B1s.js";import"./useLocalizedStringFormatter-BU3ytf7Q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-B6x6sWe_.js";import"./useEvent-BEHJp5pG.js";import"./getScrollParent-DBoSOlsB.js";import"./scrollIntoView-pXO9z5Y4.js";import"./useDescription-BOjEw7RY.js";import"./VisuallyHidden-BEDBVj9V.js";import"./clsx-Ciqy0D92.js";import"./Button-CRoPWYQa.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DguizvGn.js";import"./chevron-right-D2-bQkTl.js";import"./Heading-B6zBoIyn.js";import"./FieldError-fesfb5V0.js";import"./Text-DdIJpOEx.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
