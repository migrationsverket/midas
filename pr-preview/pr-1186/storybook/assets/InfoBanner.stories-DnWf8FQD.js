import{j as e,R as x}from"./iframe-Cd0-ZcsP.js";import{c as I}from"./clsx-Ciqy0D92.js";import{F as S}from"./FeedbackStatusIcon-yTCbgElr.js";import{$ as B}from"./useControlledState-d4JhcqA_.js";import{X as C}from"./x-DC2j07Yv.js";import{u as D}from"./useLocalizedStringFormatter-DOvNyG8w.js";import{B as g}from"./Button-pofFgtnZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BVwfSxcn.js";import"./info-CbLEtK7R.js";import"./check-p29FIlB4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button-7ELWuSQK.js";import"./utils-DhqpUTpA.js";import"./Hidden-CPmKijlW.js";import"./useFocusRing-Dfp5Gp4o.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUU_0XCx.js";const j="_infoBanner_7d8d1_1",V="_success_7d8d1_11",k="_info_7d8d1_1",Y="_important_7d8d1_21",N="_warning_7d8d1_26",q="_content_7d8d1_40",T="_heading_7d8d1_46",W="_text_7d8d1_51",R="_icon_7d8d1_66",F="_dismissable_7d8d1_75",n={infoBanner:j,success:V,info:k,important:Y,warning:N,content:q,heading:T,text:W,icon:R,dismissable:F},$={close:"Close"},A={close:"Stäng"},E={en:$,sv:A},p=({title:s,message:r,type:a,children:o,isDismissable:f=!1,defaultOpen:h=!0,isOpen:y,onOpenChange:w,...u})=>{const[b,_]=B(y,h,w),v=D(E),O=()=>{_(!1)};return b?e.jsxs("aside",{...u,className:I(n.infoBanner,n[a],u.className),children:[e.jsx(S,{"aria-hidden":!0,className:n.icon,status:a}),e.jsxs("div",{className:n.content,children:[s&&e.jsx("strong",{className:n.heading,children:s}),e.jsxs("div",{className:n.text,children:[r,o]})]}),f&&e.jsx("div",{className:n.dismissable,children:e.jsx(g,{variant:"icon","aria-label":v.format("close"),onPress:O,children:e.jsx(C,{size:20})})})]}):null};try{p.displayName="InfoBanner",p.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const pe={component:p,title:"Components/InfoBanner",tags:["autodocs"]},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},l={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},c={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},d={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},m={args:{...t.args},render:s=>{const[r,a]=x.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(p,{...s,isOpen:r,onOpenChange:o=>{a(o),s.onOpenChange?.(o)}}),!r&&e.jsx(g,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ue=["Success","Warning","Info","Important","Dismissable","Controlled"];export{m as Controlled,t as Dismissable,d as Important,c as Info,i as Success,l as Warning,ue as __namedExportsOrder,pe as default};
