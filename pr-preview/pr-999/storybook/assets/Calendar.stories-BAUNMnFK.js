import{$ as p,a as m,r as l,j as d}from"./iframe-nE4dm88Z.js";import{C as n}from"./Calendar-BJ9hcT2h.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcNHm3oD.js";import"./Button-B3APOlWO.js";import"./utils-D6BHXFFk.js";import"./clsx-B-dksMZM.js";import"./Hidden-B5zipMeH.js";import"./useFocusRing-CHzcFtFU.js";import"./index-DogyMJnz.js";import"./index-DUvPe5TJ.js";import"./useLabels-h0Q5hm8W.js";import"./useButton-Dgl5rK7P.js";import"./RSPContexts-B3rIMyAq.js";import"./Text-DiUExjYu.js";import"./useDateFormatter-hweCUmHS.js";import"./useControlledState-Da3ywIgU.js";import"./useLocalizedStringFormatter-BZ1dBZg4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-uzslBu2h.js";import"./useEvent-BFPzvfby.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-tK3CsJ4R.js";import"./VisuallyHidden-t4WqRTpg.js";import"./clsx-Ciqy0D92.js";import"./Button-CXDEkB4j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CURwqrMK.js";import"./createLucideIcon-DoBEpZId.js";import"./chevron-right-_8I5wprl.js";import"./Heading-DSicriFW.js";import"./FieldError-Dawq3Gkj.js";import"./Text-Cx_6NWCd.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
