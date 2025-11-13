import{m as t,$ as s}from"./iframe-CyMjtGPK.js";import{R as n}from"./RangeCalendar-BJ4nmzKw.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-Dv-7GrF3.js";import"./Button-BXSdsNHC.js";import"./utils-DVuKvfbU.js";import"./clsx-B-dksMZM.js";import"./Hidden-IMfBhQ0L.js";import"./useFocusRing-ChpYD699.js";import"./index-D_9YXFXE.js";import"./index-CEYNSK8w.js";import"./useLabels-DNtrS2Qm.js";import"./useButton-KGQDEH2-.js";import"./RSPContexts-B7a1EqUx.js";import"./Text-DzIkDf4e.js";import"./useDateFormatter-BfXBR7Cy.js";import"./useControlledState-CTMqSIS3.js";import"./useLocalizedStringFormatter-CLPnsWem.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-B6nZUL2A.js";import"./useEvent-DGFI6kX3.js";import"./getScrollParent-Da9WjJ5R.js";import"./scrollIntoView-DiSP5vc7.js";import"./useDescription-y7zAw2pV.js";import"./VisuallyHidden-BjRgoPVR.js";import"./clsx-Ciqy0D92.js";import"./Button-B8uAn95p.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-D70ZsCEu.js";import"./chevron-right-Dtj9eaM7.js";import"./Heading-Bo_fpOH0.js";import"./Text-Ugwvt_bi.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
