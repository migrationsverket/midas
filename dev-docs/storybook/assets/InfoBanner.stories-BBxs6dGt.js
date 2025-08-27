import{j as n}from"./jsx-runtime-BYYWji4R.js";import{i as se}from"./icon-map-yTTVA-eu.js";import{r as v,R as oe}from"./index-ClcD9ViR.js";import{c as re}from"./clsx-B-dksMZM.js";import{B as Q}from"./Button-Dfj_iPpZ.js";import{X as ie}from"./x-Dz2R9y6b.js";import{u as le}from"./useLocalizedStringFormatter-9M_dEwOo.js";import{f as U,u as _,e as d}from"./index-Q7OVwvWC.js";import"./createLucideIcon-uZw3gxGR.js";import"./info-CSjK64PU.js";import"./check-yXF3Bjrk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";const ce='"../theme/tokens.css"',de="_infoBanner_cszz3_4",ue="_success_cszz3_14",pe="_info_cszz3_4",me="_important_cszz3_24",fe="_warning_cszz3_29",ge="_content_cszz3_38",he="_heading_cszz3_44",ye="_text_cszz3_49",be="_icon_cszz3_55",we="_dismissable_cszz3_60",r={tokens:ce,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--line-height-40":"1.375rem","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:de,success:ue,info:pe,important:me,warning:fe,content:ge,heading:he,text:ye,icon:be,dismissable:we},ve={close:"Close"},_e={close:"Stäng"},Be={en:ve,sv:_e},w=({title:e,message:s,type:t,children:a,isDismissable:u=!1,defaultOpen:Z=!0,isOpen:p,onOpenChange:o,...B})=>{const k=v.useRef(!0),l=typeof p<"u",[$,O]=v.useState(l?p:Z),ee=se[t],ne=le(Be),te=()=>{o==null||o(!1),l||O(!1)};return v.useEffect(()=>{if(k.current){k.current=!1;return}O(ae=>{const C=l&&p||!l&&!ae;return C&&(o==null||o(!0)),C})},[p,l,o]),$?n.jsxs("div",{...B,className:re(r.infoBanner,r[t],B.className),children:[n.jsx(ee,{size:20,"aria-hidden":!0,className:r.icon}),n.jsxs("div",{className:r.content,children:[e&&n.jsx("strong",{className:r.heading,children:e}),n.jsxs("div",{className:r.text,children:[s,a]})]}),u&&n.jsx("div",{className:r.dismissable,children:n.jsx(Q,{variant:"icon","aria-label":ne.format("close"),onPress:te,children:n.jsx(ie,{size:20})})})]}):null};try{w.displayName="InfoBanner",w.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const Ge={component:w,title:"Components/InfoBanner",tags:["autodocs"]},m={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},f={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},g={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},h={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,onOpenChange:U()},play:async({canvas:e,step:s,args:t})=>{await s("it should fire the onOpenChange event and close",async()=>{const a=e.getByRole("button");await _.click(a),await d(t.onOpenChange).toHaveBeenCalledOnce(),await d(a).not.toBeVisible()})}},c={args:{...i.args,onOpenChange:U()},render:e=>{const[s,t]=oe.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(w,{...e,isOpen:s,onOpenChange:a=>{var u;t(a),(u=e.onOpenChange)==null||u.call(e,a)}}),!s&&n.jsx(Q,{autoFocus:!0,onPress:()=>t(!0),children:"Open"})]})}},b={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...c,play:async({canvas:e,step:s,args:t})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const a=e.getByRole("button");await _.click(a),await d(t.onOpenChange).toHaveBeenCalledWith(!1),await _.click(e.getByRole("button")),await d(t.onOpenChange).toHaveBeenCalledWith(!0),await d(t.onOpenChange).toHaveBeenCalledTimes(2)})}};var x,z,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var S,D,R;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(R=(D=f.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,j,T;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(T=(j=g.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var W,Y,N;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(N=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:N.source}}};var q,E,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var F,A,P;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Dismissable.args,
    onOpenChange: fn()
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should fire the onOpenChange event and close', async () => {
      const closeButton = canvas.getByRole('button');
      await userEvent.click(closeButton);
      await expect(args.onOpenChange).toHaveBeenCalledOnce();
      await expect(closeButton).not.toBeVisible();
    });
  }
}`,...(P=(A=y.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var L,M,X;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Dismissable.args,
    onOpenChange: fn()
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
}`,...(X=(M=c.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  ...Controlled,
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should fire the onOpenChange on both open and close', async () => {
      const closeButton = canvas.getByRole('button');
      await userEvent.click(closeButton);
      await expect(args.onOpenChange).toHaveBeenCalledWith(false);
      await userEvent.click(canvas.getByRole('button'));
      await expect(args.onOpenChange).toHaveBeenCalledWith(true);
      await expect(args.onOpenChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Je=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{c as Controlled,b as ControlledTests,i as Dismissable,y as DismissableTests,h as Important,g as Info,m as Success,f as Warning,Je as __namedExportsOrder,Ge as default};
