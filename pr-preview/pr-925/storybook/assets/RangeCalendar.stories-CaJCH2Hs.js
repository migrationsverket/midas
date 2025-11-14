import{m as t,$ as s}from"./iframe-vngjZ-4P.js";import{R as n}from"./RangeCalendar-D8umboIc.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-BLVM1Hx0.js";import"./Button-BC9sg2r9.js";import"./utils-DHeliekZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bz5znElO.js";import"./useFocusRing-DUbxX868.js";import"./index-CvXFvuDV.js";import"./index-ukHcnXjJ.js";import"./useLabels-se4Xxikx.js";import"./useButton-Dc_1rKgZ.js";import"./RSPContexts-1mbHIt5l.js";import"./Text-BbKxmc2D.js";import"./useDateFormatter-esRlyEqR.js";import"./useControlledState-TuR8R_1y.js";import"./useLocalizedStringFormatter-CZE4fUbg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CDF8NYOP.js";import"./useEvent-DtJ9s--c.js";import"./getScrollParent-BN7bdp6P.js";import"./scrollIntoView-3eYklhXT.js";import"./useDescription-DyNeAMeF.js";import"./VisuallyHidden-b4ZPYca2.js";import"./clsx-Ciqy0D92.js";import"./Button-fRzOyLJW.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CJOpBfq1.js";import"./chevron-right-CYXtYByG.js";import"./Heading-pu9kpDJD.js";import"./Text-By4ps0no.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
