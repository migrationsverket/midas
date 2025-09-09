import{j as a}from"./iframe-DNAyzcVz.js";import{T as o,a as i,s as D}from"./Tag-CcGM8KI7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B3iMlVBT.js";import"./utils-CNQS-LpM.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6uiJ18c.js";import"./useFocusRing-DM6kavp9.js";import"./index-CHAGpYiP.js";import"./index-sCxWtgC3.js";import"./useLabels-vHETDrlq.js";import"./useButton-C3aHppAl.js";import"./Collection-DNBxWvd9.js";import"./index-DDw_trIg.js";import"./ListBox-CoCXmzYb.js";import"./DragAndDrop-DchV-cSa.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CEHhaLna.js";import"./SelectionManager-DpKY-03r.js";import"./useEvent-0qriikFe.js";import"./FocusScope-KzgDKKhi.js";import"./useDescription-D_LiQCEA.js";import"./useControlledState-Lxd1KpOq.js";import"./ListKeyboardDelegate-CIr6DTWw.js";import"./Text-mtz4kNOG.js";import"./inertValue-Btme8ZZP.js";import"./useListState-B2YajGoU.js";import"./useHighlightSelectionDescription-D_qarWQ9.js";import"./useUpdateEffect-Cl4oBGlx.js";import"./useLocalizedStringFormatter-DUvd8EfB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BasuSkS7.js";import"./useField-Bcv7mbye.js";import"./Button-SOtf5iPG.js";import"./Button.module-BkTnSRp5.js";import"./x-CktLMlWO.js";import"./createLucideIcon-CfKTp8Xu.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
