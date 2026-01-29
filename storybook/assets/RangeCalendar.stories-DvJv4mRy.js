import{m as t,$ as s}from"./iframe-_gH3GU_Z.js";import{R as n}from"./RangeCalendar-C-nqLUYJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarHeader-CD8EXVoY.js";import"./Button-B0GHbiBt.js";import"./utils-CfJDu102.js";import"./clsx-B-dksMZM.js";import"./Hidden-D04Pc1_R.js";import"./useFocusRing-BXEJ-Tr4.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./RSPContexts-FS6mevKY.js";import"./Text-BRHHCRG8.js";import"./useDateFormatter-C8fy9jhZ.js";import"./useControlledState-D8rfmS1g.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useUpdateEffect-CTeb7m0H.js";import"./useEvent-DDt3427d.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DCw1B2k2.js";import"./VisuallyHidden-C6ArGHnI.js";import"./clsx-Ciqy0D92.js";import"./Button-DXF4_9k-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";import"./createLucideIcon-CfuZJf8D.js";import"./chevron-left-BR8xBBRi.js";import"./chevron-right-CGjvdpyU.js";import"./Heading-BWcf_paK.js";import"./FieldError-DpcLG2Fx.js";import"./Text-DjGT25-P.js";const I={component:n,title:"Components/Calendar/RangeCalendar",tags:["autodocs"]},r={},e={args:{defaultValue:{start:t.subtract({days:2}),end:t.add({days:2})}}},a={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},o={args:{isReadOnly:!0,value:{start:new s(1995,5,29),end:new s(1995,5,31)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
