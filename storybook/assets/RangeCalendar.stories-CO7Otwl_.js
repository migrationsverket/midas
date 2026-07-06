import{i as e}from"./preload-helper-CT_b8DTk.js";import{Fi as t,Li as n,Ui as r,Yi as i}from"./iframe-OPAq85f3.js";import{n as a,t as o}from"./RangeCalendar-ktkEwH2y.js";var s,c,l,u,d,f;e((()=>{t(),r(),a(),s={component:o,title:`Components/Calendar/RangeCalendar`,tags:[`autodocs`]},c={},l={args:{defaultValue:{start:n.subtract({days:2}),end:n.add({days:2})}}},u={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:{start:new i(1995,5,29),end:new i(1995,5,31)}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31)
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`SelectedDates`,`Disabled`,`ReadOnly`]}))();export{u as Disabled,c as Primary,d as ReadOnly,l as SelectedDates,f as __namedExportsOrder,s as default};