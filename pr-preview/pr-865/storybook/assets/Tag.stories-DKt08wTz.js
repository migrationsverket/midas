import{j as a}from"./iframe-CeQpAsO0.js";import{T as o,a as i,s as D}from"./Tag-6JapHI7v.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-lXDVi7WY.js";import"./utils-DtdWxEv9.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dj2lsTDl.js";import"./useFocusRing-sJVH1WSL.js";import"./index-DR5TJ2iK.js";import"./index-BRiSuUVX.js";import"./useLabels-DADPvb4b.js";import"./useButton-DOfuUowx.js";import"./Collection-CiWt43FP.js";import"./index-Cio_hqN9.js";import"./ListBox-JDqlUMp7.js";import"./DragAndDrop-BHg7gPIT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DZgDDQdd.js";import"./SelectionManager-kD2Sfc_I.js";import"./useEvent-Ba-l_Ij2.js";import"./FocusScope-DqTo_nDQ.js";import"./useDescription-3XMb2PvR.js";import"./useControlledState-D_qTrjmx.js";import"./context-DOKaq6wv.js";import"./Text-CZn_a_Km.js";import"./inertValue-vmTSm18s.js";import"./useListState-Da1vwspd.js";import"./useHighlightSelectionDescription--YkcFZX0.js";import"./useUpdateEffect-DiVOaPyN.js";import"./useLocalizedStringFormatter-BIA2Brom.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-noiAf7iu.js";import"./useField-CFO2za0c.js";import"./clsx-Ciqy0D92.js";import"./Button-Bue6phzC.js";import"./Button.module-CcWMkJAG.js";import"./x-Bil0Eu21.js";import"./createLucideIcon-VkwXuU73.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
