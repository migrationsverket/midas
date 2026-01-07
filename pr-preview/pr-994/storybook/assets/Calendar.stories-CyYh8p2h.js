import{$ as p,a as m,r as l,j as d}from"./iframe-Bflhdmnn.js";import{C as n}from"./Calendar-CTBpVCl6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C0LW7_Rf.js";import"./Button-m3Na6kNz.js";import"./utils-BPwgoz0Z.js";import"./clsx-B-dksMZM.js";import"./Hidden-KMCdUr8_.js";import"./useFocusRing-BekWnAY5.js";import"./index-BxP1rmx1.js";import"./index-DGB9V8m6.js";import"./useLabels-tdJ51icT.js";import"./useButton-DQzOjWYq.js";import"./RSPContexts-2KhPt2NA.js";import"./Text-D5Q908jx.js";import"./useDateFormatter-CJv9UWVA.js";import"./useControlledState-De_NBKuj.js";import"./useLocalizedStringFormatter-EwY44Yqc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bb_RzXxL.js";import"./useEvent-BW24FHrd.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-IOBPAjoc.js";import"./VisuallyHidden-P8tetEQ_.js";import"./clsx-Ciqy0D92.js";import"./Button-CafMpAWK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D5OYcKkz.js";import"./createLucideIcon-CpeXUi9U.js";import"./chevron-right-Dl_UImKv.js";import"./Heading-BMiykM9u.js";import"./FieldError-CN0prp1V.js";import"./Text-In3vo28v.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
