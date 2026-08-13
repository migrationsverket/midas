import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{Dr as r,Tr as i,Xn as a,nr as o,t as s,vr as c}from"./iframe-YMMYhihw.js";import{n as l,t as u}from"./Calendar-BHjUY8pY.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{d=t(n(),1),a(),l(),f=s(),p={component:u,render:e=>{let[t,n]=(0,d.useState)(null);return(0,f.jsx)(u,{value:t,onChange:n,...e})},title:`Components/Calendar`,tags:[`autodocs`]},m={},h={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},g={args:{isReadOnly:!0,value:new o(1995,5,29)}},_={args:{isInvalid:!0,errorMessage:`Något gick fel`}},v={args:{isDateUnavailable:e=>c(e,`sv-SE`)}},y={tags:[`!autodocs`,`!snapshot`],render:e=>{let[t,n]=(0,d.useState)([]);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(u,{...e,selectionMode:`multiple`,value:t,onChange:n,defaultFocusedValue:r(i())}),(0,f.jsxs)(`p`,{children:[t.length,` valda datum`]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!snapshot'],
  render: args => {
    const [selectedDates, setSelectedDates] = useState<readonly DateValue[]>([]);
    return <div>
        <Calendar<'multiple'> {...args} selectionMode='multiple' value={selectedDates} onChange={setSelectedDates} defaultFocusedValue={today(getLocalTimeZone())} />
        <p>{selectedDates.length} valda datum</p>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`Disabled`,`ReadOnly`,`Invalid`,`UnavailableWeekends`,`MultiSelect`]}))();export{h as Disabled,_ as Invalid,y as MultiSelect,m as Primary,g as ReadOnly,v as UnavailableWeekends,b as __namedExportsOrder,p as default};