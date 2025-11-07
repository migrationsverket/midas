import{$ as p,a as m,r as l,j as d}from"./iframe-CNb7O3fM.js";import{C as n}from"./Calendar-DFJEoves.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B0j0Y4lS.js";import"./Button-C3beaqZU.js";import"./utils-D0vAnsQi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQksNeyO.js";import"./useFocusRing-92_f-Cnn.js";import"./index-DNw74xlK.js";import"./index-TauKm_TR.js";import"./useLabels-BMdYA1hN.js";import"./useButton-BknTUIzA.js";import"./RSPContexts-D0Mi2c8F.js";import"./Text-bNJPpR3N.js";import"./useDateFormatter-Wo1gZXkK.js";import"./useControlledState-DD-yjPuv.js";import"./useLocalizedStringFormatter-BEOuTl9U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CEObcmYR.js";import"./useEvent-BU8P7E25.js";import"./getScrollParent-dNi3Tk6G.js";import"./scrollIntoView-DzSt_Lig.js";import"./useDescription-0S3siiXJ.js";import"./VisuallyHidden-NUlijbui.js";import"./clsx-Ciqy0D92.js";import"./Button-B4oa6PJg.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DJgDtxVY.js";import"./chevron-right-BlciHy46.js";import"./Heading-CGaG1cgk.js";import"./FieldError-B18HvADb.js";import"./Text-IpU7O3G7.js";const K={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const L=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,s as UnavailableWeekends,L as __namedExportsOrder,K as default};
