import{$ as p,a as m,r as l,j as d}from"./iframe-Dy8YW1nL.js";import{C as n}from"./Calendar-rrIZpbYd.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CwENxmyE.js";import"./Button-DC3XM5t6.js";import"./utils-C1iN3peK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CMRF2LLs.js";import"./useFocusRing-CHtYKIBZ.js";import"./index-CiKqZaPy.js";import"./index-CtsF22kH.js";import"./useLabels-BfD0hyaw.js";import"./useButton-BzUs9u61.js";import"./RSPContexts-CGLIBW7g.js";import"./Text-DWQpvMY3.js";import"./useDateFormatter-DkOtVM5N.js";import"./useControlledState-yTQyhLHt.js";import"./useLocalizedStringFormatter-DY5nz3IE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-qEIyZ-cJ.js";import"./useEvent-CZ4JNl4C.js";import"./getScrollParent-BDcVMAVa.js";import"./scrollIntoView-CvK5Pp_s.js";import"./useDescription-izPGNkRr.js";import"./VisuallyHidden-BflTjhoa.js";import"./clsx-Ciqy0D92.js";import"./Button-B67iCngD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bgm_EniW.js";import"./createLucideIcon-Dm8CZmjq.js";import"./chevron-right-CXRluqXF.js";import"./Heading-QM00-eq4.js";import"./FieldError-DyZQ-DTm.js";import"./Text-hvN0j1za.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
