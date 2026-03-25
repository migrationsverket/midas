import{$ as c,a as m,r as l,j as d}from"./iframe-ArSWsRFy.js";import{C as n}from"./Calendar-CaJXqwAK.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9sTAbbT.js";import"./Button-BEQHwt_x.js";import"./utils-Bk01FJOF.js";import"./clsx-B-dksMZM.js";import"./Hidden-DhQXB3Em.js";import"./useFocusRing-CuEBX_ny.js";import"./index-h5O7gEHG.js";import"./index-CBhfX2fa.js";import"./useLabel-CGDLzIxe.js";import"./useLabels-P6wNBidM.js";import"./useButton-2SAmbr6R.js";import"./RSPContexts-CKQVnrYn.js";import"./Text-BQUF3iRq.js";import"./useDateFormatter-CdNcV1cF.js";import"./useControlledState-BLEc30eS.js";import"./useLocalizedStringFormatter-C8sflf6-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DqP3JGEJ.js";import"./useEvent-CgDJG_HR.js";import"./getScrollParent-i8KlRQrJ.js";import"./scrollIntoView-DWLREkUa.js";import"./useDescription-CmtmyFdo.js";import"./VisuallyHidden-B7lPtWpQ.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-b3SxPSqw.js";import"./createLucideIcon-xPhfpX1g.js";import"./chevron-right-CqclVTwO.js";import"./Button-B7NXJoV0.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BNDpmOum.js";import"./Heading-BDFRiPQe.js";import"./FieldError-BB8VxeZz.js";import"./Text-DS3DZlwG.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
