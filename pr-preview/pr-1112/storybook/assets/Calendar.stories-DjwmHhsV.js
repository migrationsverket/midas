import{$ as c,a as m,r as l,j as d}from"./iframe-CTc60VTv.js";import{C as n}from"./Calendar-D5ntln1G.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BaDkfDbw.js";import"./Button-pB47d38A.js";import"./utils-CX_MyPJp.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bn2RbpW0.js";import"./useFocusRing-DGMfhUR8.js";import"./index-CopPqlir.js";import"./index-B5EHLrG2.js";import"./useLabels-DSU9QQ05.js";import"./useButton-BcQwxG2_.js";import"./RSPContexts-DfNYkHSv.js";import"./Text-BWm8EFxq.js";import"./useDateFormatter-DAHae5NY.js";import"./useControlledState-D-bgWf48.js";import"./useLocalizedStringFormatter-B9U1Drd-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Bi5pD-iR.js";import"./useEvent-rHHxS9Wo.js";import"./getScrollParent-DlGzH9JS.js";import"./scrollIntoView-FnEgfIWQ.js";import"./useDescription-DgVzXBhb.js";import"./VisuallyHidden-SblkdzTe.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-ClsRgBq7.js";import"./createLucideIcon-C63opgfS.js";import"./chevron-right-CIgOvXT6.js";import"./Button-BjBl_qxz.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Ci3kGB7o.js";import"./Heading-CtvMQJYy.js";import"./FieldError-DLICbn0F.js";import"./Text-U4cmy44W.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
