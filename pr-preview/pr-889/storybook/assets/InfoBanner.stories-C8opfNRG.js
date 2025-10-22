import{r as ee,j as n,e as ne}from"./iframe-D-vM0KJV.js";import{i as ae}from"./icon-map-BqrsefJT.js";import{c as te}from"./clsx-Ciqy0D92.js";import{B as K}from"./Button-CSzky6JE.js";import{X as se}from"./x-D_l5qUJY.js";import{u as oe}from"./useLocalizedStringFormatter-BFoj3CLW.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DQmU_5xe.js";import"./info-Da1JmBtJ.js";import"./check-C31htUn6.js";import"./clsx-B-dksMZM.js";import"./Button.module-CcWMkJAG.js";import"./Button-DgIjK-s6.js";import"./utils-jHN4O93F.js";import"./Hidden-DeY6xaVX.js";import"./useFocusRing-B1D0OxaB.js";import"./index-Dpp169zk.js";import"./index-DAhhoemU.js";import"./useLabels-B5h-M-s5.js";import"./useButton-CU8F_nzl.js";import"./LocalizedStringFormatter-BB0Nk989.js";const re="_infoBanner_1oj11_1",ie="_success_1oj11_11",le="_info_1oj11_1",ce="_important_1oj11_21",pe="_warning_1oj11_26",me="_content_1oj11_40",de="_heading_1oj11_46",ue="_text_1oj11_51",ge="_icon_1oj11_57",he="_dismissable_1oj11_66",o={infoBanner:re,success:ie,info:le,important:ce,warning:pe,content:me,heading:de,text:ue,icon:ge,dismissable:he},fe={close:"Close"},ye={close:"Stäng"},we={en:fe,sv:ye},h=({title:e,message:s,type:a,children:t,isDismissable:l=!1,defaultOpen:X=!0,isOpen:v,onOpenChange:y,..._})=>{const w=typeof v<"u",[G,J]=ee.useState(X),Q=ae[a],Z=oe(we),$=()=>{y==null||y(!1),w||J(!1)};return w&&v||!w&&G?n.jsxs("div",{..._,className:te(o.infoBanner,o[a],_.className),children:[n.jsx(Q,{size:20,"aria-hidden":!0,className:o.icon}),n.jsxs("div",{className:o.content,children:[e&&n.jsx("strong",{className:o.heading,children:e}),n.jsxs("div",{className:o.text,children:[s,t]})]}),l&&n.jsx("div",{className:o.dismissable,children:n.jsx(K,{variant:"icon","aria-label":Z.format("close"),onPress:$,children:n.jsx(se,{size:20})})})]}):null};try{h.displayName="InfoBanner",h.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const{expect:f,fn:U,userEvent:b}=__STORYBOOK_MODULE_TEST__,Fe={component:h,title:"Components/InfoBanner",tags:["autodocs"]},c={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},p={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},m={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},d={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,onOpenChange:U()},play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange event and close",async()=>{const t=e.getByRole("button");await b.click(t),await f(a.onOpenChange).toHaveBeenCalledOnce(),await f(t).not.toBeVisible()})}},i={args:{...r.args,onOpenChange:U()},render:e=>{const[s,a]=ne.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(h,{...e,isOpen:s,onOpenChange:t=>{var l;a(t),(l=e.onOpenChange)==null||l.call(e,t)}}),!s&&n.jsx(K,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}},g={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},...i,play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const t=e.getByRole("button");await b.click(t),await f(a.onOpenChange).toHaveBeenCalledWith(!1),await b.click(e.getByRole("button")),await f(a.onOpenChange).toHaveBeenCalledTimes(1)})}};var O,B,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var x,j,S;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var I,D,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(k=(D=m.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var T,V,Y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(Y=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var R,N,W;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(W=(N=r.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var E,q,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var F,z,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var P,L,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      await expect(args.onOpenChange).toHaveBeenCalledTimes(1);
    });
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ze=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{i as Controlled,g as ControlledTests,r as Dismissable,u as DismissableTests,d as Important,m as Info,c as Success,p as Warning,ze as __namedExportsOrder,Fe as default};
