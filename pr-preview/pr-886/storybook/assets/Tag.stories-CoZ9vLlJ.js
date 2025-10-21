import{j as a}from"./iframe-CKi6ZPsq.js";import{T as o,a as i,s as D}from"./Tag-BY1kV2Sv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bc4X42Ye.js";import"./utils-Cg1TFf_A.js";import"./clsx-B-dksMZM.js";import"./Hidden-BI7NTh1S.js";import"./useFocusRing-9BoVbkS6.js";import"./index-Dd2Mnfzt.js";import"./index-DQeu7mLu.js";import"./useLabels-C_6zeqoe.js";import"./useButton-Cxm3MS34.js";import"./Collection-dXxrsUfx.js";import"./index-Bchr3RSE.js";import"./ListBox-JTFWQH3W.js";import"./DragAndDrop-D4qDjKVR.js";import"./getScrollParent-CBAmI_sh.js";import"./scrollIntoView-BWgSHvNF.js";import"./Separator-DKUpqJz5.js";import"./SelectionManager-BRbUpU9R.js";import"./useEvent-CuctCJtW.js";import"./SelectionIndicator-PK7ryQ-B.js";import"./useDescription-C4RYLfr5.js";import"./useControlledState-CS3naG7u.js";import"./ListKeyboardDelegate-FZSU0j0N.js";import"./RSPContexts-D4zpuawj.js";import"./Text-CixCtUx1.js";import"./inertValue-Rlml3ook.js";import"./useListState-raDXHiEF.js";import"./useHighlightSelectionDescription-fDgwzj9M.js";import"./useUpdateEffect-DX5M6Iwr.js";import"./useLocalizedStringFormatter-DnLxbWhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-irGsFhwl.js";import"./useField-nrzR_jIH.js";import"./clsx-Ciqy0D92.js";import"./Button-ChkBe_U-.js";import"./Button.module-CcWMkJAG.js";import"./x-BN2iSwzP.js";import"./createLucideIcon-BhBgv_rT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
