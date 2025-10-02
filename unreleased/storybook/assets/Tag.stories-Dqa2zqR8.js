import{j as a}from"./iframe-BKgdGsmC.js";import{T as o,a as i,s as D}from"./Tag-DCh8hUQf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-vFNZvfut.js";import"./utils-DbffjG74.js";import"./clsx-B-dksMZM.js";import"./Hidden-BstvobJb.js";import"./useFocusRing-BCiUJfMh.js";import"./index-DDmQ3PFF.js";import"./index-CizgzPqk.js";import"./useLabels-DP_g2vad.js";import"./useButton-Bidou6D9.js";import"./Collection-CCigxpz-.js";import"./index-B5I5xm4M.js";import"./ListBox-tudnm78N.js";import"./DragAndDrop-CJXIPOuY.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-izaaAnBD.js";import"./SelectionManager-CZHBenbf.js";import"./useEvent-D61MdZzv.js";import"./FocusScope-Brw3NuNN.js";import"./useDescription-D7iCySNI.js";import"./useControlledState-mxYM2bXb.js";import"./context-ic1DDHTR.js";import"./Text-BrphPHsK.js";import"./inertValue-CJEvO8tO.js";import"./useListState-RWX_pYqQ.js";import"./useHighlightSelectionDescription-D27E8rgp.js";import"./useUpdateEffect-MtIu7TA4.js";import"./useLocalizedStringFormatter-Bh08TWq4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CJAW-Rpo.js";import"./useField-BfjjQwN1.js";import"./clsx-Ciqy0D92.js";import"./Button-Drg7ShL9.js";import"./Button.module-DRhvPh0f.js";import"./x-BV-8RCQi.js";import"./createLucideIcon-C1t_zNpJ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
