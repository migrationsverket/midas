import{$ as t,m as s}from"./iframe-BI14_MVF.js";import{R as n}from"./RangeCalendar-ax4SSxrR.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-D9I44tyc.js";import"./Button-C1lGy2rc.js";import"./utils-CUoFg1P-.js";import"./clsx-B-dksMZM.js";import"./Hidden-fX2mzFJg.js";import"./useFocusRing-C_drv0-d.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./RSPContexts-BdlFwrnM.js";import"./Text-CI44Yo6S.js";import"./useDateFormatter-BRMru1U6.js";import"./useControlledState-C7wUKhFW.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CnCqR5Q3.js";import"./useEvent-Cl7U-xPX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRcfnO6m.js";import"./VisuallyHidden-CyW44Voa.js";import"./clsx-Ciqy0D92.js";import"./Button-CeI3qDWP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";import"./createLucideIcon-DENDzJzs.js";import"./chevron-left-CYHCMMZ7.js";import"./chevron-right-D_Au3aS0.js";import"./Heading-CbFl5iEv.js";import"./FieldError-0gwuUdiP.js";import"./Text-RJrnIXBc.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:s.subtract({days:2}),end:s.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new t(1995,5,29),end:new t(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
