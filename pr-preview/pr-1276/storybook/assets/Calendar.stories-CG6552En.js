import{$ as c,a as m,r as l,j as d}from"./iframe-msAyXsP3.js";import{C as n}from"./Calendar-Co7v04Pd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-6DtFbchc.js";import"./Button-CHXcA8G6.js";import"./utils-CNLzm5ks.js";import"./clsx-B-dksMZM.js";import"./Hidden-1dN06UT8.js";import"./useFocusRing-DUmFoS0u.js";import"./index-DbT8YmDW.js";import"./index-DdtKLc0f.js";import"./useLabel-CSQCeGiL.js";import"./useLabels-CoFEN7CD.js";import"./useButton-o2FEXKT7.js";import"./RSPContexts-iGd1ezyt.js";import"./Text-B_o1aquN.js";import"./useDateFormatter-HxM55suR.js";import"./useControlledState-B9ayh_25.js";import"./useLocalizedStringFormatter-DPSc_3xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BfKwOmMd.js";import"./useEvent-C4mqR9gc.js";import"./getScrollParent-V1l4010l.js";import"./scrollIntoView-rdVvyk8L.js";import"./useDescription-BVWBMn3A.js";import"./VisuallyHidden-BM3YcZfp.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-B582yX42.js";import"./createLucideIcon-DQiIjLik.js";import"./chevron-right-XleDNGO1.js";import"./Button-C2f__mC4.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DOzvk0aq.js";import"./Heading-BM06ULQu.js";import"./FieldError-D_l8yWz1.js";import"./Text-O5KbKawX.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
