import{j as e,R as x}from"./iframe-C2hHAX_c.js";import{c as k}from"./clsx-Ciqy0D92.js";import{F as I}from"./FeedbackStatusIcon-DvZZDnb2.js";import{$ as S}from"./useControlledState-Bqiy5-s7.js";import{B as g}from"./Button-DlfSSXdG.js";import{X as B}from"./x-C0uuZGTx.js";import{u as C}from"./useLocalizedStringFormatter-BQOzlYhQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BcvDIfsv.js";import"./info-Bh7Hxsix.js";import"./check-BulYR5eh.js";import"./Button.module-D_C6WeTN.js";import"./Button-D8SyKFCR.js";import"./utils-CYjcBBm1.js";import"./Hidden-UkteWA62.js";import"./useFocusRing-71g5CJVP.js";import"./index-utew35I4.js";import"./index-BISH_zx5.js";import"./useLabels-CS2Af-Ri.js";import"./useButton-De47wRHH.js";import"./VisuallyHidden-DWzqY3m_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const D="_infoBanner_8niki_1",j="_success_8niki_11",V="_info_8niki_1",Y="_important_8niki_21",N="_warning_8niki_26",q="_content_8niki_40",T="_heading_8niki_46",W="_text_8niki_51",R="_icon_8niki_66",F="_dismissable_8niki_75",n={infoBanner:D,success:j,info:V,important:Y,warning:N,content:q,heading:T,text:W,icon:R,dismissable:F},$={close:"Close"},A={close:"Stäng"},E={en:$,sv:A},u=({title:s,message:r,type:a,children:i,isDismissable:f=!1,defaultOpen:h=!0,isOpen:y,onOpenChange:w,...d})=>{const[b,_]=S(y,h,w),v=C(E),O=()=>{_(!1)};return b?e.jsxs("aside",{...d,className:k(n.infoBanner,n[a],d.className),children:[e.jsx(I,{"aria-hidden":!0,className:n.icon,status:a}),e.jsxs("div",{className:n.content,children:[s&&e.jsx("strong",{className:n.heading,children:s}),e.jsxs("div",{className:n.text,children:[r,i]})]}),f&&e.jsx("div",{className:n.dismissable,children:e.jsx(g,{variant:"icon","aria-label":v.format("close"),onPress:O,children:e.jsx(B,{size:20})})})]}):null};try{u.displayName="InfoBanner",u.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const pe={component:u,title:"Components/InfoBanner",tags:["autodocs"]},o={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},l={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},c={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},m={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},p={args:{...t.args},render:s=>{const[r,a]=x.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(u,{...s,isOpen:r,onOpenChange:i=>{a(i),s.onOpenChange?.(i)}}),!r&&e.jsx(g,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ue=["Success","Warning","Info","Important","Dismissable","Controlled"];export{p as Controlled,t as Dismissable,m as Important,c as Info,o as Success,l as Warning,ue as __namedExportsOrder,pe as default};
