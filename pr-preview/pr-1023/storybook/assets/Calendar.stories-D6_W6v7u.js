import{$ as c,a as m,r as l,j as d}from"./iframe-DLG9UKPd.js";import{C as n}from"./Calendar-DTIK2j24.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BN1GC97n.js";import"./Button-TurWYA_F.js";import"./utils-DBUuZCdW.js";import"./clsx-B-dksMZM.js";import"./Hidden-BrEjSDmZ.js";import"./useFocusRing-CPajt0l2.js";import"./index-BfkNjs9H.js";import"./index-Dhh4UqYu.js";import"./useLabels-Bt1wH29Q.js";import"./useButton-DVAUhmi8.js";import"./RSPContexts-B1mSspvQ.js";import"./Text-BSfpdnWo.js";import"./useDateFormatter-D0eUUVod.js";import"./useControlledState-DKvDtRay.js";import"./useLocalizedStringFormatter-DIbN7jUK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DzFth_IX.js";import"./useEvent-B9M_w_TJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CNKvzn77.js";import"./VisuallyHidden-CqsIInob.js";import"./clsx-Ciqy0D92.js";import"./Button-BSBQeMEK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BgfRRBj_.js";import"./createLucideIcon-BPNvabKa.js";import"./chevron-left-Dd8mIzNC.js";import"./chevron-right-CZL59JZj.js";import"./Heading-Dnzz1pkx.js";import"./FieldError-crXTrtj0.js";import"./Text-RyRTgpJt.js";const Q={component:n,render:t=>{const[i,p]=l.useState(null);return d.jsx(n,{value:i,onChange:p,...t})},title:"Components/Calendar",tags:["autodocs"]},e={},r={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},a={args:{isReadOnly:!0,value:new c(1995,5,29)}},o={args:{isInvalid:!0,errorMessage:"Något gick fel"}},s={args:{isDateUnavailable:t=>m(t,"sv-SE")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
