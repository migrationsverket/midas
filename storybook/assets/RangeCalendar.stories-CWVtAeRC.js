import{m as t,$ as s}from"./iframe-_Z42HqI2.js";import{R as n}from"./RangeCalendar-D7xFMR4a.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Cg9ETEH5.js";import"./Button-CK5CfXUr.js";import"./utils-CrFX56hd.js";import"./clsx-B-dksMZM.js";import"./Hidden-BhDJNGVH.js";import"./useFocusRing-BVlddUKs.js";import"./index-BjqvvYkr.js";import"./index-BufdmmQ5.js";import"./useLabels-CPlvQ2_t.js";import"./useButton-BBRfPduy.js";import"./RSPContexts-CHAQW4_v.js";import"./Text-BpRe27H2.js";import"./useDateFormatter-DN-bZf3F.js";import"./useControlledState-C42bKwUu.js";import"./useLocalizedStringFormatter-CWBL-q72.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-D-gxIzLb.js";import"./useEvent-vDDYHoIn.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-5yHK5kQM.js";import"./VisuallyHidden-BUe-0CEM.js";import"./clsx-Ciqy0D92.js";import"./Button-CJtuwFwb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAmkoZvN.js";import"./createLucideIcon-DxsQvIVq.js";import"./chevron-right-DoPk2KSf.js";import"./Heading-BMJh1aBf.js";import"./FieldError-BZ5o1p5r.js";import"./Text-B2Ny6SaZ.js";const H={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const I=["Primary","SelectedDates","Disabled","ReadOnly"];export{a as Disabled,r as Primary,o as ReadOnly,e as SelectedDates,I as __namedExportsOrder,H as default};
