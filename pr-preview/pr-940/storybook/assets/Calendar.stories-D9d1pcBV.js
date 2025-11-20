import{$ as p,a as m,r as l,j as d}from"./iframe-BBV6b5lG.js";import{C as n}from"./Calendar-B2AUQakt.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BnjUIGj_.js";import"./Button-DLszx2Y7.js";import"./utils-Cl8pVGWb.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ds8YvxI_.js";import"./useFocusRing-BKoWjM3h.js";import"./index-BzpXdeZq.js";import"./index-D_KHeT1o.js";import"./useLabels-pCbqYqJF.js";import"./useButton-tezIzvTx.js";import"./RSPContexts-hzdcErwp.js";import"./Text-CxqhfGOZ.js";import"./useDateFormatter-XarLZhTO.js";import"./useControlledState-DB16enQ5.js";import"./useLocalizedStringFormatter-DxPLpvAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-IehWp5Pq.js";import"./useEvent-BthYEK7x.js";import"./getScrollParent-CSPXvemZ.js";import"./scrollIntoView-DPNGSIfh.js";import"./useDescription-CgE8AlaE.js";import"./VisuallyHidden-DebLyYO_.js";import"./clsx-Ciqy0D92.js";import"./Button-D_woJjNv.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-8FdOFj4F.js";import"./createLucideIcon-CQjagoR0.js";import"./chevron-right-C9Q0-MNd.js";import"./Heading-yZSSjkRN.js";import"./FieldError-Dn4KLTgh.js";import"./Text-BpMSL69-.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
