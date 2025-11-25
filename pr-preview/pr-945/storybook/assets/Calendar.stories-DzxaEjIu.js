import{$ as p,a as m,r as l,j as d}from"./iframe-DbQZ1WFC.js";import{C as n}from"./Calendar-DgweSqi0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CW1l35Gb.js";import"./Button-Br70F59r.js";import"./utils-BkzzIoAp.js";import"./clsx-B-dksMZM.js";import"./Hidden-B3MQk5Ru.js";import"./useFocusRing-CheS-c_q.js";import"./index-CROQ9br5.js";import"./index-sIqg8Qsv.js";import"./useLabels-DRfk8RpQ.js";import"./useButton-CLtYZVZ3.js";import"./RSPContexts-uaVVndL-.js";import"./Text-B6b94t7A.js";import"./useDateFormatter-BDldmnG9.js";import"./useControlledState-CSIEjkhQ.js";import"./useLocalizedStringFormatter-w8tEygSo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-O0vzDFTd.js";import"./useEvent-CteodfXB.js";import"./getScrollParent-CmwBXzrJ.js";import"./scrollIntoView-Bbu8JQBY.js";import"./useDescription-B8U0ma1K.js";import"./VisuallyHidden-CSCyYljM.js";import"./clsx-Ciqy0D92.js";import"./Button-B2eIdaxs.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DN-DiLNO.js";import"./createLucideIcon-C67xWClu.js";import"./chevron-right-DarfdENZ.js";import"./Heading-CzJ3mSO-.js";import"./FieldError-F5fORIfF.js";import"./Text-BABzq6Ri.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
