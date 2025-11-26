import{$ as p,a as m,r as l,j as d}from"./iframe-DZnzPlIp.js";import{C as n}from"./Calendar-m3h8xr9k.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9rrNxjn.js";import"./Button-Dtht3JLw.js";import"./utils-CNFHwh-q.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHBA8I1E.js";import"./useFocusRing-Nu8QV6qN.js";import"./index-08boVIM8.js";import"./index-BK2sDAog.js";import"./useLabels-Bn0lABK-.js";import"./useButton-CARWH--T.js";import"./RSPContexts-iwyWCt_c.js";import"./Text-D4f0kWpn.js";import"./useDateFormatter-DDFqn_6m.js";import"./useControlledState-CrkPfz38.js";import"./useLocalizedStringFormatter-BQqTysii.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B0XjQliE.js";import"./useEvent-ChHWq_03.js";import"./getScrollParent-Ba2DoF1m.js";import"./scrollIntoView-X-mFgLrZ.js";import"./useDescription-CATiUuAQ.js";import"./VisuallyHidden-DEEJ503M.js";import"./clsx-Ciqy0D92.js";import"./Button-Q8NbkpbT.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B9kfZZmT.js";import"./createLucideIcon-D1ffg5uX.js";import"./chevron-right-BspjuKL8.js";import"./Heading-BMs_vKOP.js";import"./FieldError-DOwOzQa8.js";import"./Text-B1aKKyjJ.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,Q as __namedExportsOrder,L as default};
