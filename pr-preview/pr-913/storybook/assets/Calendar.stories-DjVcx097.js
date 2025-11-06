import{$ as S,r as k,j as y}from"./iframe-BK4BwmKq.js";import{C as s}from"./Calendar-aGVtOFjs.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-C6ctYovZ.js";import"./Button-DGeDhjgN.js";import"./utils-BP7BScAh.js";import"./clsx-B-dksMZM.js";import"./Hidden-AX6UhX2n.js";import"./useFocusRing-ozrB5mgy.js";import"./index-CO8NcyIM.js";import"./index-D5OE4sho.js";import"./useLabels-Rxot5ufl.js";import"./useButton-LpXCSEu1.js";import"./RSPContexts-NqcdADeO.js";import"./Text-CcAUJWh3.js";import"./useDateFormatter-BDzkiFET.js";import"./useControlledState-CMke2wqe.js";import"./useLocalizedStringFormatter-CmK81N45.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-_BJ1bh67.js";import"./useEvent-D9ykXVAs.js";import"./getScrollParent-Bk0MkW9i.js";import"./scrollIntoView-B9WQNtZu.js";import"./useDescription-CpAuGt8A.js";import"./VisuallyHidden-DMqxn5ui.js";import"./clsx-Ciqy0D92.js";import"./Button-GkidKpkY.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-uVjZM-p7.js";import"./chevron-right-BUuciig4.js";import"./Heading-C9AAkBGE.js";import"./FieldError-8BQoXSKI.js";import"./Text-Cd8SAJrp.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
