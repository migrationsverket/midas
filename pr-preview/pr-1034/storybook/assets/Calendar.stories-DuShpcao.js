import{$ as c,a as m,r as l,j as d}from"./iframe-DgMSVBJj.js";import{C as n}from"./Calendar-DcKyYEn3.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-7ebGSFyS.js";import"./Button-D-J1jvHp.js";import"./utils-BUVZQFkZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-B0_wOBGj.js";import"./useFocusRing-CSYGle8_.js";import"./index-Ch5SRSet.js";import"./index-Cm4xQ_Xl.js";import"./useLabels-elaTIo4h.js";import"./useButton-XlQwCmfH.js";import"./RSPContexts-GwS0uMKq.js";import"./Text-C3v5M0X6.js";import"./useDateFormatter-Bo6kiGyT.js";import"./useControlledState-BKuwHYa2.js";import"./useLocalizedStringFormatter-CKARZmxO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DUIi_A7d.js";import"./useEvent-CKIQixox.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C3jZSQWL.js";import"./VisuallyHidden-MCla8tVA.js";import"./clsx-Ciqy0D92.js";import"./Button-Cx_rtnFw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHl2-VBK.js";import"./createLucideIcon-xbipfE59.js";import"./chevron-left-1KWUaGSg.js";import"./chevron-right-CCXAquNX.js";import"./Heading-Dn0wZytP.js";import"./FieldError-DhkdCeIN.js";import"./Text-D4BWFKQS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
