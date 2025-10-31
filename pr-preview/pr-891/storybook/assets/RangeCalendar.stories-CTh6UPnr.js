import{m as t,$ as s}from"./iframe-CYLbMBt8.js";import{R as n}from"./RangeCalendar-l1y5qPTq.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-DbIO0BIc.js";import"./Button-CKpDaDrO.js";import"./utils-CtYggOsK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CCZJVzSx.js";import"./useFocusRing-sTPNQCE4.js";import"./index-71tlDv88.js";import"./index-Brb7X42m.js";import"./useLabels-3FTzkieI.js";import"./useButton-BztmJ2aQ.js";import"./RSPContexts-D_FN0ARC.js";import"./Text-DZ37ixFx.js";import"./useDateFormatter-DXexV2-Z.js";import"./useControlledState-CH8LbPDY.js";import"./useLocalizedStringFormatter-BCspmRwR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-C7nqcFo9.js";import"./useEvent-D0F19b6G.js";import"./getScrollParent-CQS5bk9q.js";import"./scrollIntoView-BB2jjYaX.js";import"./useDescription-BNrAS8PP.js";import"./VisuallyHidden-C1dzkIOy.js";import"./clsx-Ciqy0D92.js";import"./Button-CwJUY5Uh.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-C_sXulXo.js";import"./chevron-right-3AYP06r7.js";import"./Heading-CSUTgwbg.js";import"./Text-DhjMuTd4.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
