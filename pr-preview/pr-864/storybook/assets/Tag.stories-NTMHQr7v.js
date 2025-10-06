import{j as a}from"./iframe-2jCr-GtP.js";import{T as o,a as i,s as D}from"./Tag-7Gzz5QaR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-dDDKBd3w.js";import"./utils-BXeAKBiV.js";import"./clsx-B-dksMZM.js";import"./Hidden-BZ7LIDMo.js";import"./useFocusRing-UQolHKwo.js";import"./index-CtvLFszV.js";import"./index-Cxm_8wvF.js";import"./useLabels-Cid6-WUo.js";import"./useButton-Dz7OS1I-.js";import"./Collection-CX4HQsM1.js";import"./index-amrhFGBg.js";import"./ListBox-Bf-SbE0K.js";import"./DragAndDrop-D4q2MJH0.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BqPBBQ36.js";import"./SelectionManager-BcJtOaWj.js";import"./useEvent-DpaWMfbD.js";import"./FocusScope-B6bN9-72.js";import"./useDescription-4hz1o47b.js";import"./useControlledState-DZS7WdDT.js";import"./context-DFQPUWkr.js";import"./Text-BvBhlIuM.js";import"./inertValue-C6B5allU.js";import"./useListState-Cdb4OPSo.js";import"./useHighlightSelectionDescription-BqM8uz7I.js";import"./useUpdateEffect-BoNr39Lw.js";import"./useLocalizedStringFormatter-B-g6LA8F.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-293lLnyL.js";import"./useField-CC-67qag.js";import"./clsx-Ciqy0D92.js";import"./Button-DPL-9kiw.js";import"./Button.module-DRhvPh0f.js";import"./x-CvUdDV0M.js";import"./createLucideIcon-DdpFb7KD.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
