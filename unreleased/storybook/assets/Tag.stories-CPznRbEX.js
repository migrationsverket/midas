import{j as a}from"./iframe-C_IMZI11.js";import{T as o,a as i,s as D}from"./Tag-DPLLA8wT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BHjPaGVS.js";import"./utils-BKskW800.js";import"./clsx-B-dksMZM.js";import"./Hidden-B6kSx7V2.js";import"./useFocusRing-BBEgfa6Y.js";import"./index-BUmptT68.js";import"./index-D5F6RO1H.js";import"./useLabels-DfLBK3yB.js";import"./useButton-FM3MQBDf.js";import"./Collection-CYIMVfCQ.js";import"./index-CwU8Sj5D.js";import"./ListBox-hyUh1OEO.js";import"./DragAndDrop-DTHVe-fw.js";import"./getScrollParent-CuB8w4_J.js";import"./scrollIntoView-BukwnCJF.js";import"./Separator-CYuM7X-Q.js";import"./SelectionManager-MDr_SiYl.js";import"./useEvent-BgQkDCAe.js";import"./SelectionIndicator-CSpKl-ZZ.js";import"./useDescription-OzQGMHut.js";import"./useControlledState-btHGLWeC.js";import"./ListKeyboardDelegate-DUO5pEwi.js";import"./RSPContexts-CqAFzDyl.js";import"./Text-Ck-9rahk.js";import"./inertValue-B9Gt_h73.js";import"./useListState-DfTCqmGr.js";import"./useHighlightSelectionDescription-BrAo7zly.js";import"./useUpdateEffect-DM2YuNCp.js";import"./useLocalizedStringFormatter-CCds6hme.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CVRA5t4K.js";import"./useField-BHsLcPUu.js";import"./clsx-Ciqy0D92.js";import"./Button-Cbca66eA.js";import"./Button.module-CcWMkJAG.js";import"./x-C52PXWn-.js";import"./createLucideIcon-7Sr44F2X.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
