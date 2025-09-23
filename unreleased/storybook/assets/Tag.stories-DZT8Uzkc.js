import{j as a}from"./iframe-CKDWBnzr.js";import{T as o,a as i,s as D}from"./Tag-JYU5d0iH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D6qOc4-k.js";import"./utils-CIYVDnlt.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bxnsj7EJ.js";import"./useFocusRing-1J8kx0bn.js";import"./index-DuMHkP-v.js";import"./index-DDGIE9ro.js";import"./useLabels-BMF9dwqR.js";import"./useButton-CdXes42U.js";import"./Collection-B8bXDrdj.js";import"./index-1TM-4pxc.js";import"./ListBox-BuAuWJaI.js";import"./DragAndDrop-CiwS9mk0.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C8f1q2ZF.js";import"./SelectionManager-DB-HO5Vc.js";import"./useEvent-N2jiyD7G.js";import"./FocusScope-B3GUh1rq.js";import"./useDescription-CesxVp8r.js";import"./useControlledState-BxRrFSbM.js";import"./ListKeyboardDelegate-BR9XGYCM.js";import"./Text-Dn8Oiz4c.js";import"./inertValue-DPNB2dbB.js";import"./useListState-BGAZJr2q.js";import"./useHighlightSelectionDescription-pl7gHot1.js";import"./useUpdateEffect-CP-8SCRF.js";import"./useLocalizedStringFormatter-BJGzceHJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D7CNMzog.js";import"./useField-DQExrRag.js";import"./Button-CGQw6DzM.js";import"./Button.module-DRhvPh0f.js";import"./x-DTpP1q6c.js";import"./createLucideIcon-CN2f7vt_.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
