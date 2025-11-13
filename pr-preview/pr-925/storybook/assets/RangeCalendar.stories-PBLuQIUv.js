import{m as t,$ as s}from"./iframe-CbbBAmzj.js";import{R as n}from"./RangeCalendar-BgE5PLIk.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-C_X82hjR.js";import"./Button-QZ9MaBJ0.js";import"./utils-BhRPGHPf.js";import"./clsx-B-dksMZM.js";import"./Hidden-c3MDr7Jx.js";import"./useFocusRing-0mAROpRM.js";import"./index-DHUIB7sV.js";import"./index-D-NGygsf.js";import"./useLabels-Cazyn2uu.js";import"./useButton-D2eklsDg.js";import"./RSPContexts-BPA00K2J.js";import"./Text-CsK72l07.js";import"./useDateFormatter-CgA2rLBM.js";import"./useControlledState-BiEt7xRU.js";import"./useLocalizedStringFormatter-BdrD0Kyz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DOgjTSiE.js";import"./useEvent-CCkUFzKP.js";import"./getScrollParent-_ZlqpQjL.js";import"./scrollIntoView-CR5VKzw8.js";import"./useDescription-B-ccyjfI.js";import"./VisuallyHidden-ClvY-xxs.js";import"./clsx-Ciqy0D92.js";import"./Button-xJdt2F7s.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CroHsTCf.js";import"./chevron-right-DGjAYrGi.js";import"./Heading-DvBuq4JF.js";import"./Text-n09TZFQz.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
