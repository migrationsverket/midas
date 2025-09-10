import{j as a}from"./iframe-DM4JBH32.js";import{T as o,a as i,s as D}from"./Tag-B8UR7roS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DEAK9AGc.js";import"./utils-DhQKzBvZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7TbZwhG.js";import"./useFocusRing-ChYBeMyq.js";import"./index-CO6bLn_V.js";import"./index-C6Qb6Fiv.js";import"./useLabels-D_NncDT6.js";import"./useButton-Du356jJp.js";import"./Collection-DF9AwbxA.js";import"./index-CnhyggEQ.js";import"./ListBox-DAgt6xMm.js";import"./DragAndDrop-gVsGDdFe.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CzmFjGVc.js";import"./SelectionManager-Cxzx9Itv.js";import"./useEvent-IM67gZrb.js";import"./FocusScope-DQOBbr_K.js";import"./useDescription-Bvps5D0G.js";import"./useControlledState-iHZ5v-uD.js";import"./ListKeyboardDelegate-XCicrj5b.js";import"./Text-B-tnsee9.js";import"./inertValue-CUhPYEaG.js";import"./useListState-BM2DWLaf.js";import"./useHighlightSelectionDescription-B4DZ2jaB.js";import"./useUpdateEffect-C-9Nul7R.js";import"./useLocalizedStringFormatter-CK1QE2Da.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BJQ3ZSN9.js";import"./useField-06PT16Sz.js";import"./Button-CdsAGIRW.js";import"./Button.module-BkTnSRp5.js";import"./x-BnFlJ5TD.js";import"./createLucideIcon-CWoRUv1u.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
