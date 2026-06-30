import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Ui as r,Yi as i,da as a,t as o}from"./iframe-BHCyice-.js";import{n as s,t as c}from"./Calendar-DoXGvtfz.js";var l,u,d,f,p,m,h,g,_;e((()=>{l=t(n(),1),r(),s(),u=o(),d={component:c,render:e=>{let[t,n]=(0,l.useState)(null);return(0,u.jsx)(c,{value:t,onChange:n,...e})},title:`Components/Calendar`,tags:[`autodocs`]},f={},p={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:new i(1995,5,29)}},h={args:{isInvalid:!0,errorMessage:`Något gick fel`}},g={args:{isDateUnavailable:e=>a(e,`sv-SE`)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...g.parameters?.docs?.source}}},_=[`Primary`,`Disabled`,`ReadOnly`,`Invalid`,`UnavailableWeekends`]}))();export{p as Disabled,h as Invalid,f as Primary,m as ReadOnly,g as UnavailableWeekends,_ as __namedExportsOrder,d as default};