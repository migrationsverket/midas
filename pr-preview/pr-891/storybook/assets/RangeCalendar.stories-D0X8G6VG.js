import{m as t,$ as s}from"./iframe-WskM-gQy.js";import{R as n}from"./RangeCalendar-CWgBjkWg.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-swCHegHz.js";import"./Button-D8QLfFfX.js";import"./utils-PiplYHk9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGOCYihM.js";import"./useFocusRing-VjDIWbHo.js";import"./index-DQ5MGmqD.js";import"./index-BUVNGicR.js";import"./useLabels-CP12Ou_e.js";import"./useButton-DKOsPuai.js";import"./RSPContexts-BWosIfet.js";import"./Text-ZMEsASHW.js";import"./useDateFormatter-DVJXXZfc.js";import"./useControlledState-D9EpcS-3.js";import"./useLocalizedStringFormatter-DZmX7KtP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CS9ZE1zR.js";import"./useEvent-BPAOxkP6.js";import"./getScrollParent-BGKmcE_e.js";import"./scrollIntoView-D1wNzGzn.js";import"./useDescription-B9cpVcNh.js";import"./VisuallyHidden-Dwq3rn_j.js";import"./clsx-Ciqy0D92.js";import"./Button-DPo6WJUv.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-VhmxKnBe.js";import"./chevron-right-eHXPBfCn.js";import"./Heading-CyF5dkrn.js";import"./Text-Dtog7EZC.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
