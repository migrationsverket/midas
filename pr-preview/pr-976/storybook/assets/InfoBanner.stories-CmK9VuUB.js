import{r as I,j as e,R as B}from"./iframe-BHqTUq8s.js";import{i as C}from"./icon-map-h_jiSuq1.js";import{c as D}from"./clsx-Ciqy0D92.js";import{B as h}from"./Button-B5hBY_tv.js";import{X as S}from"./x-D1nhCFMc.js";import{u as V}from"./useLocalizedStringFormatter-Djq8wsFX.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-ClnAiwMi.js";import"./info-AlYopkhl.js";import"./check-2WOXg9Sl.js";import"./clsx-B-dksMZM.js";import"./Button.module-D9QkU2r7.js";import"./Button-CE94D4y2.js";import"./utils-Bj3EyYaW.js";import"./Hidden-N1ucyMbU.js";import"./useFocusRing-BmhCrYVv.js";import"./index-Sstif_cL.js";import"./index-cPauk73w.js";import"./useLabels-D7M8cQNq.js";import"./useButton-DYUODf-M.js";import"./VisuallyHidden-BluHmF1Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const Y="_infoBanner_1oj11_1",k="_success_1oj11_11",N="_info_1oj11_1",q="_important_1oj11_21",W="_warning_1oj11_26",R="_content_1oj11_40",T="_heading_1oj11_46",F="_text_1oj11_51",z="_icon_1oj11_57",A="_dismissable_1oj11_66",n={infoBanner:Y,success:k,info:N,important:q,warning:W,content:R,heading:T,text:F,icon:z,dismissable:A},E={close:"Close"},P={close:"Stäng"},L={en:E,sv:P},u=({title:s,message:o,type:a,children:r,isDismissable:y=!1,defaultOpen:w=!0,isOpen:g,onOpenChange:b,...f})=>{const p=typeof g<"u",[_,v]=I.useState(w),O=C[a],j=V(L),x=()=>{b?.(!1),p||v(!1)};return p&&g||!p&&_?e.jsxs("div",{...f,className:D(n.infoBanner,n[a],f.className),children:[e.jsx(O,{size:20,"aria-hidden":!0,className:n.icon}),e.jsxs("div",{className:n.content,children:[s&&e.jsx("strong",{className:n.heading,children:s}),e.jsxs("div",{className:n.text,children:[o,r]})]}),y&&e.jsx("div",{className:n.dismissable,children:e.jsx(h,{variant:"icon","aria-label":j.format("close"),onPress:x,children:e.jsx(S,{size:20})})})]}):null};try{u.displayName="InfoBanner",u.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const ue={component:u,title:"Components/InfoBanner",tags:["autodocs"]},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
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
}`,...d.parameters?.docs?.source}}};const pe=["Success","Warning","Info","Important","Dismissable","Controlled"];export{d as Controlled,t as Dismissable,m as Important,c as Info,i as Success,l as Warning,pe as __namedExportsOrder,ue as default};
