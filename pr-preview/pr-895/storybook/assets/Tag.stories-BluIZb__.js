import{j as a}from"./iframe-BfG47WCE.js";import{T as o,a as i,s as D}from"./Tag-BHe2bN_5.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-gKMamKdV.js";import"./utils-CXccqdfU.js";import"./clsx-B-dksMZM.js";import"./Hidden-DpYl8mb0.js";import"./useFocusRing-BOjBGLDj.js";import"./index-DCuUWyQy.js";import"./index-CRDODKkO.js";import"./useLabels-CLZIjSTH.js";import"./useButton-DSbMmvSP.js";import"./Collection-BAV1JVDc.js";import"./index-CU70dMTM.js";import"./ListBox-CEGKUmAJ.js";import"./DragAndDrop-CGRDoBEv.js";import"./getScrollParent-Dqz_7mKA.js";import"./scrollIntoView-CIwto5b8.js";import"./Separator-D3N8nQn4.js";import"./SelectionManager-an24w0W8.js";import"./useEvent-UD9IeyHC.js";import"./SelectionIndicator-BmnijtLU.js";import"./useDescription-DJDeLoDj.js";import"./useControlledState-DTRY0BXW.js";import"./ListKeyboardDelegate-xshkV1nQ.js";import"./RSPContexts-BTzNv6Un.js";import"./Text-ohjBzHRx.js";import"./inertValue-CIg_x18X.js";import"./useListState-DaqaNpIp.js";import"./useHighlightSelectionDescription-B6UGANWy.js";import"./useUpdateEffect-Bw5Bf_kH.js";import"./useLocalizedStringFormatter-DKuEyZ-H.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D3-nIdW9.js";import"./useField-D3i4YQ2z.js";import"./clsx-Ciqy0D92.js";import"./Button-CDtCaXVO.js";import"./Button.module-CcWMkJAG.js";import"./x-CH9ViGh0.js";import"./createLucideIcon-Dnia0Ejn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
