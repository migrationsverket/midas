import{j as a}from"./iframe-Dmk3epTB.js";import{T as o,a as i,s as D}from"./Tag-u4IyzdTs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ccd3J3vv.js";import"./utils-SlguuR_I.js";import"./clsx-B-dksMZM.js";import"./Hidden-0u0b-4t6.js";import"./useFocusRing-CGWwc_XC.js";import"./index-0Qm6xNmj.js";import"./index-QdYcievW.js";import"./useLabels-D8_5AASA.js";import"./useButton-CixU9N8b.js";import"./Collection-BpUGs2eJ.js";import"./index-G7g4h0l_.js";import"./ListBox-BJJUfGKe.js";import"./DragAndDrop-DigThw5L.js";import"./getScrollParent-8uP_EfLK.js";import"./scrollIntoView-RkMgiIJ3.js";import"./Separator-WxEYIglT.js";import"./SelectionManager-4D9l3kDm.js";import"./useEvent-CkgWFqxC.js";import"./SelectionIndicator-DPaE3d7y.js";import"./useDescription-pLcWAWhY.js";import"./useControlledState-CMGut-Nq.js";import"./ListKeyboardDelegate-DwOBKVg5.js";import"./RSPContexts-C-SJq0sr.js";import"./Text-Bc8_beBE.js";import"./inertValue-qD6LorLO.js";import"./useListState-C_3gYxWW.js";import"./useHighlightSelectionDescription-CZ_eZ3fm.js";import"./useUpdateEffect-BvH0oAOC.js";import"./useLocalizedStringFormatter-3y4YPuix.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BtWAF0hS.js";import"./useField-DOzN6ECc.js";import"./clsx-Ciqy0D92.js";import"./Button-DWjoHsqk.js";import"./Button.module-CcWMkJAG.js";import"./x-C-P-xloB.js";import"./createLucideIcon-D5JKFdiS.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
