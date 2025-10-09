import{r as ee,j as n,e as ne}from"./iframe-DjTuJM4v.js";import{i as ae}from"./icon-map-vIH9Cesw.js";import{c as te}from"./clsx-Ciqy0D92.js";import{B as K}from"./Button-Cv3oSdgR.js";import{X as se}from"./x-C5f1xR0H.js";import{u as oe}from"./useLocalizedStringFormatter-DviU4moV.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-CCATEyQK.js";import"./info-DcTRh0n2.js";import"./check-Bq1sUPbj.js";import"./clsx-B-dksMZM.js";import"./Button.module-CcWMkJAG.js";import"./Button-BkPWw7UV.js";import"./utils-JYYshUEd.js";import"./Hidden-D8JQcptZ.js";import"./useFocusRing-BUMJVKMC.js";import"./index-Ce1mbi7V.js";import"./index-DprkUWzI.js";import"./useLabels-BJawJ0kt.js";import"./useButton-BklQFMHi.js";import"./LocalizedStringFormatter-BB0Nk989.js";const re="_infoBanner_1firo_1",ie="_success_1firo_11",le="_info_1firo_1",ce="_important_1firo_21",me="_warning_1firo_26",pe="_content_1firo_35",de="_heading_1firo_41",ue="_text_1firo_46",ge="_icon_1firo_52",he="_dismissable_1firo_57",o={infoBanner:re,success:ie,info:le,important:ce,warning:me,content:pe,heading:de,text:ue,icon:ge,dismissable:he},fe={close:"Close"},ye={close:"Stäng"},we={en:fe,sv:ye},h=({title:e,message:s,type:a,children:t,isDismissable:l=!1,defaultOpen:X=!0,isOpen:v,onOpenChange:y,..._})=>{const w=typeof v<"u",[G,J]=ee.useState(X),Q=ae[a],Z=oe(we),$=()=>{y==null||y(!1),w||J(!1)};return w&&v||!w&&G?n.jsxs("div",{..._,className:te(o.infoBanner,o[a],_.className),children:[n.jsx(Q,{size:20,"aria-hidden":!0,className:o.icon}),n.jsxs("div",{className:o.content,children:[e&&n.jsx("strong",{className:o.heading,children:e}),n.jsxs("div",{className:o.text,children:[s,t]})]}),l&&n.jsx("div",{className:o.dismissable,children:n.jsx(K,{variant:"icon","aria-label":Z.format("close"),onPress:$,children:n.jsx(se,{size:20})})})]}):null};try{h.displayName="InfoBanner",h.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const{expect:f,fn:U,userEvent:b}=__STORYBOOK_MODULE_TEST__,Fe={component:h,title:"Components/InfoBanner",tags:["autodocs"]},c={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},m={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},p={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},d={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},u={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,onOpenChange:U()},play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange event and close",async()=>{const t=e.getByRole("button");await b.click(t),await f(a.onOpenChange).toHaveBeenCalledOnce(),await f(t).not.toBeVisible()})}},i={args:{...r.args,onOpenChange:U()},render:e=>{const[s,a]=ne.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(h,{...e,isOpen:s,onOpenChange:t=>{var l;a(t),(l=e.onOpenChange)==null||l.call(e,t)}}),!s&&n.jsx(K,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}},g={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...i,play:async({canvas:e,step:s,args:a})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const t=e.getByRole("button");await b.click(t),await f(a.onOpenChange).toHaveBeenCalledWith(!1),await b.click(e.getByRole("button")),await f(a.onOpenChange).toHaveBeenCalledTimes(1)})}};var O,B,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var x,S,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(I=(S=m.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,k,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var V,j,Y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(Y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var R,N,W;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(W=(N=r.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var E,q,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      await expect(args.onOpenChange).toHaveBeenCalledTimes(1);
    });
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ze=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{i as Controlled,g as ControlledTests,r as Dismissable,u as DismissableTests,d as Important,p as Info,c as Success,m as Warning,ze as __namedExportsOrder,Fe as default};
