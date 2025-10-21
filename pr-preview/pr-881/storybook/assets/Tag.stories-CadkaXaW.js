import{j as a}from"./iframe-CJn3k40z.js";import{T as o,a as i,s as D}from"./Tag-CXUTxNcC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bz22IyyV.js";import"./utils-DgwZMDls.js";import"./clsx-B-dksMZM.js";import"./Hidden-BJcbXJTq.js";import"./useFocusRing-HMkuTGWf.js";import"./index-st9s8aLP.js";import"./index-BW7feZ3k.js";import"./useLabels-Bxf8ogiL.js";import"./useButton-DxBXV-Al.js";import"./Collection-BKqHrZ6_.js";import"./index-T9oGJ783.js";import"./ListBox-BnHc8m5n.js";import"./DragAndDrop-EPUi271h.js";import"./getScrollParent-C9bYOMha.js";import"./scrollIntoView-BQ0x5oP5.js";import"./Separator-Br7MW0tn.js";import"./SelectionManager-6dt95hsb.js";import"./useEvent-DVO3kLSm.js";import"./SelectionIndicator-bybhKGxv.js";import"./useDescription-BOkmifqX.js";import"./useControlledState-9o_06wLW.js";import"./ListKeyboardDelegate-BINvd6LM.js";import"./RSPContexts-B_C7JZVu.js";import"./Text-DXo-yzXU.js";import"./inertValue-CSvtl-XN.js";import"./useListState-Cl6OJ3Zw.js";import"./useHighlightSelectionDescription-DV1PdPY0.js";import"./useUpdateEffect-C5LjrbYM.js";import"./useLocalizedStringFormatter-Dd7GxR3b.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BsLFsLdd.js";import"./useField-D8V73H7L.js";import"./clsx-Ciqy0D92.js";import"./Button-lCsZBW2V.js";import"./Button.module-CcWMkJAG.js";import"./x-CKxjS0ZK.js";import"./createLucideIcon-_6xnntzg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
