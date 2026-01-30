import{m as t,$ as s}from"./iframe-Ds-nK5jC.js";import{R as n}from"./RangeCalendar-yE8dJxCF.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BcKykvOh.js";import"./Button-dHl8uENq.js";import"./utils-BWcc9EPK.js";import"./clsx-B-dksMZM.js";import"./Hidden-4dstmqQY.js";import"./useFocusRing-DSAS5gOz.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./RSPContexts-CMueCVj4.js";import"./Text-D4nZVrIm.js";import"./useDateFormatter-si_tLgMa.js";import"./useControlledState-B9M6c-Zi.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-Dtst6q7J.js";import"./useEvent-BAAt4FlS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CfEhRarO.js";import"./VisuallyHidden-BeRc1dUa.js";import"./clsx-Ciqy0D92.js";import"./Button-CQLlpX_U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";import"./createLucideIcon-xY7bNo4d.js";import"./chevron-left-iOIxlnN9.js";import"./chevron-right-CumnFIYn.js";import"./Heading-BpINEwCz.js";import"./FieldError-CDeKUF86.js";import"./Text-cOJkqGeS.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      start: mockedNow.subtract({
        days: 2
      }),
      end: mockedNow.add({
        days: 2
      })
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...o.parameters?.docs?.source}}};const J=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,J as __namedExportsOrder,I as default};
