import{j as a}from"./iframe-DG9xiTd4.js";import{T as o,a as i,s as D}from"./Tag-DyVFZ7FY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CgQJGKzR.js";import"./utils-DzWjOrq2.js";import"./clsx-B-dksMZM.js";import"./Hidden-DSdQVBEv.js";import"./useFocusRing-DPgjBYvb.js";import"./index-BpsyaRkK.js";import"./index-BNhG5d8C.js";import"./useLabels-CnrKdDg9.js";import"./useButton-DgJDVlsN.js";import"./Collection-BVxVLPIx.js";import"./index-BQx-qsZi.js";import"./ListBox-CTvBBUQZ.js";import"./DragAndDrop-OUICeK37.js";import"./getScrollParent-BhQousJn.js";import"./scrollIntoView-DT6M7iwT.js";import"./Separator-E_psd4Ai.js";import"./SelectionManager-C4nLhJ-4.js";import"./useEvent-Dmd_J0Pz.js";import"./SelectionIndicator-BIPafCUG.js";import"./useDescription-CZM7Hxmy.js";import"./useControlledState-Cw73sY1x.js";import"./ListKeyboardDelegate-DDVKlbrq.js";import"./RSPContexts-DYV65kXN.js";import"./Text-Db21VY8r.js";import"./inertValue-0bpirTFV.js";import"./useListState-C1c9NkPD.js";import"./useHighlightSelectionDescription-DRd4SceC.js";import"./useUpdateEffect-DUP_N_Mq.js";import"./useLocalizedStringFormatter-CjURf732.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CCZNAm5v.js";import"./useField-s7p-hOBc.js";import"./clsx-Ciqy0D92.js";import"./Button-CVlqydTf.js";import"./Button.module-CcWMkJAG.js";import"./x-DI9-8JRa.js";import"./createLucideIcon-BJZlDLXi.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
