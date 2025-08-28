import{r as v,j as n,e as se}from"./iframe-CMJJFu9j.js";import{i as oe}from"./icon-map-BOpYMpJq.js";import{c as re}from"./clsx-B-dksMZM.js";import{B as J}from"./Button-uBzb6nr4.js";import{X as ie}from"./x-BC4hRGwZ.js";import{u as le}from"./useLocalizedStringFormatter-bIjgaKBM.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-BNAnTsQ1.js";import"./info-DVjcZCIP.js";import"./check-DgJX186j.js";import"./Button.module-DKVuWS4g.js";import"./Button-Ze04MXeZ.js";import"./utils-k_xI_0Cb.js";import"./Hidden-DaCgDddU.js";import"./useFocusRing-CtdsP9bS.js";import"./index-CwgxdM1g.js";import"./index-DjCmhbBj.js";import"./useLabels-D-FjqiKN.js";import"./useButton-CML0kvkr.js";import"./LocalizedStringFormatter-BB0Nk989.js";const ce='"../theme/tokens.css"',de="_infoBanner_cszz3_4",ue="_success_cszz3_14",pe="_info_cszz3_4",me="_important_cszz3_24",ge="_warning_cszz3_29",fe="_content_cszz3_38",he="_heading_cszz3_44",ye="_text_cszz3_49",be="_icon_cszz3_55",we="_dismissable_cszz3_60",r={tokens:ce,"--font-family":'"Inter", sans-serif',"--text-primary":"light-dark(#171717, #f2f2f2)","--line-height-40":"1.375rem","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))",infoBanner:de,success:ue,info:pe,important:me,warning:ge,content:fe,heading:he,text:ye,icon:be,dismissable:we},ve={close:"Close"},_e={close:"Stäng"},Be={en:ve,sv:_e},w=({title:e,message:s,type:t,children:a,isDismissable:u=!1,defaultOpen:Z=!0,isOpen:p,onOpenChange:o,...B})=>{const O=v.useRef(!0),l=typeof p<"u",[$,k]=v.useState(l?p:Z),ee=oe[t],ne=le(Be),te=()=>{o==null||o(!1),l||k(!1)};return v.useEffect(()=>{if(O.current){O.current=!1;return}k(ae=>{const C=l&&p||!l&&!ae;return C&&(o==null||o(!0)),C})},[p,l,o]),$?n.jsxs("div",{...B,className:re(r.infoBanner,r[t],B.className),children:[n.jsx(ee,{size:20,"aria-hidden":!0,className:r.icon}),n.jsxs("div",{className:r.content,children:[e&&n.jsx("strong",{className:r.heading,children:e}),n.jsxs("div",{className:r.text,children:[s,a]})]}),u&&n.jsx("div",{className:r.dismissable,children:n.jsx(J,{variant:"icon","aria-label":ne.format("close"),onPress:te,children:n.jsx(ie,{size:20})})})]}):null};try{w.displayName="InfoBanner",w.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const{expect:d,fn:Q,userEvent:_}=__STORYBOOK_MODULE_TEST__,Pe={component:w,title:"Components/InfoBanner",tags:["autodocs"]},m={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},g={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},f={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},h={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},i={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},y={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{...i.args,onOpenChange:Q()},play:async({canvas:e,step:s,args:t})=>{await s("it should fire the onOpenChange event and close",async()=>{const a=e.getByRole("button");await _.click(a),await d(t.onOpenChange).toHaveBeenCalledOnce(),await d(a).not.toBeVisible()})}},c={args:{...i.args,onOpenChange:Q()},render:e=>{const[s,t]=se.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(w,{...e,isOpen:s,onOpenChange:a=>{var u;t(a),(u=e.onOpenChange)==null||u.call(e,a)}}),!s&&n.jsx(J,{autoFocus:!0,onPress:()=>t(!0),children:"Open"})]})}},b={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},...c,play:async({canvas:e,step:s,args:t})=>{await s("it should fire the onOpenChange on both open and close",async()=>{const a=e.getByRole("button");await _.click(a),await d(t.onOpenChange).toHaveBeenCalledWith(!1),await _.click(e.getByRole("button")),await d(t.onOpenChange).toHaveBeenCalledWith(!0),await d(t.onOpenChange).toHaveBeenCalledTimes(2)})}};var x,z,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,D,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...(T=(D=g.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var R,V,j;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var Y,W,N;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...(N=(W=h.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var E,q,H;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...(H=(q=i.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var F,A,P;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(M=c.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var U,X,G;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(X=b.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const Le=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{c as Controlled,b as ControlledTests,i as Dismissable,y as DismissableTests,h as Important,f as Info,m as Success,g as Warning,Le as __namedExportsOrder,Pe as default};
