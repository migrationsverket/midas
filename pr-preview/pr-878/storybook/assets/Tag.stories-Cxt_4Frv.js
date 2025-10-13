import{j as a}from"./iframe-D7KRH2w0.js";import{T as o,a as i,s as D}from"./Tag-CjMY67ix.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BbL-LtD0.js";import"./utils-YJ4LcQvJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DwQSBNUK.js";import"./useFocusRing-BIE4Oqu0.js";import"./index-BhY7wWRX.js";import"./index-BR3BtA_z.js";import"./useLabels-BgtchYzK.js";import"./useButton-BtiQQkPf.js";import"./Collection-BhI6voXw.js";import"./index-SJ2LG-n-.js";import"./ListBox-B98mDwhQ.js";import"./DragAndDrop-BzEyQQCW.js";import"./getScrollParent-DTMA2sRS.js";import"./scrollIntoView-DVXOQVDA.js";import"./Separator-CSGKY2dB.js";import"./SelectionManager-Bh5H9Vgs.js";import"./useEvent-DILCW9z-.js";import"./SelectionIndicator-jhBHHK9d.js";import"./useDescription-0X3Fox5S.js";import"./useControlledState-BixayODp.js";import"./ListKeyboardDelegate-BVZEoX70.js";import"./RSPContexts-Cy1Q7X_Y.js";import"./Text-BAk3Yw4Y.js";import"./inertValue-DiZYAsev.js";import"./useListState-DB7rdAV9.js";import"./useHighlightSelectionDescription-BFChzC2R.js";import"./useUpdateEffect-DlMtsa-q.js";import"./useLocalizedStringFormatter-DNVwbNDa.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-72s_aMdd.js";import"./useField-Cym7iLum.js";import"./clsx-Ciqy0D92.js";import"./Button-CvMWGrrp.js";import"./Button.module-CcWMkJAG.js";import"./x-Do98iBKS.js";import"./createLucideIcon-DxSIoQL9.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
