import{$ as c,a as m,r as l,j as d}from"./iframe-DQprq_kP.js";import{C as n}from"./Calendar-B1ip2mRH.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CR-c4Z85.js";import"./Button-DWUsuc72.js";import"./utils-CzYL7WyR.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWrSuujl.js";import"./useFocusRing-BVbjxz3f.js";import"./index-Zi6SpqS6.js";import"./index-BkSkOuU3.js";import"./useLabels-ZvQNUnV5.js";import"./useButton-BnQ8yP1B.js";import"./RSPContexts-BiHEw_SQ.js";import"./Text-DvwepU_B.js";import"./useDateFormatter-CiU1D1W6.js";import"./useControlledState-cwJwYt4X.js";import"./useLocalizedStringFormatter-BzU75U7z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CEmO5J1E.js";import"./useEvent-ZYXRQoQI.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Biv56RfI.js";import"./VisuallyHidden-p948zCvh.js";import"./clsx-Ciqy0D92.js";import"./Button-BqlETkBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUsvZMK4.js";import"./createLucideIcon-DrbblNCp.js";import"./chevron-left-BKIcF4tJ.js";import"./chevron-right-DLpGSNaF.js";import"./Heading-ncacdurI.js";import"./FieldError-Dp6D5HDL.js";import"./Text-BezPGlQS.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
