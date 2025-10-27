import{$ as S,r as k,j as y}from"./iframe-BwH-Lx90.js";import{C as s}from"./Calendar-CJVa7OAu.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-C89DuFYh.js";import"./Button-CEsLMfpT.js";import"./utils-BSoY4MwA.js";import"./clsx-B-dksMZM.js";import"./Hidden-D3dbG7PD.js";import"./useFocusRing-B_Nyktnx.js";import"./index-I6bFFxf8.js";import"./index-dwT5Nujc.js";import"./useLabels-vZhVJ9vJ.js";import"./useButton-PZzRaxvW.js";import"./RSPContexts-CQ6CkVKH.js";import"./Text-Dg0dTwoh.js";import"./useDateFormatter-DD666bqq.js";import"./useControlledState-mOHJX8bF.js";import"./useLocalizedStringFormatter-DZht3deX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-BKYepvD4.js";import"./useEvent-DI4G-SrA.js";import"./getScrollParent-Cb1Z8tsE.js";import"./scrollIntoView-CBoDrKk_.js";import"./useDescription-JivsosT5.js";import"./VisuallyHidden-1M8vW8LA.js";import"./clsx-Ciqy0D92.js";import"./Button-BizqGLk0.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-DAPiy3s_.js";import"./chevron-right-BWQrE6xM.js";import"./Heading-BBCtVWFE.js";import"./FieldError-BpTInOBt.js";import"./Text-C06sgJN_.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
