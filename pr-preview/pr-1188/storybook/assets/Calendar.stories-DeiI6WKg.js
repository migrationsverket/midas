import{$ as c,a as m,r as l,j as d}from"./iframe-BhCsjan0.js";import{C as n}from"./Calendar-CP2UGC5p.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Deec-_Bs.js";import"./Button-C2NaQWvO.js";import"./utils-CtrZbhzi.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6UeEvFM.js";import"./useFocusRing-Ws2f8SLu.js";import"./index-DDDUdMNC.js";import"./index-D_WqKMc5.js";import"./useLabel-B7TVwUpE.js";import"./useLabels-BLj4vdHd.js";import"./useButton-By7DbLK9.js";import"./RSPContexts-CrHrywo6.js";import"./Text-DhUSBMS-.js";import"./useDateFormatter-BPvlZm5H.js";import"./useControlledState-CoCU8B0S.js";import"./useLocalizedStringFormatter-DQmyBNjM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BJZ2giNx.js";import"./useEvent-DNglUoLW.js";import"./getScrollParent-NPr2J27f.js";import"./scrollIntoView-DYsCjaxp.js";import"./useDescription-B1CS-p0E.js";import"./VisuallyHidden-CfUMAOQ3.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CYOMhwJw.js";import"./createLucideIcon-Bp2jaLbZ.js";import"./chevron-right-DJOZjfSj.js";import"./Button-1iG7gZrx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-K5Z3y1WJ.js";import"./Heading-ycVFTWje.js";import"./FieldError-d9D7STve.js";import"./Text-CFjsaxmQ.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
