import{$ as c,a as m,r as l,j as d}from"./iframe-CaGxyJQ5.js";import{C as n}from"./Calendar-CRp2ArqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DBSFYjk5.js";import"./Button-Bn3l1eKL.js";import"./utils-CVJqKyu4.js";import"./clsx-B-dksMZM.js";import"./Hidden-BAAaulvK.js";import"./useFocusRing-LTUTFWnB.js";import"./index-K3VTbzXg.js";import"./index-DRbza-0A.js";import"./useLabels-BlAPVOi_.js";import"./useButton-bmkikoqa.js";import"./RSPContexts-_cn7M6Ef.js";import"./Text-Dtkx7GWh.js";import"./useDateFormatter-JLpKFKW3.js";import"./useControlledState-CNCDq7j0.js";import"./useLocalizedStringFormatter-CZOLyc3D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-QsPXsxHy.js";import"./useEvent-CzPSy7Rs.js";import"./getScrollParent-B1-aYvPm.js";import"./scrollIntoView-yBkYCpPJ.js";import"./useDescription-BuSKxMJt.js";import"./VisuallyHidden-BZzDvx5i.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-CgvwQFb3.js";import"./createLucideIcon-yEXXgYRp.js";import"./chevron-right-CcYY5G7n.js";import"./Button-SlKntRzd.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdAzyJ4I.js";import"./Heading-UtCJNKfQ.js";import"./FieldError-BBlPKEY6.js";import"./Text-W3mtiTBT.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
