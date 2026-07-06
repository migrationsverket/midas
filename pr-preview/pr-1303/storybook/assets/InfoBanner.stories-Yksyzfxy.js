import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-B7UyiEkL.js";import{t as i}from"./Button-k8MkXgfs.js";import{t as a}from"./button-f44xzpzO.js";import{n as o,t as s}from"./InfoBanner-DrjAa5UI.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{c=t(n(),1),o(),a(),l=r(),u={component:s,title:`Components/InfoBanner`,tags:[`autodocs`]},d={args:{title:`Thank you!`,message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:`success`}},f={args:{title:`Varning`,message:`Warning message
    with
    line
    breaks
    `,type:`warning`}},p={args:{title:`Information`,message:`Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. `,type:`info`}},m={args:{title:`Viktig`,message:`Allt är viktigt`,type:`important`}},h={args:{title:`Thank you!`,message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:`success`,isDismissable:!0}},g={args:{...h.args},render:e=>{let[t,n]=c.useState(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{...e,isOpen:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)}}),!t&&(0,l.jsx)(i,{autoFocus:!0,onPress:()=>n(!0),children:`Open`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Dismissable.args
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(true);
    return <>
        <InfoBanner {...args} isOpen={isOpen} onOpenChange={newOpen => {
        setIsOpen(newOpen);
        args.onOpenChange?.(newOpen);
      }} />
        {!isOpen && <Button autoFocus onPress={() => setIsOpen(true)}>
            Open
          </Button>}
      </>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Success`,`Warning`,`Info`,`Important`,`Dismissable`,`Controlled`]}))();export{g as Controlled,h as Dismissable,m as Important,p as Info,d as Success,f as Warning,_ as __namedExportsOrder,u as default};