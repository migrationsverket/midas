import{$ as t,m as s}from"./iframe-CFC4xcGk.js";import{R as n}from"./RangeCalendar-CXPVh5Fb.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-uzi_jDma.js";import"./Button-Dlhy25YO.js";import"./utils-YAjyJ6o5.js";import"./clsx-B-dksMZM.js";import"./Hidden-BvfitbEd.js";import"./useFocusRing-jXz3NGbj.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./RSPContexts-BaTuXADK.js";import"./Text-AmqWzkOV.js";import"./useDateFormatter-BpefFrYi.js";import"./useControlledState-CPr8PZqM.js";import"./useLocalizedStringFormatter-dA5DnFaT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DxVR2Bwn.js";import"./useEvent-BUJ9aQ4c.js";import"./getScrollParent-v4OBvkmq.js";import"./scrollIntoView-CKdxk-E0.js";import"./useDescription-BsBgpIxP.js";import"./VisuallyHidden-BPhSZleF.js";import"./clsx-Ciqy0D92.js";import"./chevron-left-BxSLZqTI.js";import"./createLucideIcon-BfFQGVhS.js";import"./chevron-right-OdEjEpM5.js";import"./Button-DmKKfG5W.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";import"./Heading-DngLrKmF.js";import"./FieldError-DPjUPYFy.js";import"./Text-ZUooKx_2.js";const J={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const K=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,K as __namedExportsOrder,J as default};
