import{j as a}from"./iframe-BAHKs3rc.js";import{T as o,a as i,s as D}from"./Tag-sGAZHX2i.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-xpNBxSR8.js";import"./utils-BCVdxp57.js";import"./clsx-B-dksMZM.js";import"./Hidden-Jl7SwQHM.js";import"./useFocusRing-vlTd0gtz.js";import"./index-DKY9vjWv.js";import"./index-B0t6iz74.js";import"./useLabels-CluKMOyR.js";import"./useButton-D94dNfeS.js";import"./Collection-CjSbY26k.js";import"./index-DT7aMgZP.js";import"./ListBox-Dx49hdgr.js";import"./DragAndDrop-DIx1Zfl9.js";import"./getScrollParent-DtzqA49l.js";import"./scrollIntoView-nQ8HUUNN.js";import"./Separator-CyUBCi8u.js";import"./SelectionManager-BaltY2eA.js";import"./useEvent-9JLckBLi.js";import"./SelectionIndicator-ReJCFfOh.js";import"./useDescription-BMX2psgp.js";import"./useControlledState-Bk8G3l7-.js";import"./ListKeyboardDelegate-DfsLz0kM.js";import"./RSPContexts-BiYDMgRx.js";import"./Text-C0yZ48vO.js";import"./inertValue-DpKVEvKR.js";import"./useListState--ti2Y_Dy.js";import"./useHighlightSelectionDescription-DIwSEP0t.js";import"./useUpdateEffect-Dj98LVa3.js";import"./useLocalizedStringFormatter-DbKcsCUh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DwPibSLq.js";import"./useField-DULUasj1.js";import"./clsx-Ciqy0D92.js";import"./Button-HMTy8HIK.js";import"./Button.module-CcWMkJAG.js";import"./x-ha8t8lsl.js";import"./createLucideIcon-DViMXftD.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
