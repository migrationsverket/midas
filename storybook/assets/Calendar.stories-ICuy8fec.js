import{$ as c,a as m,r as l,j as d}from"./iframe-BKRZxWBZ.js";import{C as n}from"./Calendar-CNcKQooG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-SPHln4Oe.js";import"./Button-Bag6HyT1.js";import"./utils-Y4JGSljl.js";import"./clsx-B-dksMZM.js";import"./Hidden-D261fXZx.js";import"./useFocusRing-CbgDMaVp.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./RSPContexts-BLR_J2o2.js";import"./Text-DGzS_SrA.js";import"./useDateFormatter-nmoEV5i0.js";import"./useControlledState-C2ay6qCb.js";import"./useLocalizedStringFormatter-CGG1SsZP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D3DbWrTB.js";import"./useEvent-CJgh-wfk.js";import"./getScrollParent-5vt1eUdP.js";import"./scrollIntoView-9DVoBKAT.js";import"./useDescription-BeUx0Y0j.js";import"./VisuallyHidden-DbkQs6Cg.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-Cd49-EgN.js";import"./createLucideIcon-B2GxFjYG.js";import"./chevron-right-gBYk33lV.js";import"./Button-D0aetTqs.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-gzrdZE98.js";import"./Heading-CtngZd_I.js";import"./FieldError-DG-tonkS.js";import"./Text-8xjuYN6y.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const V=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,V as __namedExportsOrder,T as default};
