import{j as a}from"./iframe-y9uuekUc.js";import{T as o,a as i,s as D}from"./Tag-CqkY6jnt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CW4NbYhP.js";import"./utils-BOOf_RxS.js";import"./clsx-B-dksMZM.js";import"./Hidden-tfsUb2xF.js";import"./useFocusRing-DgqJKS3P.js";import"./index-CSM-wFU-.js";import"./index-DQDLrlYC.js";import"./useLabels-DD7e7PFw.js";import"./useButton-8_4OWKui.js";import"./Collection-BpxZfSNa.js";import"./index-CfH6taAq.js";import"./ListBox-DkJQXFdU.js";import"./DragAndDrop-DzbFacsR.js";import"./getScrollParent-CUy2RDi4.js";import"./scrollIntoView-Pihf25Bv.js";import"./Separator-CzcGgmwL.js";import"./SelectionManager-CkMRR79S.js";import"./useEvent-DvoteD7k.js";import"./SelectionIndicator-BfIp3Zhm.js";import"./useDescription-B4URw9SA.js";import"./useControlledState-CxXMcrLs.js";import"./ListKeyboardDelegate-BvWPNBYD.js";import"./RSPContexts-B-b70SPC.js";import"./Text-BsztM0-2.js";import"./inertValue-pS5CKxlw.js";import"./useListState-Ba03wFF8.js";import"./useHighlightSelectionDescription-vhglpjNa.js";import"./useUpdateEffect-Dwx5aHhF.js";import"./useLocalizedStringFormatter-BO32D2UM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dc_2EePG.js";import"./useField-CCbWPvhp.js";import"./clsx-Ciqy0D92.js";import"./Button-D0nH05B-.js";import"./Button.module-CcWMkJAG.js";import"./x-VsXfoZeH.js";import"./createLucideIcon-1u2ysGfk.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
