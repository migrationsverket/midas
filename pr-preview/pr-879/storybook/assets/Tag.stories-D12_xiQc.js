import{j as a}from"./iframe-B_ygYNkI.js";import{T as o,a as i,s as D}from"./Tag-ByEmQqYN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DMhyuXvl.js";import"./utils-CXsj727F.js";import"./clsx-B-dksMZM.js";import"./Hidden-glhldbCg.js";import"./useFocusRing-DQn-e4pR.js";import"./index-D8MlaW6J.js";import"./index-CPUP237Z.js";import"./useLabels-4ym5HR4k.js";import"./useButton-oVtVVevU.js";import"./Collection-BKKTYarE.js";import"./index-xqO8xPMl.js";import"./ListBox-DgyjhOBj.js";import"./DragAndDrop-Bs497dMc.js";import"./getScrollParent-DUubX-Bx.js";import"./scrollIntoView-DHLPPniT.js";import"./Separator-qbyZkIpX.js";import"./SelectionManager-hN3Mg3In.js";import"./useEvent-j_Fr0Fkm.js";import"./SelectionIndicator-h-yKrdJ_.js";import"./useDescription-J4yXttox.js";import"./useControlledState-C9qVCaaE.js";import"./ListKeyboardDelegate-DllJju6w.js";import"./RSPContexts-D0ALC_tS.js";import"./Text-HoaiwDmI.js";import"./inertValue-Bnxbtd7A.js";import"./useListState-CVnasb7m.js";import"./useHighlightSelectionDescription-B8a8RhkT.js";import"./useUpdateEffect-NmOk22I9.js";import"./useLocalizedStringFormatter-D3srnXI9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Czmo9uAh.js";import"./useField-DmAsGA14.js";import"./clsx-Ciqy0D92.js";import"./Button-B-vuvhpN.js";import"./Button.module-CcWMkJAG.js";import"./x-DJ-2z-Iw.js";import"./createLucideIcon-BP2N8NK_.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
