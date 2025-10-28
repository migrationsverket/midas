import{r as L,j as e,e as M}from"./iframe-DSbaXIhm.js";import{i as X}from"./icon-map-CXr4x9jp.js";import{c as G}from"./clsx-Ciqy0D92.js";import{B as T}from"./Button-CGqKqbIg.js";import{X as H}from"./x-ED9ht_LO.js";import{u as J}from"./useLocalizedStringFormatter--GK1rXhk.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-Balk7dvp.js";import"./info-Bw_tUfD6.js";import"./check-KukJug04.js";import"./clsx-B-dksMZM.js";import"./Button.module-CcWMkJAG.js";import"./Button-BD-4S3jw.js";import"./utils-BurnuwBa.js";import"./Hidden-D1QEs3rJ.js";import"./useFocusRing-BQgtBlWR.js";import"./index-CpY4f8st.js";import"./index-BOHlJrOM.js";import"./useLabels-Duuh0L5K.js";import"./useButton-i6o-Pkvz.js";import"./LocalizedStringFormatter-BB0Nk989.js";const K="_infoBanner_1oj11_1",Q="_success_1oj11_11",U="_info_1oj11_1",Z="_important_1oj11_21",$="_warning_1oj11_26",ee="_content_1oj11_40",ne="_heading_1oj11_46",se="_text_1oj11_51",ae="_icon_1oj11_57",te="_dismissable_1oj11_66",s={infoBanner:K,success:Q,info:U,important:Z,warning:$,content:ee,heading:ne,text:se,icon:ae,dismissable:te},oe={close:"Close"},re={close:"Stäng"},ie={en:oe,sv:re},p=({title:n,message:o,type:a,children:r,isDismissable:i=!1,defaultOpen:R=!0,isOpen:h,onOpenChange:f,...y})=>{const g=typeof h<"u",[F,z]=L.useState(R),A=X[a],E=J(ie),P=()=>{f==null||f(!1),g||z(!1)};return g&&h||!g&&F?e.jsxs("div",{...y,className:G(s.infoBanner,s[a],y.className),children:[e.jsx(A,{size:20,"aria-hidden":!0,className:s.icon}),e.jsxs("div",{className:s.content,children:[n&&e.jsx("strong",{className:s.heading,children:n}),e.jsxs("div",{className:s.text,children:[o,r]})]}),i&&e.jsx("div",{className:s.dismissable,children:e.jsx(T,{variant:"icon","aria-label":E.format("close"),onPress:P,children:e.jsx(H,{size:20})})})]}):null};try{p.displayName="InfoBanner",p.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const Ve={component:p,title:"Components/InfoBanner",tags:["autodocs"]},l={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},c={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},m={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},d={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},t={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},u={args:{...t.args},render:n=>{const[o,a]=M.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(p,{...n,isOpen:o,onOpenChange:r=>{var i;a(r),(i=n.onOpenChange)==null||i.call(n,r)}}),!o&&e.jsx(T,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}};var w,b,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(_=(b=l.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var v,j,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var x,I,B;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var D,S,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var Y,k,C;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var N,q,W;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(W=(q=u.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const Ye=["Success","Warning","Info","Important","Dismissable","Controlled"];export{u as Controlled,t as Dismissable,d as Important,m as Info,l as Success,c as Warning,Ye as __namedExportsOrder,Ve as default};
