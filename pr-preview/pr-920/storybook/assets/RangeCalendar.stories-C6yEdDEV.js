import{m as t,$ as s}from"./iframe-Da_9xyu_.js";import{R as n}from"./RangeCalendar-CScDlSxG.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-ENlDfLNb.js";import"./Button-Dv74RsAx.js";import"./utils-ClY4JNQR.js";import"./clsx-B-dksMZM.js";import"./Hidden-DT7cFiAL.js";import"./useFocusRing-rtksAyVi.js";import"./index-MfarlIzn.js";import"./index-DCiPdHXY.js";import"./useLabels-D-XK_IKO.js";import"./useButton-DKgQBPu0.js";import"./RSPContexts-aKhEJDC9.js";import"./Text-Etr2qgQp.js";import"./useDateFormatter-C0hcI6Eg.js";import"./useControlledState-sFCHxnJW.js";import"./useLocalizedStringFormatter-BgiQH0tm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B3XGhIwt.js";import"./useEvent-BIZdtvwm.js";import"./getScrollParent-CWjPalW2.js";import"./scrollIntoView-qmn4W8AT.js";import"./useDescription-_3ZepyIS.js";import"./VisuallyHidden-BhEjSkfL.js";import"./clsx-Ciqy0D92.js";import"./Button-BEWcUzao.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CErKZ7dc.js";import"./chevron-right-CAgb8H1s.js";import"./Heading-DKIPWLCz.js";import"./Text-Bpadz2Uk.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,G as __namedExportsOrder,F as default};
