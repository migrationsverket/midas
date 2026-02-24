import{$ as m,a as c,r as l,j as d}from"./iframe-DewzuY2Y.js";import{C as n}from"./Calendar-B7hknofj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D-xusZzr.js";import"./Button-B263f3iS.js";import"./utils-B9eCRML0.js";import"./useObjectRef-D02ig_Er.js";import"./clsx-B-dksMZM.js";import"./Hidden-DQi6D_EL.js";import"./number-DfkVkf0F.js";import"./useFocusRing-Bu9BKNcc.js";import"./useFocusable-D4F7j4yX.js";import"./index-CGxbGCj-.js";import"./index-YF-MvE2f.js";import"./useLabels-DqUr0jsw.js";import"./useButton-fhI4OoXn.js";import"./RSPContexts-D0MwBZX-.js";import"./Text-CF2XopxT.js";import"./useDateFormatter-BugZxd1i.js";import"./useControlledState-DKrm3iPF.js";import"./useLocalizedStringFormatter-7896F-u-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-2mDxs41L.js";import"./useEvent-Co8FlwDh.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DZHnrBI1.js";import"./VisuallyHidden-BcUmonei.js";import"./clsx-Ciqy0D92.js";import"./Button-DrlbWmQB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BU0D5dPi.js";import"./createLucideIcon-BpgdMRa6.js";import"./chevron-left-Dv2pNykp.js";import"./chevron-right-CsOBp68C.js";import"./Heading-CBTsyhRB.js";import"./FieldError-BAoeLCIl.js";import"./Text-Bab9BnDj.js";const X={component:n,render:s=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...s})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new m(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},t={args:{isDateUnavailable:s=>c(s,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...t.parameters?.docs?.source}}};const Y=["Primary","Disabled","ReadOnly","Invalid","UnavailableWeekends"];export{r as Disabled,o as Invalid,e as Primary,a as ReadOnly,t as UnavailableWeekends,Y as __namedExportsOrder,X as default};
