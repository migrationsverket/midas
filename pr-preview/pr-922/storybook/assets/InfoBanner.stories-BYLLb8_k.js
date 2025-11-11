import{r as I,j as e,e as B}from"./iframe-BLeM1TYl.js";import{i as C}from"./icon-map-D8ko7l7n.js";import{c as D}from"./clsx-Ciqy0D92.js";import{B as h}from"./Button-Cpp3gRTf.js";import{X as S}from"./x-Df5oesPo.js";import{u as V}from"./useLocalizedStringFormatter-D5OW06nN.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CcGBU6Ho.js";import"./info-C2Cg8Glk.js";import"./check-CpvLHgc3.js";import"./clsx-B-dksMZM.js";import"./Button.module-CtQ1deO8.js";import"./Button-CYodFdJJ.js";import"./utils-D0fgVb1b.js";import"./Hidden--RnSCsvw.js";import"./useFocusRing-4Dtk05IT.js";import"./index-BTEhrLut.js";import"./index-C_6FlPHF.js";import"./useLabels-C72m2YsE.js";import"./useButton-Byh70Qyk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const Y="_infoBanner_1oj11_1",k="_success_1oj11_11",N="_info_1oj11_1",q="_important_1oj11_21",W="_warning_1oj11_26",T="_content_1oj11_40",R="_heading_1oj11_46",F="_text_1oj11_51",z="_icon_1oj11_57",A="_dismissable_1oj11_66",n={infoBanner:Y,success:k,info:N,important:q,warning:W,content:T,heading:R,text:F,icon:z,dismissable:A},E={close:"Close"},P={close:"Stäng"},L={en:E,sv:P},u=({title:s,message:o,type:a,children:r,isDismissable:y=!1,defaultOpen:w=!0,isOpen:g,onOpenChange:b,...f})=>{const p=typeof g<"u",[_,v]=I.useState(w),O=C[a],j=V(L),x=()=>{b?.(!1),p||v(!1)};return p&&g||!p&&_?e.jsxs("div",{...f,className:D(n.infoBanner,n[a],f.className),children:[e.jsx(O,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[s&&e.jsx("strong",{className:n.heading,children:s}),e.jsxs("div",{className:n.text,children:[o,r]})]}),y&&e.jsx("div",{className:n.dismissable,children:e.jsx(h,{variant:"icon","aria-label":j.format("close"),onPress:x,children:e.jsx(S,{size:20})})})]}):null};try{u.displayName="InfoBanner",u.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const de={component:u,title:"Components/InfoBanner",tags:["autodocs"]},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},l={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},c={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},m={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},d={args:{...t.args},render:s=>{const[o,a]=B.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(u,{...s,isOpen:o,onOpenChange:r=>{a(r),s.onOpenChange?.(r)}}),!o&&e.jsx(h,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
