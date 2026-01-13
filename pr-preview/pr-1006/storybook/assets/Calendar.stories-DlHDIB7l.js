import{$ as c,a as m,r as l,j as d}from"./iframe-CSxi486h.js";import{C as n}from"./Calendar-BPMpmF_3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DF8HGEtq.js";import"./Button-DDo42slW.js";import"./utils-BzDTrZyA.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGbLzxlP.js";import"./useFocusRing-RkfB8tx5.js";import"./index-0hY5d2pY.js";import"./index-D8s8gplW.js";import"./useLabels-ku0pOgJ6.js";import"./useButton-CMpob_a_.js";import"./RSPContexts-DQM45vj6.js";import"./Text-DJ3-XheA.js";import"./useDateFormatter-Bw_f99hy.js";import"./useControlledState-DtteSLbz.js";import"./useLocalizedStringFormatter-BOm7oqwy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-5hM_hXml.js";import"./useEvent-CI6BS7N3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BVlN4h3o.js";import"./VisuallyHidden-z1hnMekp.js";import"./clsx-Ciqy0D92.js";import"./Button-iQDKHLWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DY5vjUoo.js";import"./createLucideIcon-CayTLY9E.js";import"./chevron-left-C9yLSR_I.js";import"./chevron-right-Bz69Ihsh.js";import"./Heading-CLKVrjeR.js";import"./FieldError-CGgFGY0t.js";import"./Text-KTapkgrB.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
