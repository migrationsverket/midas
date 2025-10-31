import{$ as S,r as k,j as y}from"./iframe-BAD2oBME.js";import{C as s}from"./Calendar-Bkavwh0U.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-DX8FwVlK.js";import"./Button-D3nLP1Qh.js";import"./utils-DDoAX05_.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOeF9HzD.js";import"./useFocusRing-CnvRr1yt.js";import"./index-BeUCRj-s.js";import"./index-Dq00JW0u.js";import"./useLabels-BH36IPYm.js";import"./useButton-BzcdgyTW.js";import"./RSPContexts-DCXN6GD4.js";import"./Text-DBGZ9VGo.js";import"./useDateFormatter-DKtypzvZ.js";import"./useControlledState-KqO0k409.js";import"./useLocalizedStringFormatter-CtFZRk8P.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-B0mlHk9-.js";import"./useEvent-BouCu6gS.js";import"./getScrollParent-BUIISbtX.js";import"./scrollIntoView-BAJSfBvH.js";import"./useDescription-CS-muIG2.js";import"./VisuallyHidden-C2WhNuEH.js";import"./clsx-Ciqy0D92.js";import"./Button-BcbcYxEj.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-KTzp_MKY.js";import"./chevron-right-CGW58ppM.js";import"./Heading-BrKguVub.js";import"./FieldError-DjZbBax_.js";import"./Text-mQ1mTn7E.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
