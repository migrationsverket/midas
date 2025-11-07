import{m as t,$ as s}from"./iframe-BH1_R2DT.js";import{R as n}from"./RangeCalendar-C6i9jhdf.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-B3_q1-JM.js";import"./Button-DaJwfJY_.js";import"./utils-BVGwIGlb.js";import"./clsx-B-dksMZM.js";import"./Hidden-kAD8IT6R.js";import"./useFocusRing-D2P1AVxz.js";import"./index-DMDiVxAe.js";import"./index-C_m7skr9.js";import"./useLabels-D9Se9Q-i.js";import"./useButton-t5IL2t_E.js";import"./RSPContexts-CanWJetA.js";import"./Text-BSV7h1MS.js";import"./useDateFormatter-ZZuvpnWC.js";import"./useControlledState--SS9_6v3.js";import"./useLocalizedStringFormatter-BnhKqSj7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-s_uSDnn6.js";import"./useEvent-DFDc_5v7.js";import"./getScrollParent-Cf46SMxm.js";import"./scrollIntoView-CEB_t1nR.js";import"./useDescription-U6ZvYwCQ.js";import"./VisuallyHidden-CT5D58WX.js";import"./clsx-Ciqy0D92.js";import"./Button-BnyEfxrm.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-ii3gKTw6.js";import"./chevron-right-CYaH8xEc.js";import"./Heading-DXJmqslE.js";import"./Text-DLnNCVmf.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
