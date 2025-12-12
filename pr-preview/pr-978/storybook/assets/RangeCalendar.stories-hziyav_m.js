import{m as t,$ as s}from"./iframe-BGtyy6fd.js";import{R as n}from"./RangeCalendar-B6UjhXqj.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_CjuDI4.js";import"./Button-DrTjj1gj.js";import"./utils-CccsvD7u.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxOQW0OL.js";import"./useFocusRing-BnRxtNNt.js";import"./index-Jo84nh3h.js";import"./index-iE9NyH8V.js";import"./useLabels-C6qEHWqP.js";import"./useButton-BpARo-s5.js";import"./RSPContexts-CVImfJEg.js";import"./Text-CdSUS3L4.js";import"./useDateFormatter-DlGTdNfr.js";import"./useControlledState-NBBb3dwB.js";import"./useLocalizedStringFormatter-BciR1wkJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B6O5_quF.js";import"./useEvent-CtQhVAtx.js";import"./getScrollParent-DmaRQTrd.js";import"./scrollIntoView-nLxHXHgJ.js";import"./useDescription-C16OAo1l.js";import"./VisuallyHidden-ClSljMM6.js";import"./clsx-Ciqy0D92.js";import"./Button-D11DdKki.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0q1zQmh.js";import"./createLucideIcon-4ZkmUN36.js";import"./chevron-left-DlGMRwk-.js";import"./chevron-right-BUV3Rz17.js";import"./Heading-B04CcTxN.js";import"./FieldError-CeFSAGIb.js";import"./Text-BVf8H_wM.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
