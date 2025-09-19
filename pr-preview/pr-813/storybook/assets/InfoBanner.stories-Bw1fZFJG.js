import{r as b,j as n,e as se}from"./iframe-DV1lFbk-.js";import{i as oe}from"./icon-map-CwXc9eKz.js";import{c as re}from"./clsx-B-dksMZM.js";import{B as J}from"./Button-CqFJNNhh.js";import{X as ie}from"./x-DKLM5s8R.js";import{u as le}from"./useLocalizedStringFormatter-BOM8S7V7.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-lt6rNZNA.js";import"./info-Ck-IVZF-.js";import"./check-BKPgZNLe.js";import"./Button.module-DRhvPh0f.js";import"./Button-9wFXHLyv.js";import"./utils-DPmek7je.js";import"./Hidden-xHzPWZXF.js";import"./useFocusRing-CsLNhNib.js";import"./index-Di62rkRw.js";import"./index-DlFKdktB.js";import"./useLabels-DzLQ80zN.js";import"./useButton-DBnso061.js";import"./LocalizedStringFormatter-BB0Nk989.js";const ce="_infoBanner_vgnjx_1",ue="_success_vgnjx_11",me="_info_vgnjx_1",de="_important_vgnjx_21",pe="_warning_vgnjx_26",ge="_content_vgnjx_35",he="_heading_vgnjx_41",fe="_text_vgnjx_46",ye="_icon_vgnjx_52",ve="_dismissable_vgnjx_57",r={infoBanner:ce,success:ue,info:me,important:de,warning:pe,content:ge,heading:he,text:fe,icon:ye,dismissable:ve},we={close:"Close"},be={close:"Stäng"},_e={en:we,sv:be},w=({title:e,message:s,type:a,children:t,isDismissable:m=!1,defaultOpen:Z=!0,isOpen:d,onOpenChange:o,...B})=>{const O=b.useRef(!0),l=typeof d<"u",[$,x]=b.useState(l?d:Z),ee=oe[a],ne=le(_e),ae=()=>{o==null||o(!1),l||x(!1)};return b.useEffect(()=>{if(O.current){O.current=!1;return}x(te=>{const C=l&&d||!l&&!te;return C&&(o==null||o(!0)),C})},[d,l,o]),$?n.jsxs("div",{...B,className:re(r.infoBanner,r[a],B.className),children:[n.jsx(ee,{size:20,"aria-hidden":!0,className:r.icon}),n.jsxs("div",{className:r.content,children:[e&&n.jsx("strong",{className:r.heading,children:e}),n.jsxs("div",{className:r.text,children:[s,t]})]}),m&&n.jsx("div",{className:r.dismissable,children:n.jsx(J,{variant:"icon","aria-label":ne.format("close"),onPress:ae,children:n.jsx(ie,{size:20})})})]}):null};try{w.displayName="InfoBanner",w.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const{expect:u,fn:Q,userEvent:_}=__STORYBOOK_MODULE_TEST__,Ae={component:w,title:"Components/InfoBanner",tags:["autodocs"]},p={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},g={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},h={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},f={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,onOpenChange:Q()},play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange event and close",async()=>{const t=e.getByRole("button");await _.click(t),await u(a.onOpenChange).toHaveBeenCalledOnce(),await u(t).not.toBeVisible()})}},c={args:{...i.args,onOpenChange:Q()},render:e=>{const[s,a]=se.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(w,{...e,isOpen:s,onOpenChange:t=>{var m;a(t),(m=e.onOpenChange)==null||m.call(e,t)}}),!s&&n.jsx(J,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}},v={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...c,play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const t=e.getByRole("button");await _.click(t),await u(a.onOpenChange).toHaveBeenCalledWith(!1),await _.click(e.getByRole("button")),await u(a.onOpenChange).toHaveBeenCalledWith(!0),await u(a.onOpenChange).toHaveBeenCalledTimes(2)})}};var j,S,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,k,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(T=(k=g.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var R,V,Y;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(Y=(V=h.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var W,N,E;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(M=c.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var U,X,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(X=v.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const Pe=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{c as Controlled,v as ControlledTests,i as Dismissable,y as DismissableTests,f as Important,h as Info,p as Success,g as Warning,Pe as __namedExportsOrder,Ae as default};
