import{$ as S,r as k,j as y}from"./iframe-nNM2zXEP.js";import{C as s}from"./Calendar-bBP0E8yg.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DyrJuYPC.js";import"./Button-Deh_MhmS.js";import"./utils-CofUL2gS.js";import"./clsx-B-dksMZM.js";import"./Hidden-CdvTVZFK.js";import"./useFocusRing-l6Yplvhj.js";import"./index-BOQeLQop.js";import"./index-BGt-FRei.js";import"./useLabels-zQ-ioPUi.js";import"./useButton-BxeB6HSS.js";import"./RSPContexts-D3DeOn11.js";import"./Text-CAaaXfLw.js";import"./useDateFormatter-B40eU3Bx.js";import"./useControlledState-UqYS5nUc.js";import"./useLocalizedStringFormatter-GZsnVnJn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-CMS7ekYp.js";import"./useEvent-C6j8zE_7.js";import"./getScrollParent-CHL_LitK.js";import"./scrollIntoView-BQxKqSzx.js";import"./useDescription-BMiCs1Q5.js";import"./VisuallyHidden-BQwCvnVa.js";import"./clsx-Ciqy0D92.js";import"./Button-DatXIA1i.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-C8elrRh4.js";import"./chevron-right-CsFFaKXy.js";import"./Heading-CQP-D84S.js";import"./FieldError-QnkOU3Hp.js";import"./Text-Bhbxhu-m.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
