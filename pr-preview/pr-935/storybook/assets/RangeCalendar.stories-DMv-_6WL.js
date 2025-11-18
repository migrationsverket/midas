import{m as t,$ as s}from"./iframe-CRoNsbQO.js";import{R as n}from"./RangeCalendar-XznJ9I4z.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-3ndda5qF.js";import"./Button-km7jXYEC.js";import"./utils-D0ifQBPW.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-LzNKej.js";import"./useFocusRing-DQkUJ1am.js";import"./index-DMJTdnmZ.js";import"./index-D3s2XdJN.js";import"./useLabels-BhNZU1Aw.js";import"./useButton-QNz5bkbl.js";import"./RSPContexts-kFSkNoSC.js";import"./Text-CAsCU6A1.js";import"./useDateFormatter-B1GNjTI4.js";import"./useControlledState-Dj6nb6WC.js";import"./useLocalizedStringFormatter-DvLKTy1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-ZCmthKkT.js";import"./useEvent-aJGP5zxw.js";import"./getScrollParent-CsA_2YDI.js";import"./scrollIntoView-BrB1dIDm.js";import"./useDescription-D4n7GTlG.js";import"./VisuallyHidden-BDiINJ_f.js";import"./clsx-Ciqy0D92.js";import"./Button-DGaMX184.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DIDS4uVQ.js";import"./chevron-right-CsLpT67R.js";import"./Heading-BXuhk9-h.js";import"./Text-CrBpTqh-.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
