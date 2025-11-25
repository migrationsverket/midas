import{m as t,$ as s}from"./iframe-B_KOJ0G0.js";import{R as n}from"./RangeCalendar-D7yHyqK7.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CPnPxVqS.js";import"./Button-CnpoiceM.js";import"./utils-BTtkoL8i.js";import"./clsx-B-dksMZM.js";import"./Hidden-B9DtuNar.js";import"./useFocusRing-5nURZfN9.js";import"./index-CXgWkQzh.js";import"./index-CF3jB36m.js";import"./useLabels-FMAmdZ1G.js";import"./useButton-DkRmfz4B.js";import"./RSPContexts-CbVBvrS_.js";import"./Text-D3GHA6gq.js";import"./useDateFormatter-DBvOm862.js";import"./useControlledState-CTR0ps1O.js";import"./useLocalizedStringFormatter-DGPkZ-8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-bAt_xAjm.js";import"./useEvent-DxD1kQt5.js";import"./getScrollParent-DfLYi2pS.js";import"./scrollIntoView-BwfxgBXt.js";import"./useDescription-7M9C1DQ3.js";import"./VisuallyHidden-C9mO_RkX.js";import"./clsx-Ciqy0D92.js";import"./Button-Drf_ZmSl.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v4d1yczo.js";import"./createLucideIcon-C0reiAmG.js";import"./chevron-right-CUFfzcow.js";import"./Heading-D-1uIkeo.js";import"./Text-ZOMm-Alb.js";const G={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,H as __namedExportsOrder,G as default};
