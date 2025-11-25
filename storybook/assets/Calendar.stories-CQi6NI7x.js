import{$ as p,a as m,r as l,j as d}from"./iframe-CNQjlvDm.js";import{C as n}from"./Calendar-CBLt7XC0.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BR2boTEL.js";import"./Button-Bq-mABfS.js";import"./utils-gQ4yd-Ab.js";import"./clsx-B-dksMZM.js";import"./Hidden-CKgMcecd.js";import"./useFocusRing-6KaOFFld.js";import"./index-BAocd020.js";import"./index-Crk6Oovq.js";import"./useLabels-Bfeh6CAt.js";import"./useButton-C5sXC89g.js";import"./RSPContexts-ZpwQ7nh7.js";import"./Text-CBKz5-Bc.js";import"./useDateFormatter-0lqVbhar.js";import"./useControlledState-Cw34tQo_.js";import"./useLocalizedStringFormatter-BAx4OKHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CDfUQkk6.js";import"./useEvent-BVIAA-zB.js";import"./getScrollParent-CSope_Cn.js";import"./scrollIntoView-GpU6uT5D.js";import"./useDescription-DhRtkqqX.js";import"./VisuallyHidden-CkZ7QXN2.js";import"./clsx-Ciqy0D92.js";import"./Button-DKj7SgkX.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CuiX0-xA.js";import"./createLucideIcon-CLo-1QQP.js";import"./chevron-right-oCMZxufK.js";import"./Heading-Cc7GuOtf.js";import"./FieldError-B77Pd3sF.js";import"./Text-_2-H1EYs.js";const L={component:n,render:t=>{const[i,c]=l.useState(null);return d.jsx(n,{value:i,onChange:c,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new p(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
