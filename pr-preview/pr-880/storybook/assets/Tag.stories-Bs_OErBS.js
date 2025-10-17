import{j as a}from"./iframe-h5k2CEca.js";import{T as o,a as i,s as D}from"./Tag-DIwwZtVZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cn0SfJ8Q.js";import"./utils-Br5OuN2F.js";import"./clsx-B-dksMZM.js";import"./Hidden-C2K1la--.js";import"./useFocusRing-_-s7-iNH.js";import"./index-CX5zhQPn.js";import"./index-C0w2aHIb.js";import"./useLabels-yFLtU5oo.js";import"./useButton-wrOkdSrL.js";import"./Collection-9SMsHEKV.js";import"./index-BhNNmxpl.js";import"./ListBox-CQj4YUtc.js";import"./DragAndDrop-DWqMrNdJ.js";import"./getScrollParent-BlFRFo8s.js";import"./scrollIntoView-D5uf7BV8.js";import"./Separator-CIe7jx2g.js";import"./SelectionManager-TF714flz.js";import"./useEvent-BVFHVtpZ.js";import"./SelectionIndicator-CteDQg40.js";import"./useDescription-CEX-kuc4.js";import"./useControlledState-1UAV20Bz.js";import"./ListKeyboardDelegate-CtCnQuS_.js";import"./RSPContexts-DYaFFXFS.js";import"./Text-CqSkGzJJ.js";import"./inertValue-Cb-nLskG.js";import"./useListState-Bff2w2_u.js";import"./useHighlightSelectionDescription-BQBFXNR8.js";import"./useUpdateEffect-CVdCnm-W.js";import"./useLocalizedStringFormatter-BlhEXCcC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BWlirprJ.js";import"./useField-BqDuBCFO.js";import"./clsx-Ciqy0D92.js";import"./Button-CkZ_2GIl.js";import"./Button.module-CcWMkJAG.js";import"./x-Bg2wYWPU.js";import"./createLucideIcon-DveBZZyh.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
