import{j as a}from"./iframe-6IMD-8yl.js";import{T as o,a as i,s as D}from"./Tag-CU7bDn-7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CTH9Asc4.js";import"./utils-DQsrOcYI.js";import"./clsx-B-dksMZM.js";import"./Hidden-By2Vbfu2.js";import"./useFocusRing-B7OVdsaI.js";import"./index-hMsrF0Lj.js";import"./index-BTH-ZSLH.js";import"./useLabels-BI39jjjZ.js";import"./useButton-nMJXMVWy.js";import"./Collection-CgdlJnA6.js";import"./index-Ds8xPBMu.js";import"./ListBox-C9otVk0N.js";import"./DragAndDrop-C3vfQzIT.js";import"./getScrollParent-Bruw6gt-.js";import"./scrollIntoView-DbYGPnOT.js";import"./Separator-YGDRoogj.js";import"./SelectionManager-COjWiUdJ.js";import"./useEvent-D_5JG_UC.js";import"./SelectionIndicator-ByqDQjFq.js";import"./useDescription-B_6MI8Ai.js";import"./useControlledState-vCdrCOtn.js";import"./ListKeyboardDelegate-Ccz7B8K4.js";import"./RSPContexts-CZ7mpmzQ.js";import"./Text-CPGj_Oka.js";import"./inertValue-_tMgrpAy.js";import"./useListState-DVwTHC9N.js";import"./useHighlightSelectionDescription-DZSvH3OY.js";import"./useUpdateEffect-BHf5YM7R.js";import"./useLocalizedStringFormatter-D4i0SgeH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DmZCW5Br.js";import"./useField-CANlw__B.js";import"./clsx-Ciqy0D92.js";import"./Button-Dw84-_1n.js";import"./Button.module-CcWMkJAG.js";import"./x-DugWHTtN.js";import"./createLucideIcon-C5U5LJAv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
