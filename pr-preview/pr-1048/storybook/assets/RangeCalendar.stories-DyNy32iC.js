import{$ as t,m as s}from"./iframe-D7a0roTE.js";import{R as n}from"./RangeCalendar-D0pXfZE1.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DLsuVnS9.js";import"./Button-202_c7Iv.js";import"./utils-CCwC5od5.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dy39TreI.js";import"./useFocusRing-CFRP2Jek.js";import"./index-CFLLbIUX.js";import"./index-Bcz-F3t-.js";import"./useLabels-BtRp1y_K.js";import"./useButton-DiS7UUja.js";import"./RSPContexts-CZ_mWjdj.js";import"./Text-BeZ98S-S.js";import"./useDateFormatter-mbUC_NBd.js";import"./useControlledState-DDhJysn8.js";import"./useLocalizedStringFormatter-e3ysiM8J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-BMCPESQK.js";import"./useEvent-BLyKonF-.js";import"./getScrollParent-DOj-Lfm1.js";import"./scrollIntoView-DNIYTqEF.js";import"./useDescription-3cPSrQCV.js";import"./VisuallyHidden-C3QcPrAB.js";import"./clsx-Ciqy0D92.js";import"./Button-BmkKd0hD.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CzDArdEs.js";import"./createLucideIcon-CpMQKadj.js";import"./chevron-left-CXrkY_jh.js";import"./chevron-right-B2yEQdEg.js";import"./Heading-BeKmFSrO.js";import"./FieldError-CcwNjMdG.js";import"./Text-BQJnC-MG.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
