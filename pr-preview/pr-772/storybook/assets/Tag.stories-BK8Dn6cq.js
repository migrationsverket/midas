import{j as a}from"./iframe-BXSXFnI0.js";import{T as o,a as i,s as _}from"./Tag-CG-vOyDm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C9o6_9sT.js";import"./utils-BFi5W1w4.js";import"./clsx-B-dksMZM.js";import"./Hidden-DpHRpK5a.js";import"./useFocusRing-DUYm-sNb.js";import"./index-CM7xiaE7.js";import"./index-DYB1p1DC.js";import"./useLabels-DHs8ZQEk.js";import"./useButton-AEA0bYXx.js";import"./Collection-B4Hxs3Dd.js";import"./index-BSXkCQ4Y.js";import"./ListBox-HIcTpUtk.js";import"./DragAndDrop-DGKLxfQo.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D4Ju37wL.js";import"./SelectionManager-BQnS27ZX.js";import"./useEvent-BB3IFhZZ.js";import"./FocusScope-DmrOmSDH.js";import"./useDescription-BUclrS46.js";import"./useControlledState-BifY1oMp.js";import"./ListKeyboardDelegate-D7xVKIf9.js";import"./Text-CE3-C4Zs.js";import"./inertValue-KBQCeTZv.js";import"./useListState-CvdnBavG.js";import"./useField-Dy11Qohd.js";import"./useHighlightSelectionDescription-Bdwj3a6G.js";import"./useUpdateEffect-B-VxYBM3.js";import"./useLocalizedStringFormatter-Cx4v8plI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-COPEiMCa.js";import"./Button-BigH2JBp.js";import"./Button.module-CF2bVDCq.js";import"./x-DdD8mZcb.js";import"./createLucideIcon-Cxn_Jk_B.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
