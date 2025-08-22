import{j as l}from"./jsx-runtime-BYYWji4R.js";import{i as $}from"./icon-map-yTTVA-eu.js";import{r as T,R as k}from"./index-ClcD9ViR.js";import{c as G}from"./clsx-B-dksMZM.js";import{B as X}from"./Button-CrzHQrbK.js";import{X as J}from"./x-Dz2R9y6b.js";import{u as H}from"./useLocalizedStringFormatter-9M_dEwOo.js";import{v as Q}from"./v4-CtRu48qb.js";import"./createLucideIcon-uZw3gxGR.js";import"./info-CSjK64PU.js";import"./check-yXF3Bjrk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";const Z='"../theme/tokens.css"',ee="_infoBanner_cszz3_4",te="_success_cszz3_14",ne="_info_cszz3_4",se="_important_cszz3_24",re="_warning_cszz3_29",ae="_content_cszz3_38",ie="_heading_cszz3_44",oe="_text_cszz3_49",le="_icon_cszz3_55",ce="_dismissable_cszz3_60",c={tokens:Z,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--line-height-40":"1.375rem","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:ee,success:te,info:ne,important:se,warning:re,content:ae,heading:ie,text:oe,icon:le,dismissable:ce},pe={close:"Close"},de={close:"Stäng"},ue={en:pe,sv:de},b=({title:e,message:t,type:n,children:s,isDismissable:i=!1,defaultOpen:r,isOpen:a,onOpenChange:o,...p})=>{const v=$[n],[R,d]=T.useState(a??r??!0),m=H(ue);T.useEffect(()=>{a!==void 0&&d(a)},[a]);const f=()=>{d(!1),o==null||o(!1)};return R?l.jsxs("div",{...p,className:G(c.infoBanner,c[n],p.className),children:[l.jsx(v,{size:20,"aria-hidden":!0,className:c.icon}),l.jsxs("div",{className:c.content,children:[e&&l.jsx("strong",{className:c.heading,children:e}),l.jsxs("div",{className:c.text,children:[t,s]})]}),i&&l.jsx("div",{className:c.dismissable,children:l.jsx(X,{variant:"icon","aria-label":m.format("close"),onPress:f,children:l.jsx(J,{size:20})})})]}):null};try{b.displayName="InfoBanner",b.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const{addons:me}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:fe}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:I}=__STORYBOOK_MODULE_GLOBAL__;var ge=Object.defineProperty,he=(e,t)=>{for(var n in t)ge(e,n,{get:t[n],enumerable:!0})},_e="storybook/actions",Oe=`${_e}/action-event`,ye={depth:10,clearOnStoryChange:!0,limit:50},F=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:F(n,t)},be=e=>!!(typeof e=="object"&&e&&F(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),we=e=>{if(be(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),s=n==null?void 0:n.value;return typeof s=="object"&&(s==null?void 0:s.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(s.constructor.prototype)}),t}return e},ve=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Q():Date.now().toString(36)+Math.random().toString(36).substring(2);function w(e,t={}){let n={...ye,...t},s=function(...i){var d,m;if(t.implicit){let f=(d="__STORYBOOK_PREVIEW__"in I?I.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(f){let u=!((m=globalThis==null?void 0:globalThis.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),x=new fe({phase:f.phase,name:e,deprecated:u});if(u)console.warn(x);else throw x}}let r=me.getChannel(),a=ve(),o=5,p=i.map(we),v=i.length>1?p:p[0],R={id:a,count:0,data:{name:e,args:v},options:{...n,maxDepth:o+(n.depth||3),allowFunction:n.allowFunction||!1}};r.emit(Oe,R)};return s.isAction=!0,s.implicit=t.implicit,s}const{definePreview:Ze}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var Re={};he(Re,{argsEnhancers:()=>Te,loaders:()=>Ie});var U=(e,t)=>typeof t[e]>"u"&&!(e in t),Ee=e=>{let{initialArgs:t,argTypes:n,id:s,parameters:{actions:i}}=e;if(!i||i.disable||!i.argTypesRegex||!n)return{};let r=new RegExp(i.argTypesRegex);return Object.entries(n).filter(([a])=>!!r.test(a)).reduce((a,[o,p])=>(U(o,t)&&(a[o]=w(o,{implicit:!0,id:s})),a),{})},xe=e=>{let{initialArgs:t,argTypes:n,parameters:{actions:s}}=e;return s!=null&&s.disable||!n?{}:Object.entries(n).filter(([i,r])=>!!r.action).reduce((i,[r,a])=>(U(r,t)&&(i[r]=w(typeof a.action=="string"?a.action:r)),i),{})},Te=[xe,Ee],S=!1,ke=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in E&&typeof E.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=E.__STORYBOOK_TEST_ON_MOCK_CALL__;n((s,i)=>{let r=s.getMockName();r!=="spy"&&(!/^next\/.*::/.test(r)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>r.startsWith(a)))&&w(r)(i)}),S=!0}},Ie=[ke];const et={component:b,title:"Components/InfoBanner",tags:["autodocs"]},g={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},h={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},_={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},O={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},y={render:e=>{const[t,n]=k.useState(e.defaultOpen??!0);return k.useEffect(()=>{e.isOpen!==void 0&&n(e.isOpen)},[e.isOpen]),l.jsx(b,{...e,isOpen:t,onOpenChange:s=>{e.isOpen===void 0&&n(s),w("onOpenChange")(s)}})},args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0,defaultOpen:!0},argTypes:{isOpen:{control:"boolean"},defaultOpen:{control:"boolean"}}};var D,z,A;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(A=(z=g.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,j,Y;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(Y=(j=h.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var V,C,N;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(N=(C=_.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,L,W;O.parameters={...O.parameters,docs:{...(P=O.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(W=(L=O.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var K,M,q;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: JSX.IntrinsicAttributes & InfoBannerProps) => {
    const [isOpen, setIsOpen] = React.useState(args.defaultOpen ?? true);
    React.useEffect(() => {
      if (args.isOpen !== undefined) {
        setIsOpen(args.isOpen);
      }
    }, [args.isOpen]);
    return <InfoBanner {...args} isOpen={isOpen} onOpenChange={newOpen => {
      if (args.isOpen === undefined) {
        setIsOpen(newOpen);
      }
      action('onOpenChange')(newOpen);
    }} />;
  },
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true,
    defaultOpen: true // Default to open
  },
  argTypes: {
    isOpen: {
      control: 'boolean'
    },
    defaultOpen: {
      control: 'boolean'
    }
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const tt=["Success","Warning","Info","Important","Dismissable"];export{y as Dismissable,O as Important,_ as Info,g as Success,h as Warning,tt as __namedExportsOrder,et as default};
