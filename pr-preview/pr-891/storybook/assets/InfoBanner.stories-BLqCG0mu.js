import{r as k,j as e,e as T}from"./iframe-DVfi3_SF.js";import{i as V}from"./icon-map-C-REMI2L.js";import{c as Y}from"./clsx-Ciqy0D92.js";import{B as v}from"./Button-C_F6Y6Yg.js";import{X as R}from"./x-XFe__SQz.js";import{u as N}from"./useLocalizedStringFormatter-jRH0N_hG.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-BXAfGPAx.js";import"./info-BVpIF_Lk.js";import"./check-Bcr145Ub.js";import"./clsx-B-dksMZM.js";import"./Button.module-CtQ1deO8.js";import"./Button-D5dtCU50.js";import"./utils-DSuW7o8J.js";import"./Hidden-CsByKLFz.js";import"./useFocusRing-B4faYJtf.js";import"./index-8vKeZmgO.js";import"./index-C7DQzPvW.js";import"./useLabels-DWWz7lO4.js";import"./useButton-DLqLP6Xz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";const W="_infoBanner_1oj11_1",E="_success_1oj11_11",q="_info_1oj11_1",H="_important_1oj11_21",F="_warning_1oj11_26",z="_content_1oj11_40",A="_heading_1oj11_46",P="_text_1oj11_51",L="_icon_1oj11_57",M="_dismissable_1oj11_66",o={infoBanner:W,success:E,info:q,important:H,warning:F,content:z,heading:A,text:P,icon:L,dismissable:M},K={close:"Close"},U={close:"Stäng"},X={en:K,sv:U},g=({title:n,message:t,type:a,children:s,isDismissable:_=!1,defaultOpen:C=!0,isOpen:w,onOpenChange:B,...b})=>{const f=typeof w<"u",[x,j]=k.useState(C),S=V[a],I=N(X),D=()=>{B?.(!1),f||j(!1)};return f&&w||!f&&x?e.jsxs("div",{...b,className:Y(o.infoBanner,o[a],b.className),children:[e.jsx(S,{size:20,"aria-hidden":!0,className:o.icon}),e.jsxs("div",{className:o.content,children:[n&&e.jsx("strong",{className:o.heading,children:n}),e.jsxs("div",{className:o.text,children:[t,s]})]}),_&&e.jsx("div",{className:o.dismissable,children:e.jsx(v,{variant:"icon","aria-label":I.format("close"),onPress:D,children:e.jsx(R,{size:20})})})]}):null};try{g.displayName="InfoBanner",g.__docgenInfo={description:"Displays a static message as an inline banner",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"important"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title of the banner.",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"The message to be displayed in the banner. Can be a string or a React node.",name:"message",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Additional elements to be displayed inside the banner.",name:"children",required:!1,type:{name:"ReactNode"}},isDismissable:{defaultValue:{value:"false"},description:"If true, a dismiss button will be displayed in the top right corner.",name:"isDismissable",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"The initial visibility of the banner when it is uncontrolled.",name:"defaultOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls the visibility of the banner when it is controlled.",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired when the visibility of the banner changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}const{expect:h,fn:O,userEvent:y}=__STORYBOOK_MODULE_TEST__,fe={component:g,title:"Components/InfoBanner",tags:["autodocs"]},l={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success"}},c={args:{title:"Varning",message:`Warning message
    with
    line
    breaks
    `,type:"warning"}},p={args:{title:"Information",message:"Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ",type:"info"}},m={args:{title:"Viktig",message:"Allt är viktigt",type:"important"}},r={args:{title:"Thank you!",message:`You are now done sharing all passports - alternatively you have 
        submitted a reply that you were not able or willing to share.
          
        You can close the e-service. We will contact you if we need more
        information. You will hear from us when we have made a decision.`,type:"success",isDismissable:!0}},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...r.args,onOpenChange:O()},play:async({canvas:n,step:t,args:a})=>{await t("it should fire the onOpenChange event and close",async()=>{const s=n.getByRole("button");await y.click(s),await h(a.onOpenChange).toHaveBeenCalledOnce(),await h(s).not.toBeVisible()})}},i={args:{...r.args,onOpenChange:O()},render:n=>{const[t,a]=T.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(g,{...n,isOpen:t,onOpenChange:s=>{a(s),n.onOpenChange?.(s)}}),!t&&e.jsx(v,{autoFocus:!0,onPress:()=>a(!0),children:"Open"})]})}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},...i,play:async({canvas:n,step:t,args:a})=>{await t("it should fire the onOpenChange on both open and close",async()=>{const s=n.getByRole("button");await y.click(s),await h(a.onOpenChange).toHaveBeenCalledWith(!1),await y.click(n.getByRole("button")),await h(a.onOpenChange).toHaveBeenCalledTimes(1)})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Varning',
    message: \`Warning message
    with
    line
    breaks
    \`,
    type: 'warning'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important'
  }
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Thank you!',
    message: 'You are now done sharing all passports - alternatively you have \\n' + '        submitted a reply that you were not able or willing to share.\\n' + '          \\n' + '        You can close the e-service. We will contact you if we need more\\n' + '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ye=["Success","Warning","Info","Important","Dismissable","DismissableTests","Controlled","ControlledTests"];export{i as Controlled,u as ControlledTests,r as Dismissable,d as DismissableTests,m as Important,p as Info,l as Success,c as Warning,ye as __namedExportsOrder,fe as default};
