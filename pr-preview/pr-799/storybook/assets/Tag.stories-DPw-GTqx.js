import{j as a}from"./iframe-Yvf0cSSB.js";import{T as o,a as i,s as D}from"./Tag-DnmPukPb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Zpc5CpyC.js";import"./utils-DMvWELwu.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTeDSlSg.js";import"./useFocusRing-CSZDf5Vr.js";import"./index-CC1yabtT.js";import"./index-DltXTwhD.js";import"./useLabels-d14Xm1VC.js";import"./useButton-B5Oo5gkj.js";import"./Collection-CpaUCmPx.js";import"./index-DYhK9MOO.js";import"./ListBox-DA0DyUAu.js";import"./DragAndDrop-CU5qta3N.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bh0om5Fg.js";import"./SelectionManager-CF0YvsqB.js";import"./useEvent-DLimLjre.js";import"./FocusScope-DcwO8rah.js";import"./useDescription-CLy-rwID.js";import"./useControlledState-LYuGPegn.js";import"./ListKeyboardDelegate-CFa2tKLO.js";import"./Text-DFXop-6v.js";import"./inertValue-CuV30K8b.js";import"./useListState-CVDnQdcy.js";import"./useHighlightSelectionDescription-CJbnAofX.js";import"./useUpdateEffect-V2H5XcPc.js";import"./useLocalizedStringFormatter-Cn_yRCvO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-GZ1mfTdJ.js";import"./useField-ZE_T0u1d.js";import"./Button-BzZeqB_d.js";import"./Button.module-DRhvPh0f.js";import"./x-Ch-i6AGU.js";import"./createLucideIcon-Be7gq-Id.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
