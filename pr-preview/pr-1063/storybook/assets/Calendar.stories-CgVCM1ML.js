import{$ as c,a as m,r as l,j as d}from"./iframe-Bt2IPdm_.js";import{C as n}from"./Calendar-CEYpD3XE.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-pEei_kPR.js";import"./Button-C79FTkxg.js";import"./utils-C3T3ztzp.js";import"./clsx-B-dksMZM.js";import"./Hidden--XR3ujDb.js";import"./useFocusRing-DkE8kJUj.js";import"./index-BDiIIlI6.js";import"./index-CN1OBmgy.js";import"./useLabels-CUKIRIlp.js";import"./useButton-CWjFkamK.js";import"./RSPContexts-D7GX16CF.js";import"./Text-4gkk9B6S.js";import"./useDateFormatter-DvBmV2Wa.js";import"./useControlledState-CHQWAa9G.js";import"./useLocalizedStringFormatter-Dq04GxHG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D0IKf29K.js";import"./useEvent-DjOTsNLO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-COVCGZbr.js";import"./VisuallyHidden-B4zsPLSx.js";import"./clsx-Ciqy0D92.js";import"./Button-CLF5zjXA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-yIeft2Rj.js";import"./createLucideIcon-CLpn3Yea.js";import"./chevron-left-DF2WMMpb.js";import"./chevron-right-BnljR-lz.js";import"./Heading-DvDOH9KM.js";import"./FieldError-DsVwS6sU.js";import"./Text-sG9oy4ZT.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
