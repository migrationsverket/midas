import{j as a}from"./iframe-CRstu-TQ.js";import{T as o,a as i,s as D}from"./Tag-Bfg_jD6B.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-lsbAc8-k.js";import"./utils-DElOdLSn.js";import"./clsx-B-dksMZM.js";import"./Hidden-C95HcvpI.js";import"./useFocusRing-yvIygTrI.js";import"./index-B4Yxl4-c.js";import"./index-BQ6920Fy.js";import"./useLabels-Cc_F_1JC.js";import"./useButton-BLIkQXr_.js";import"./Collection-DBgu9Le2.js";import"./index-CAAcAgJQ.js";import"./ListBox-Dyjs9o5F.js";import"./DragAndDrop-DXd3lCcp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BvYQ2txr.js";import"./SelectionManager-ClyBVuPb.js";import"./useEvent-BCn-LzLS.js";import"./FocusScope-xUCL5C_A.js";import"./useDescription-BanKxQeH.js";import"./useControlledState-Cp2R48W9.js";import"./context-Agl8eL6E.js";import"./Text-ClOqDzIS.js";import"./inertValue-D2mh4xHk.js";import"./useListState-BDXpf1oG.js";import"./useHighlightSelectionDescription-D0gS2N9p.js";import"./useUpdateEffect-BF4UJ1w4.js";import"./useLocalizedStringFormatter-DViQ_mPA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CqRAE8OL.js";import"./useField-BsULLIG8.js";import"./clsx-Ciqy0D92.js";import"./Button-NMrjAw_R.js";import"./Button.module-CcWMkJAG.js";import"./x-yNnNH-sK.js";import"./createLucideIcon-DENAtUBT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
