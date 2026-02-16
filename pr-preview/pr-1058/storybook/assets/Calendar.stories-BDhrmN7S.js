import{$ as c,a as m,r as l,j as d}from"./iframe-BJQY1bvJ.js";import{C as n}from"./Calendar-ep4t4_X4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-rTcj5svO.js";import"./Button-tbssrMuS.js";import"./utils-lif94hNf.js";import"./clsx-B-dksMZM.js";import"./Hidden-DoOxpBOx.js";import"./useFocusRing-BLqAyq6i.js";import"./index-tP79n4Xh.js";import"./index-IY5nP7ez.js";import"./useLabels-WB4c8N4J.js";import"./useButton-CsuJz0cJ.js";import"./RSPContexts-CdLg8ZQ-.js";import"./Text-BNAvgz7D.js";import"./useDateFormatter-DoYfUFDl.js";import"./useControlledState-C_pcrP7U.js";import"./useLocalizedStringFormatter-BDBiLNys.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DyBRU_UP.js";import"./useEvent-CwuHowAX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CCnP-Uo3.js";import"./VisuallyHidden-DVVhBCOd.js";import"./clsx-Ciqy0D92.js";import"./Button-BJZHHaN3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CsRXfCs5.js";import"./createLucideIcon-BjfGBRzU.js";import"./chevron-left-OB3XlPls.js";import"./chevron-right-BVz2DSl2.js";import"./Heading-BaBUFL96.js";import"./FieldError-B56sTIqy.js";import"./Text-DS3gleYA.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
