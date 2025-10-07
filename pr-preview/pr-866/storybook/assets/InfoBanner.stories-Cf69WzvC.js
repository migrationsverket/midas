import{r as v,j as n,e as se}from"./iframe-BPyuKSpC.js";import{i as oe}from"./icon-map-CH7sNIey.js";import{c as re}from"./clsx-Ciqy0D92.js";import{B as J}from"./Button-B9Kwcc6D.js";import{X as ie}from"./x-Dz20i7NT.js";import{u as le}from"./useLocalizedStringFormatter-Ch3kaHyJ.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-C0QP_E4X.js";import"./info-CXFXkbkZ.js";import"./check-BDLXg-Rz.js";import"./clsx-B-dksMZM.js";import"./Button.module-DRhvPh0f.js";import"./Button-q7bM61nG.js";import"./utils-v025b4LB.js";import"./Hidden-CXThwN6X.js";import"./useFocusRing-CmbQGn1o.js";import"./index-DVJ3qppZ.js";import"./index-MqFnWvKI.js";import"./useLabels-DYiCNBUI.js";import"./useButton-CehnNdw3.js";import"./LocalizedStringFormatter-BB0Nk989.js";const ce="_infoBanner_1firo_1",ue="_success_1firo_11",me="_info_1firo_1",pe="_important_1firo_21",de="_warning_1firo_26",he="_content_1firo_35",ge="_heading_1firo_41",fe="_text_1firo_46",ye="_icon_1firo_52",we="_dismissable_1firo_57",r={infoBanner:ce,success:ue,info:me,important:pe,warning:de,content:he,heading:ge,text:fe,icon:ye,dismissable:we},be={close:"Close"},ve={close:"Stäng"},_e={en:be,sv:ve},b=({title:e,message:s,type:a,children:t,isDismissable:m=!1,defaultOpen:Z=!0,isOpen:p,onOpenChange:o,...B})=>{const O=v.useRef(!0),l=typeof p<"u",[$,C]=v.useState(l?p:Z),ee=oe[a],ne=le(_e),ae=()=>{o==null||o(!1),l||C(!1)};return v.useEffect(()=>{if(O.current){O.current=!1;return}C(te=>{const x=l&&p||!l&&!te;return x&&(o==null||o(!0)),x})},[p,l,o]),$?n.jsxs("div",{...B,className:re(r.infoBanner,r[a],B.className),children:[n.jsx(ee,{size:20,"aria-hidden":!0,className:r.icon}),n.jsxs("div",{className:r.content,children:[e&&n.jsx("strong",{className:r.heading,children:e}),n.jsxs("div",{className:r.text,children:[s,t]})]}),m&&n.jsx("div",{className:r.dismissable,children:n.jsx(J,{variant:"icon","aria-label":ne.format("close"),onPress:ae,children:n.jsx(ie,{size:20})})})]}):null};try{b.displayName="InfoBanner",b.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const{expect:u,fn:Q,userEvent:_}=__STORYBOOK_MODULE_TEST__,Pe={component:b,title:"Components/InfoBanner",tags:["autodocs"]},d={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},h={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},g={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},f={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},y={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,onOpenChange:Q()},play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange event and close",async()=>{const t=e.getByRole("button");await _.click(t),await u(a.onOpenChange).toHaveBeenCalledOnce(),await u(t).not.toBeVisible()})}},c={args:{...i.args,onOpenChange:Q()},render:e=>{const[s,a]=se.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(b,{...e,isOpen:s,onOpenChange:t=>{var m;a(t),(m=e.onOpenChange)==null||m.call(e,t)}}),!s&&n.jsx(J,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}},w={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},...c,play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const t=e.getByRole("button");await _.click(t),await u(a.onOpenChange).toHaveBeenCalledWith(!1),await _.click(e.getByRole("button")),await u(a.onOpenChange).toHaveBeenCalledWith(!0),await u(a.onOpenChange).toHaveBeenCalledTimes(2)})}};var S,D,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,T,R;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(R=(T=h.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var V,j,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(Y=(j=g.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var W,N,E;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(E=(N=f.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var q,H,F;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(F=(H=i.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var z,A,P;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(P=(A=y.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var L,M,K;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(M=c.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var U,X,G;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(G=(X=w.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const Le=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{c as Controlled,w as ControlledTests,i as Dismissable,y as DismissableTests,f as Important,g as Info,d as Success,h as Warning,Le as __namedExportsOrder,Pe as default};
