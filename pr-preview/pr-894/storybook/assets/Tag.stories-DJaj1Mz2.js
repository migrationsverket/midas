import{j as a}from"./iframe-DDbpa8Wo.js";import{T as o,a as i,s as D}from"./Tag-DbB4mAmD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-i1nqo65F.js";import"./utils-jlLiSOU5.js";import"./clsx-B-dksMZM.js";import"./Hidden-DxwpsZCD.js";import"./useFocusRing-B2lzx1MC.js";import"./index-Dja4pRt0.js";import"./index-uO7TUWN4.js";import"./useLabels-CPw4TDXs.js";import"./useButton-BEbfWm77.js";import"./Collection-DVvyo599.js";import"./index-Ic-MDbNF.js";import"./ListBox-Dawicsdt.js";import"./DragAndDrop-C9VFY2j_.js";import"./getScrollParent-CCIrNu25.js";import"./scrollIntoView-C8tZc1yI.js";import"./Separator-G03E4pgI.js";import"./SelectionManager-CsoY54RO.js";import"./useEvent-LrcyaZXF.js";import"./SelectionIndicator-JhfTPfWb.js";import"./useDescription-SMJZKPJ7.js";import"./useControlledState-Bh8mog-M.js";import"./ListKeyboardDelegate-CiMWzmFM.js";import"./RSPContexts-B93NyvWN.js";import"./Text-B3yfedCA.js";import"./inertValue-CXpRq184.js";import"./useListState-CbdsMv48.js";import"./useHighlightSelectionDescription-CkpDQmnj.js";import"./useUpdateEffect-Bv8VsCcb.js";import"./useLocalizedStringFormatter-CJ-tUvmV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CeG3NBdj.js";import"./useField-BoafLZN3.js";import"./clsx-Ciqy0D92.js";import"./Button-BPWGs-1W.js";import"./Button.module-CcWMkJAG.js";import"./x-qYL0qdqx.js";import"./createLucideIcon-B1IU6l-Z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
