import{j as a}from"./iframe-BqxicgbC.js";import{T as o,a as i,s as D}from"./Tag-C5GVFod1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B6_mUGwU.js";import"./utils-BG3gYf_k.js";import"./clsx-B-dksMZM.js";import"./Hidden-1q3LhqZq.js";import"./useFocusRing-5fyiGkfj.js";import"./index-B-xfy7jh.js";import"./index-Na99chMx.js";import"./useLabels-Bvh5UXKG.js";import"./useButton-YDDM_q76.js";import"./Collection-_LbruxWC.js";import"./index-Byuh8UrS.js";import"./ListBox-NGtyawiH.js";import"./DragAndDrop-DBHKlxPg.js";import"./getScrollParent-CkM-zJXT.js";import"./scrollIntoView-BOlHGAT4.js";import"./Separator-D_EFQtvA.js";import"./SelectionManager-CW-wIfno.js";import"./useEvent-BifU_Mrw.js";import"./SelectionIndicator-BfV1xQu7.js";import"./useDescription-DkSWUqmi.js";import"./useControlledState-BAUvQtpQ.js";import"./ListKeyboardDelegate-DX-11N-Q.js";import"./RSPContexts-CkaEfu0f.js";import"./Text-nXaZd8xd.js";import"./inertValue-D2KHu2wX.js";import"./useListState-DYxCigDW.js";import"./useHighlightSelectionDescription-kUvH8e8O.js";import"./useUpdateEffect-CcRrmQUt.js";import"./useLocalizedStringFormatter-BH54Ph-A.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-5UKdJ_H1.js";import"./useField-CZqSN1ll.js";import"./clsx-Ciqy0D92.js";import"./Button-DYB8vqiX.js";import"./Button.module-CcWMkJAG.js";import"./x-BmnCb3T1.js";import"./createLucideIcon-DPtuTl-o.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
