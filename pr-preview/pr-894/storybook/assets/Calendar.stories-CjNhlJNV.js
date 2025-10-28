import{$ as S,r as k,j as y}from"./iframe-DSbaXIhm.js";import{C as s}from"./Calendar-D7zXq5um.js";import"./preload-helper-Dp1pzeXC.js";import"./CalendarHeader-qJqNb59N.js";import"./Button-BD-4S3jw.js";import"./utils-BurnuwBa.js";import"./clsx-B-dksMZM.js";import"./Hidden-D1QEs3rJ.js";import"./useFocusRing-BQgtBlWR.js";import"./index-CpY4f8st.js";import"./index-BOHlJrOM.js";import"./useLabels-Duuh0L5K.js";import"./useButton-i6o-Pkvz.js";import"./RSPContexts-CGMpNM0N.js";import"./Text-Cj6dtY9R.js";import"./useDateFormatter-Bj_Baq_i.js";import"./useControlledState-BWU0pHnH.js";import"./useLocalizedStringFormatter-CnNLP0Lq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useUpdateEffect-D0z3U14h.js";import"./useEvent-WJY7O_68.js";import"./getScrollParent-Csyd5yE_.js";import"./scrollIntoView-CHm-0J4I.js";import"./useDescription-BzKxx3jO.js";import"./VisuallyHidden-DJUlYgU2.js";import"./clsx-Ciqy0D92.js";import"./Button-CGqKqbIg.js";import"./Button.module-CcWMkJAG.js";import"./createLucideIcon-Balk7dvp.js";import"./chevron-right-CAZLqGD4.js";import"./Heading-DcDaYTaT.js";import"./FieldError-DOOWnhN2.js";import"./Text-BMTeuJ1w.js";const or={component:s,render:t=>{const[x,D]=k.useState(null);return y.jsx(s,{value:x,onChange:D,...t})},title:"Components/Calendar",tags:["autodocs"]},r={},e={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},a={args:{isDateUnavailable:t=>S(t,"sv-SE")}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
