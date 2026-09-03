import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{t as r,z as i}from"./iframe-KO09DDzx.js";import{n as a,t as o}from"./clsx-C3UByjro.js";import{t as s}from"./Button-Diqiy6bX.js";import{n as c,t as l}from"./lucide-react-Czq9it2u.js";import{r as u,t as d}from"./intl-BKUFLSgM.js";import{t as f}from"./button-pBqefKCr.js";import{n as p,t as m}from"./FeedbackStatusIcon-BfwNsbzo.js";import{t as h}from"./import-gYAiHFiQ.js";var g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{g=`_infoBanner_7d8d1_1`,_=`_success_7d8d1_11`,v=`_info_7d8d1_1`,y=`_important_7d8d1_21`,b=`_warning_7d8d1_26`,x=`_content_7d8d1_40`,S=`_heading_7d8d1_46`,C=`_text_7d8d1_51`,w=`_icon_7d8d1_66`,T=`_dismissable_7d8d1_75`,E={infoBanner:g,success:_,info:v,important:y,warning:b,content:x,heading:S,text:C,icon:w,dismissable:T}})),O,k,A,j=e((()=>{O={close:`Close`},k={close:`Stäng`},A={en:O,sv:k}})),M,N,P=e((()=>{n(),l(),D(),a(),f(),d(),j(),p(),h(),M=r(),N=({title:e,message:t,type:n,children:r,isDismissable:a=!1,defaultOpen:l=!0,isOpen:d,onOpenChange:f,...p})=>{let[h,g]=i(d,l,f),_=u(A),v=()=>{g(!1)};return h?(0,M.jsxs)(`aside`,{...p,className:o(E.infoBanner,E[n],p.className),children:[(0,M.jsx)(m,{"aria-hidden":!0,className:E.icon,status:n}),(0,M.jsxs)(`div`,{className:E.content,children:[e&&(0,M.jsx)(`strong`,{className:E.heading,children:e}),(0,M.jsxs)(`div`,{className:E.text,children:[t,r]})]}),a&&(0,M.jsx)(`div`,{className:E.dismissable,children:(0,M.jsx)(s,{variant:`icon`,"aria-label":_.format(`close`),onPress:v,children:(0,M.jsx)(c,{size:20})})})]}):null}})),F,I,L,R,z,B,V,H,U,W;e((()=>{F=t(n(),1),P(),f(),I=r(),L={component:N,title:`Components/InfoBanner`,tags:[`autodocs`]},R={args:{title:`Thank you!`,message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:`success`}},z={args:{title:`Varning`,message:`Warning message
    with
    line
    breaks
    `,type:`warning`}},B={args:{title:`Information`,message:`Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. `,type:`info`}},V={args:{title:`Viktig`,message:`Allt är viktigt`,type:`important`}},H={args:{title:`Thank you!`,message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:`success`,isDismissable:!0}},U={args:{...H.args},render:e=>{let[t,n]=F.useState(!0);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(N,{...e,isOpen:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)}}),!t&&(0,I.jsx)(s,{autoFocus:!0,onPress:()=>n(!0),children:`Open`})]})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Success`,`Warning`,`Info`,`Important`,`Dismissable`,`Controlled`]}))();export{U as Controlled,H as Dismissable,V as Important,B as Info,R as Success,z as Warning,W as __namedExportsOrder,L as default};