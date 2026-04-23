import{$ as c,a as m,r as l,j as d}from"./iframe-BzE31zAh.js";import{C as n}from"./Calendar-DAhqLdoC.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-mrEh5z7I.js";import"./Button-DG_UrG-_.js";import"./utils-DEtUikZw.js";import"./clsx-B-dksMZM.js";import"./Hidden-7JIM7zeN.js";import"./useFocusRing-CqeBj5xm.js";import"./index-DdObABro.js";import"./index-DiZkuWFN.js";import"./useLabel-BsvNbn_r.js";import"./useLabels-BAeRD83W.js";import"./useButton-zcjb-0dd.js";import"./RSPContexts-BP6VbO9Z.js";import"./Text-BM4F5w0Y.js";import"./useDateFormatter-uAaRECjd.js";import"./useControlledState-PVT6AeJ2.js";import"./useLocalizedStringFormatter-iW6IrIfx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bsm0VQD6.js";import"./useEvent-BLL5UQ6m.js";import"./getScrollParent-B2Y1TED_.js";import"./scrollIntoView-De1qC2jD.js";import"./useDescription-Dn7H1kUN.js";import"./VisuallyHidden-C6-4w0VX.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-C7W6bl3y.js";import"./createLucideIcon-Lrfi9yqC.js";import"./chevron-right-CTDOzeJ5.js";import"./Button-D6ialrwI.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BIklF50D.js";import"./Heading-CN3On5_t.js";import"./FieldError-Bs0ZVONG.js";import"./Text-DWgTuz7g.js";const T={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
