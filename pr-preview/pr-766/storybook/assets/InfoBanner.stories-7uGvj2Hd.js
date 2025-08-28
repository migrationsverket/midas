import{j as n}from"./jsx-runtime-BYYWji4R.js";import{i as se}from"./icon-map-yTTVA-eu.js";import{r as v,R as oe}from"./index-ClcD9ViR.js";import{c as re}from"./clsx-B-dksMZM.js";import{B as Q}from"./Button-DlS6FYEc.js";import{X as ie}from"./x-Dz2R9y6b.js";import{u as le}from"./useLocalizedStringFormatter-9M_dEwOo.js";import{f as U,u as _,e as p}from"./index-Q7OVwvWC.js";import"./createLucideIcon-uZw3gxGR.js";import"./info-CSjK64PU.js";import"./check-yXF3Bjrk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-CF2bVDCq.js";import"./Button-v_l_ujRb.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";const ce="_infoBanner_3tfrp_1",pe="_success_3tfrp_11",ue="_info_3tfrp_1",me="_important_3tfrp_21",de="_warning_3tfrp_26",ge="_content_3tfrp_35",fe="_heading_3tfrp_41",he="_text_3tfrp_46",ye="_icon_3tfrp_52",we="_dismissable_3tfrp_57",r={infoBanner:ce,success:pe,info:ue,important:me,warning:de,content:ge,heading:fe,text:he,icon:ye,dismissable:we},be={close:"Close"},ve={close:"Stäng"},_e={en:be,sv:ve},b=({title:e,message:s,type:t,children:a,isDismissable:u=!1,defaultOpen:Z=!0,isOpen:m,onOpenChange:o,...B})=>{const O=v.useRef(!0),l=typeof m<"u",[$,C]=v.useState(l?m:Z),ee=se[t],ne=le(_e),te=()=>{o==null||o(!1),l||C(!1)};return v.useEffect(()=>{if(O.current){O.current=!1;return}C(ae=>{const x=l&&m||!l&&!ae;return x&&(o==null||o(!0)),x})},[m,l,o]),$?n.jsxs("div",{...B,className:re(r.infoBanner,r[t],B.className),children:[n.jsx(ee,{size:20,"aria-hidden":!0,className:r.icon}),n.jsxs("div",{className:r.content,children:[e&&n.jsx("strong",{className:r.heading,children:e}),n.jsxs("div",{className:r.text,children:[s,a]})]}),u&&n.jsx("div",{className:r.dismissable,children:n.jsx(Q,{variant:"icon","aria-label":ne.format("close"),onPress:te,children:n.jsx(ie,{size:20})})})]}):null};try{b.displayName="InfoBanner",b.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const Xe={component:b,title:"Components/InfoBanner",tags:["autodocs"]},d={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},g={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},f={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},h={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,onOpenChange:U()},play:async({canvas:e,step:s,args:t})=>{await s("it should fire the onOpenChange event and close",async()=>{const a=e.getByRole("button");await _.click(a),await p(t.onOpenChange).toHaveBeenCalledOnce(),await p(a).not.toBeVisible()})}},c={args:{...i.args,onOpenChange:U()},render:e=>{const[s,t]=oe.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(b,{...e,isOpen:s,onOpenChange:a=>{var u;t(a),(u=e.onOpenChange)==null||u.call(e,a)}}),!s&&n.jsx(Q,{autoFocus:!0,onPress:()=>t(!0),children:"Open"})]})}},w={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...c,play:async({canvas:e,step:s,args:t})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const a=e.getByRole("button");await _.click(a),await p(t.onOpenChange).toHaveBeenCalledWith(!1),await _.click(e.getByRole("button")),await p(t.onOpenChange).toHaveBeenCalledWith(!0),await p(t.onOpenChange).toHaveBeenCalledTimes(2)})}};var I,S,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var k,R,V;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,T,W;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(W=(T=f.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var Y,N,q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,H,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(F=(H=i.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var z,A,P;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(M=c.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var G,J,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ge=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{c as Controlled,w as ControlledTests,i as Dismissable,y as DismissableTests,h as Important,f as Info,d as Success,g as Warning,Ge as __namedExportsOrder,Xe as default};
