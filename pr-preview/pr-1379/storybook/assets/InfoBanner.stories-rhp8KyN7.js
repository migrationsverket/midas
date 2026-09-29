import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{i as r,r as i,t as a}from"./src-o3xyB3PZ.js";import{n as o,t as s}from"./useControlledState-_dP2S65v.js";import{n as c}from"./iframe-Ba8-NKG0.js";import{n as l,t as u}from"./Button-BSX9ujxi.js";import{n as d,t as f}from"./FeedbackStatusIcon-Clt4UYdz.js";import{n as p,t as m}from"./x-BcZ7HkPg.js";var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{h=`_infoBanner_7d8d1_1`,g=`_success_7d8d1_11`,_=`_info_7d8d1_1`,v=`_important_7d8d1_21`,y=`_warning_7d8d1_26`,b=`_content_7d8d1_40`,x=`_heading_7d8d1_46`,S=`_text_7d8d1_51`,C=`_icon_7d8d1_66`,w=`_dismissable_7d8d1_75`,T={infoBanner:h,success:g,info:_,important:v,warning:y,content:b,heading:x,text:S,icon:C,dismissable:w}})))()}var D,O,k;function A(){return(A=t((()=>{D={close:`Close`},O={close:`Stäng`},k={en:D,sv:O}})))()}var j,M;function N(){return(N=t((()=>{n(),p(),E(),a(),l(),A(),d(),o(),j=c(),M=({title:e,message:t,type:n,children:a,isDismissable:o=!1,defaultOpen:c=!0,isOpen:l,onOpenChange:d,...p})=>{let[h,g]=s(l,c,d),_=i(k),v=()=>{g(!1)};return h?(0,j.jsxs)(`aside`,{...p,className:r(T.infoBanner,T[n],p.className),children:[(0,j.jsx)(f,{"aria-hidden":!0,className:T.icon,status:n}),(0,j.jsxs)(`div`,{className:T.content,children:[e&&(0,j.jsx)(`strong`,{className:T.heading,children:e}),(0,j.jsxs)(`div`,{className:T.text,children:[t,a]})]}),o&&(0,j.jsx)(`div`,{className:T.dismissable,children:(0,j.jsx)(u,{variant:`icon`,"aria-label":_.format(`close`),onPress:v,children:(0,j.jsx)(m,{size:20})})})]}):null},M.__docgenInfo={description:`Displays a static message as an inline banner`,methods:[],displayName:`InfoBanner`,props:{type:{required:!0,tsType:{name:`union`,raw:`'success' | 'info' | 'important' | 'warning'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'important'`},{name:`literal`,value:`'warning'`}]},description:`Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).`},title:{required:!1,tsType:{name:`string`},description:`The title of the banner.`},message:{required:!1,tsType:{name:`union`,raw:`string | React.ReactNode`,elements:[{name:`string`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:`The message to be displayed in the banner. Can be a string or a React node.`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Additional elements to be displayed inside the banner.`},isDismissable:{required:!1,tsType:{name:`boolean`},description:`If true, a dismiss button will be displayed in the top right corner.`,defaultValue:{value:`false`,computed:!1}},defaultOpen:{required:!1,tsType:{name:`boolean`},description:`The initial visibility of the banner when it is uncontrolled.`,defaultValue:{value:`true`,computed:!1}},isOpen:{required:!1,tsType:{name:`boolean`},description:`Controls the visibility of the banner when it is controlled.`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Callback fired when the visibility of the banner changes.`}}}})))()}var P,F,I,L,R,z,B,V,H,U;function W(){return(W=t((()=>{P=e(n(),1),N(),l(),F=c(),I={component:M,title:`Components/InfoBanner`,tags:[`autodocs`]},L={args:{title:`Thank you!`,message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:`success`}},R={args:{title:`Varning`,message:`Warning message
    with
    line
    breaks
    `,type:`warning`}},z={args:{title:`Information`,message:`Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. `,type:`info`}},B={args:{title:`Viktig`,message:`Allt är viktigt`,type:`important`}},V={args:{title:`Thank you!`,message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:`success`,isDismissable:!0}},H={args:{...V.args},render:e=>{let[t,n]=P.useState(!0);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(M,{...e,isOpen:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)}}),!t&&(0,F.jsx)(u,{autoFocus:!0,onPress:()=>n(!0),children:`Open`})]})}},U=[`Success`,`Warning`,`Info`,`Important`,`Dismissable`,`Controlled`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as Controlled,V as Dismissable,B as Important,z as Info,L as Success,R as Warning,U as __namedExportsOrder,I as default};