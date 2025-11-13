import{m as t,$ as s}from"./iframe-BkRwSuoF.js";import{R as n}from"./RangeCalendar-BAzW-aRl.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CxO4yth8.js";import"./Button-CO79J77U.js";import"./utils-BdDw6N01.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-1m_lMC.js";import"./useFocusRing-B3CGeMvZ.js";import"./index-CCvpWvoT.js";import"./index-Dldu1ldC.js";import"./useLabels--gJ5LkCh.js";import"./useButton-CswrRlr6.js";import"./RSPContexts-B3MVorUA.js";import"./Text-jotSgVSv.js";import"./useDateFormatter-Dt7L0C0e.js";import"./useControlledState-v9DI2Sbw.js";import"./useLocalizedStringFormatter-Cwp5Qrc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DjrFPNoj.js";import"./useEvent-FTwQNHvp.js";import"./getScrollParent-DA13BLUh.js";import"./scrollIntoView-O2aOyMO3.js";import"./useDescription-EQv126BS.js";import"./VisuallyHidden-Dh5oNNi1.js";import"./clsx-Ciqy0D92.js";import"./Button-Og-jXPv3.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-CDTY4y58.js";import"./chevron-right-CG9tODrV.js";import"./Heading-C09GpJqN.js";import"./Text-gdxh6ZQb.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
