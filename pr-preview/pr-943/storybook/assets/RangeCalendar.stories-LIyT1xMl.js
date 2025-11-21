import{m as t,$ as s}from"./iframe-BqDkGuh1.js";import{R as n}from"./RangeCalendar-uYkxflU6.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-0vCfN1CH.js";import"./Button-BxGujilG.js";import"./utils-W193K7jS.js";import"./clsx-B-dksMZM.js";import"./Hidden-0zoVmhVR.js";import"./useFocusRing-B0vg45rI.js";import"./index-B8hlXOwE.js";import"./index-Dzcfq3Tc.js";import"./useLabels-Bl_SgAjf.js";import"./useButton-xcFgy60K.js";import"./RSPContexts-BrQCiqr8.js";import"./Text-P0Uog9HF.js";import"./useDateFormatter-CySaSF8N.js";import"./useControlledState-D87rnCnG.js";import"./useLocalizedStringFormatter-B8mdMXCK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DkKRQtpi.js";import"./useEvent-XcVfxEor.js";import"./getScrollParent-CUQivi4p.js";import"./scrollIntoView-uYMCGnr-.js";import"./useDescription-Bm9qBg99.js";import"./VisuallyHidden-CQi-zQEF.js";import"./clsx-Ciqy0D92.js";import"./Button-DsUfXBsa.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v7TRxJsd.js";import"./createLucideIcon-DTrJOepx.js";import"./chevron-right-DInfSwP8.js";import"./Heading-yrJTarcr.js";import"./Text-CGQubPUz.js";const G={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
