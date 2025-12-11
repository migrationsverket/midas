import{m as t,$ as s}from"./iframe-aZts9sTH.js";import{R as n}from"./RangeCalendar-Dmc4MNgX.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-VYMWGOuJ.js";import"./Button-DRPL95DZ.js";import"./utils-CluU2ngc.js";import"./clsx-B-dksMZM.js";import"./Hidden-BI6nf7sE.js";import"./useFocusRing-BRQxC-Pn.js";import"./index-BtqyUEvJ.js";import"./index-BZUDR8KZ.js";import"./useLabels-Bi0kdcz9.js";import"./useButton-B4wgjHhf.js";import"./RSPContexts-DdRuYZUO.js";import"./Text-D3KoC4fT.js";import"./useDateFormatter-jGUQuAML.js";import"./useControlledState-BWJsClp4.js";import"./useLocalizedStringFormatter-DQv6nStV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CVQFqi9_.js";import"./useEvent-BhW_lhji.js";import"./getScrollParent-Bg93bK7j.js";import"./scrollIntoView-BTTXyCtL.js";import"./useDescription-C2-ZDTdq.js";import"./VisuallyHidden-CjGgagJb.js";import"./clsx-Ciqy0D92.js";import"./Button-Ba0mnMwa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Buplq2VU.js";import"./createLucideIcon-BCtVQ7cW.js";import"./chevron-left-D33vs4xx.js";import"./chevron-right-q8_9R46w.js";import"./Heading-C_7cPedE.js";import"./FieldError-FbBCy-EM.js";import"./Text-BFEuyFsz.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
