import{r as j,j as e,R as I}from"./iframe-BWdkMAjO.js";import{c as S}from"./clsx-Ciqy0D92.js";import{F as C}from"./FeedbackStatusIcon-Bel3rpnQ.js";import{B as h}from"./Button-VYBWmn37.js";import{X as B}from"./x-CUMw8g3s.js";import{u as D}from"./useLocalizedStringFormatter-B72kiSfm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-UbHQFer_.js";import"./info-CCiOt4VD.js";import"./check-CNRuk5pp.js";import"./Button.module-Co5e5YHp.js";import"./Button-DbXwylTQ.js";import"./utils-C4rGLdQa.js";import"./Hidden-DoytNLvt.js";import"./useFocusRing-Dz8KRmRs.js";import"./index-PBQ0q_wK.js";import"./index-B_yrj6ZN.js";import"./useLabels-f4Sfov9b.js";import"./useButton-CRIQl1ZU.js";import"./VisuallyHidden-DDe5r2jE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const V="_infoBanner_1oj11_1",k="_success_1oj11_11",Y="_info_1oj11_1",N="_important_1oj11_21",q="_warning_1oj11_26",T="_content_1oj11_40",W="_heading_1oj11_46",R="_text_1oj11_51",F="_icon_1oj11_57",E="_dismissable_1oj11_66",n={infoBanner:V,success:k,info:Y,important:N,warning:q,content:T,heading:W,text:R,icon:F,dismissable:E},A={close:"Close"},P={close:"Stäng"},z={en:A,sv:P},d=({title:s,message:r,type:t,children:o,isDismissable:y=!1,defaultOpen:w=!0,isOpen:g,onOpenChange:b,...f})=>{const p=typeof g<"u",[_,v]=j.useState(w),x=D(z),O=()=>{b?.(!1),p||v(!1)};return p&&g||!p&&_?e.jsxs("div",{...f,className:S(n.infoBanner,n[t],f.className),children:[e.jsx(C,{"aria-hidden":!0,className:n.icon,status:t}),e.jsxs("div",{className:n.content,children:[s&&e.jsx("strong",{className:n.heading,children:s}),e.jsxs("div",{className:n.text,children:[r,o]})]}),y&&e.jsx("div",{className:n.dismissable,children:e.jsx(h,{variant:"icon","aria-label":x.format("close"),onPress:O,children:e.jsx(B,{size:20})})})]}):null};try{d.displayName="InfoBanner",d.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const ue={component:d,title:"Components/InfoBanner",tags:["autodocs"]},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},l={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},c={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},m={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},a={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},u={args:{...a.args},render:s=>{const[r,t]=I.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(d,{...s,isOpen:r,onOpenChange:o=>{t(o),s.onOpenChange?.(o)}}),!r&&e.jsx(h,{autoFocus:!0,onPress:()=>t(!0),children:"Open"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const de=["Success","Warning","Info","Important","Dismissable","Controlled"];export{u as Controlled,a as Dismissable,m as Important,c as Info,i as Success,l as Warning,de as __namedExportsOrder,ue as default};
