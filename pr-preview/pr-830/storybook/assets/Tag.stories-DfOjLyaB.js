import{j as a}from"./iframe-C5AmqOfI.js";import{T as o,a as i,s as D}from"./Tag-DhSAWwXO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bvnet1gp.js";import"./utils-CmtxAEIy.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dag0Yj4a.js";import"./useFocusRing-c2yL1CMC.js";import"./index-DXJeV7EG.js";import"./index-GpKMYlfZ.js";import"./useLabels-BdNTtdLX.js";import"./useButton-CtinvHzA.js";import"./Collection-iXHwiIA7.js";import"./index-VWtUDCcy.js";import"./ListBox-jhMvCDcS.js";import"./DragAndDrop-MoeArZdj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CKL9BeMK.js";import"./SelectionManager-D5vyzfog.js";import"./useEvent-BhEe3ZlT.js";import"./FocusScope-CjXwAII_.js";import"./useDescription-BF5uCDCe.js";import"./useControlledState-BSa1Bnqo.js";import"./ListKeyboardDelegate-DLBBuFpK.js";import"./Text-KyE7mIi9.js";import"./inertValue-GnU5H9Ce.js";import"./useListState-DME3W3PE.js";import"./useHighlightSelectionDescription-BE5BVfu-.js";import"./useUpdateEffect-pxadrGC4.js";import"./useLocalizedStringFormatter-Djhxhibm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cm84QndW.js";import"./useField-Dump1Sp2.js";import"./Button-D6PTG4YJ.js";import"./Button.module-DRhvPh0f.js";import"./x-BSNWmPrO.js";import"./createLucideIcon-CI5j_4sd.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
