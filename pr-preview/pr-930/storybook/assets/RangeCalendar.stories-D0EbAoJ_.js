import{m as t,$ as s}from"./iframe-DzMIb7Ox.js";import{R as n}from"./RangeCalendar-DRdSfXPT.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DLY1_qU3.js";import"./Button-Crwjj3sD.js";import"./utils-Cdwe4BCh.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAvjwAnA.js";import"./useFocusRing-BFU8EAFv.js";import"./index-DW-0uUM6.js";import"./index-Cl0FZxW_.js";import"./useLabels-CeSEzTdd.js";import"./useButton-1toAChHK.js";import"./RSPContexts-DJiMJ6Uh.js";import"./Text-BBuKGEIS.js";import"./useDateFormatter-CFheGWWG.js";import"./useControlledState-C6lxKGJg.js";import"./useLocalizedStringFormatter-Cm24wEWc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-a3rkpYT3.js";import"./useEvent-ZscvBuYj.js";import"./getScrollParent-BMEE02Hx.js";import"./scrollIntoView-C77nXoWt.js";import"./useDescription-BHWqtBw9.js";import"./VisuallyHidden-BJydeYP9.js";import"./clsx-Ciqy0D92.js";import"./Button-BHSCiAEx.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DxKoJQzX.js";import"./chevron-right-V_emao_e.js";import"./Heading-Br2mJzVB.js";import"./Text-CuzShXx2.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
