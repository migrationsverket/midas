import{$ as c,a as m,r as l,j as d}from"./iframe-CrvsXgmc.js";import{C as n}from"./Calendar-BxRna_9f.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-AfBHN9ju.js";import"./Button-BJCsZZXs.js";import"./utils-gzCDVK3q.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAMs1NRQ.js";import"./useFocusRing-Y3IR8t1i.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./RSPContexts-DH1zBAtU.js";import"./Text-CF9Q2mcX.js";import"./useDateFormatter-CUbMeqYH.js";import"./useControlledState-CFUIREeB.js";import"./useLocalizedStringFormatter-CdYDGaj0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CA7I7uvS.js";import"./useEvent-DI2Xn_Gs.js";import"./getScrollParent-DN_amqRA.js";import"./scrollIntoView-C_cKPCXn.js";import"./useDescription-Cw3L3Xvg.js";import"./VisuallyHidden-GavGRjxA.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-D5RNfsnP.js";import"./createLucideIcon-C4drZqEd.js";import"./chevron-right-GtxtRwgp.js";import"./Button-C1guSp-1.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./Heading-BYcCu-yi.js";import"./FieldError-5hEdY4LM.js";import"./Text-CA7uWGGn.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
