import{j as a}from"./iframe-CC0FN-Zc.js";import{T as o,a as i,s as D}from"./Tag-BboUYYtw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DR1h6H_B.js";import"./utils-DYyx-hw9.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dge5NQFv.js";import"./useFocusRing-DhymJvUy.js";import"./index-CZXq9gDj.js";import"./index-BLBSd2CN.js";import"./useLabels-D2XAUmU8.js";import"./useButton-BOxNHzcY.js";import"./Collection-VnhZNeRt.js";import"./index-B2RrP9iC.js";import"./ListBox-DYGESgNN.js";import"./DragAndDrop-DLoPBIdY.js";import"./getScrollParent-CYLBRnz1.js";import"./scrollIntoView-MJhnHTZE.js";import"./Separator-Cy8S0hmR.js";import"./SelectionManager-CpVu-w-P.js";import"./useEvent-BFqd8kcv.js";import"./SelectionIndicator-CP2-md6V.js";import"./useDescription-CPT5dREO.js";import"./useControlledState-Bu3OMakX.js";import"./ListKeyboardDelegate-CGa9P5lk.js";import"./RSPContexts-D29TubGX.js";import"./Text-6NVO-7ma.js";import"./inertValue-CHbjgOHK.js";import"./useListState-DIJ6Dv-B.js";import"./useHighlightSelectionDescription-D7VfSzZE.js";import"./useUpdateEffect-efX8dzaX.js";import"./useLocalizedStringFormatter-DdEpa8yh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C7IbJy-_.js";import"./useField-B3LDTL7d.js";import"./clsx-Ciqy0D92.js";import"./Button-CA2Kl9Gs.js";import"./Button.module-CcWMkJAG.js";import"./x-MgGLfh0u.js";import"./createLucideIcon-B44Lr7tO.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
