import{r as x,j as e,R as I}from"./iframe-DQ8MWDzl.js";import{c as B}from"./clsx-Ciqy0D92.js";import{F as C}from"./FeedbackStatusIcon-BsLp5eja.js";import{B as h}from"./Button-lMIcCMmO.js";import{X as D}from"./x-B_gkLLTD.js";import{u as S}from"./useLocalizedStringFormatter-DopWcpGf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BgRpLVeX.js";import"./info-B1V3XFmD.js";import"./check-CeaqFALW.js";import"./Button.module-Co5e5YHp.js";import"./Button-C6oyl_qC.js";import"./utils-MUondYLm.js";import"./Hidden-BFm8JVh5.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./VisuallyHidden-CYOdgqsq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const k="_infoBanner_1oj11_1",V="_success_1oj11_11",Y="_info_1oj11_1",N="_important_1oj11_21",q="_warning_1oj11_26",W="_content_1oj11_40",R="_heading_1oj11_46",T="_text_1oj11_51",F="_icon_1oj11_57",A="_dismissable_1oj11_66",n={infoBanner:k,success:V,info:Y,important:N,warning:q,content:W,heading:R,text:T,icon:F,dismissable:A},E={close:"Close"},P={close:"Stäng"},z={en:E,sv:P},u=({title:s,message:o,type:a,children:r,isDismissable:y=!1,defaultOpen:w=!0,isOpen:g,onOpenChange:b,...f})=>{const p=typeof g<"u",[_,v]=x.useState(w),O=S(z),j=()=>{b?.(!1),p||v(!1)};return p&&g||!p&&_?e.jsxs("div",{...f,className:B(n.infoBanner,n[a],f.className),children:[e.jsx(C,{"aria-hidden":!0,className:n.icon,status:a}),e.jsxs("div",{className:n.content,children:[s&&e.jsx("strong",{className:n.heading,children:s}),e.jsxs("div",{className:n.text,children:[o,r]})]}),y&&e.jsx("div",{className:n.dismissable,children:e.jsx(h,{variant:"icon","aria-label":O.format("close"),onPress:j,children:e.jsx(D,{size:20})})})]}):null};try{u.displayName="InfoBanner",u.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const de={component:u,title:"Components/InfoBanner",tags:["autodocs"]},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},l={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},c={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},m={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},d={args:{...t.args},render:s=>{const[o,a]=I.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(u,{...s,isOpen:o,onOpenChange:r=>{a(r),s.onOpenChange?.(r)}}),!o&&e.jsx(h,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ue=["Success","Warning","Info","Important","Dismissable","Controlled"];export{d as Controlled,t as Dismissable,m as Important,c as Info,i as Success,l as Warning,ue as __namedExportsOrder,de as default};
