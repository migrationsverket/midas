import{$ as c,a as m,r as l,j as d}from"./iframe-B_Y0DlqQ.js";import{C as n}from"./Calendar-Bavg2RG8.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DDKGn8Et.js";import"./Button-Du8CgB5i.js";import"./utils-DksA0Tsa.js";import"./clsx-B-dksMZM.js";import"./Hidden-DECSsGSE.js";import"./useFocusRing-Bri1p2OG.js";import"./index-DA90p7VR.js";import"./index-D4TvvLIK.js";import"./useLabels-Ce9ZpRqc.js";import"./useButton-BkIr7UBR.js";import"./RSPContexts-B5lGwhcJ.js";import"./Text-CYtRYcLc.js";import"./useDateFormatter-8JSSRyuL.js";import"./useControlledState-DNwepJua.js";import"./useLocalizedStringFormatter-jn3ikADD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C2JG5PUU.js";import"./useEvent-DpuzfOt5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B5DmuzQE.js";import"./VisuallyHidden-Dfda1Uwj.js";import"./clsx-Ciqy0D92.js";import"./Button-DLuLiY2m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQakQ_l-.js";import"./createLucideIcon-DXYmNs8l.js";import"./chevron-left-dt-ZaxGZ.js";import"./chevron-right-DTyrVKSm.js";import"./Heading-BtF3xjBY.js";import"./FieldError-i5Ktr5xn.js";import"./Text-CcUZk8IK.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
