import{j as a}from"./iframe-D4K27_5V.js";import{T as o,a as i,s as D}from"./Tag-Bp3mcneF.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVRCvG9S.js";import"./utils-fVNvPO-w.js";import"./clsx-B-dksMZM.js";import"./Hidden-B2IDRFyp.js";import"./useFocusRing-BPtv8tcC.js";import"./index-CIcg5liC.js";import"./index-Cxuq5XzM.js";import"./useLabels-CSxMFmxj.js";import"./useButton-DkqzWIBM.js";import"./Collection-C_Epj3mC.js";import"./index-yHQXcvaH.js";import"./ListBox-DxBbZgE3.js";import"./DragAndDrop-Arcjibxf.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bj8GAWeC.js";import"./SelectionManager-CIQFQq5i.js";import"./useEvent-Bc6P_6ix.js";import"./FocusScope-Dunk2sKd.js";import"./useDescription-aANGJY3q.js";import"./useControlledState-DMUKsyYD.js";import"./ListKeyboardDelegate-B1KJgYtu.js";import"./Text-CCrL_kaC.js";import"./inertValue-COdD19R6.js";import"./useListState-VA0ClCoh.js";import"./useHighlightSelectionDescription-DBQvnBa3.js";import"./useUpdateEffect-YOIlPIr1.js";import"./useLocalizedStringFormatter-BJhhj496.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-_o9R49ww.js";import"./useField-tGwc_1bk.js";import"./Button-_LTHwKbK.js";import"./Button.module-DRhvPh0f.js";import"./x-CmyPw_mS.js";import"./createLucideIcon-DvuL7sGH.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
