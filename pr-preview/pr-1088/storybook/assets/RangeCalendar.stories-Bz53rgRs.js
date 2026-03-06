import{$ as t,m as s}from"./iframe-CgL5jpdX.js";import{R as n}from"./RangeCalendar-B2LZCjG4.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-DqGZXX9R.js";import"./Button-Z-LnhU8E.js";import"./utils-BwYOvAb8.js";import"./clsx-B-dksMZM.js";import"./Hidden-C2oIje6j.js";import"./useFocusRing-CzWgPPi5.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./RSPContexts-TxIrKy65.js";import"./Text-C7o90fsQ.js";import"./useDateFormatter-Bfc624Qg.js";import"./useControlledState-CyaCWJoJ.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-cJInICqi.js";import"./useEvent-DWxTDEgS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B8kyRAqY.js";import"./VisuallyHidden-BsEPRBBE.js";import"./clsx-Ciqy0D92.js";import"./Button-DSLJU119.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";import"./createLucideIcon-CxmWxSan.js";import"./chevron-left-LEWWqT4b.js";import"./chevron-right-Cb56Ae65.js";import"./Heading-YDvkZKr1.js";import"./FieldError-BH_BPKHD.js";import"./Text-MhlqGevy.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
