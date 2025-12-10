import{$ as p,a as m,r as l,j as d}from"./iframe-D3pU9J33.js";import{C as n}from"./Calendar-5lOdhKon.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C3LBCjGo.js";import"./Button-mA5ilicP.js";import"./utils-TJDpQ4Ya.js";import"./clsx-B-dksMZM.js";import"./Hidden-B5r8AT61.js";import"./useFocusRing-D3KULZdT.js";import"./index-D0C8bgGL.js";import"./index-C0kKjsp6.js";import"./useLabels-81u_mr-e.js";import"./useButton-BKl2qCbd.js";import"./RSPContexts-B0Vm-_mQ.js";import"./Text-CW2J10CL.js";import"./useDateFormatter-C3EJs4ef.js";import"./useControlledState-DXSUtMNg.js";import"./useLocalizedStringFormatter-CjBBj2AJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-lci6jwJZ.js";import"./useEvent-CPP8qCw1.js";import"./getScrollParent-BvGDYglO.js";import"./scrollIntoView-DOPuCf89.js";import"./useDescription-CbjSHKut.js";import"./VisuallyHidden-DCygpEtP.js";import"./clsx-Ciqy0D92.js";import"./Button-6HrJxnEa.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-bETZumPy.js";import"./createLucideIcon-DxLCNxll.js";import"./chevron-right-CstAaSpF.js";import"./Heading-p_5o3t_l.js";import"./FieldError-BoX6D44Y.js";import"./Text-EyICqv-c.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
