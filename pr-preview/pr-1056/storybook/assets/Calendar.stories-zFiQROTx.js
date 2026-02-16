import{$ as c,a as m,r as l,j as d}from"./iframe-DJUtdHwV.js";import{C as n}from"./Calendar-BR8nhmw0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C27T18PY.js";import"./Button-bQvo04EJ.js";import"./utils-D4RE6qhK.js";import"./clsx-B-dksMZM.js";import"./Hidden-DPRRZP9g.js";import"./useFocusRing-C5U0CiHo.js";import"./index-CVKq7ZZT.js";import"./index-Ha_8AofU.js";import"./useLabels-Duan9ykz.js";import"./useButton-D3H5VeWz.js";import"./RSPContexts-CeL7Ybna.js";import"./Text-B58uuGYq.js";import"./useDateFormatter-C4N_IZCr.js";import"./useControlledState-C1jOx-dc.js";import"./useLocalizedStringFormatter-W5YzKkQs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C583A1uJ.js";import"./useEvent-T3MosaLJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-nXINSnLi.js";import"./VisuallyHidden-m39w7boQ.js";import"./clsx-Ciqy0D92.js";import"./Button-CThTpwQ6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5gvZJBEc.js";import"./createLucideIcon-SxhoPmH3.js";import"./chevron-left-e0xvcWc0.js";import"./chevron-right-Be5XYB-Z.js";import"./Heading-DL6t5x4O.js";import"./FieldError-C9oMwrfJ.js";import"./Text-Dl70Vupn.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...s.parameters?.docs?.source}}};const T=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,T as __namedExportsOrder,Q as default};
