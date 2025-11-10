import{m as t,$ as s}from"./iframe-2wgIB9ov.js";import{R as n}from"./RangeCalendar-BjDnyz3P.js";import"./preload-helper-Ct5FWWRu.js";import"./CalendarHeader-cpEzXaFY.js";import"./Button-D4zAQrcJ.js";import"./utils-DaRf50JR.js";import"./clsx-B-dksMZM.js";import"./Hidden-CBQkbk4i.js";import"./useFocusRing-525HP1g7.js";import"./index-CD0ir1m5.js";import"./index-lBQIxa3z.js";import"./useLabels-DWZ8l6Oh.js";import"./useButton-C73Zvfrc.js";import"./RSPContexts-BTDVWGny.js";import"./Text-aNiv-eLR.js";import"./useDateFormatter-Cr0U-rkz.js";import"./useControlledState-DYBM3KFS.js";import"./useLocalizedStringFormatter-Db4gfQ33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-DZhMP5FB.js";import"./useEvent-I4eMPhOT.js";import"./getScrollParent-BCIlnNrp.js";import"./scrollIntoView-wN9fvFrD.js";import"./useDescription-DTDZRqpT.js";import"./VisuallyHidden-BisFr-Je.js";import"./clsx-Ciqy0D92.js";import"./Button-DFwCR_3-.js";import"./Button.module-CtQ1deO8.js";import"./createLucideIcon-DIWvrCmu.js";import"./chevron-right-DQRHAPib.js";import"./Heading-CtnV3cTO.js";import"./Text-B1FXYo5G.js";const F={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
