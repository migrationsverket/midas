import{j as a}from"./iframe-D2J9lQ-G.js";import{T as o,a as i,s as D}from"./Tag-Cg4qZNpJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CR8Pggrs.js";import"./utils-xZHwKLAK.js";import"./clsx-B-dksMZM.js";import"./Hidden-CVamZbnn.js";import"./useFocusRing-DPe83htM.js";import"./index-CPXZLqNA.js";import"./index-PV1JxFi-.js";import"./useLabels-CvW1B8gx.js";import"./useButton-CEfs-2nU.js";import"./Collection-CZNNYJeG.js";import"./index-DTqd3Prn.js";import"./ListBox-Cg5inWF8.js";import"./DragAndDrop-D68EkHTP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BpoZ6Sa3.js";import"./SelectionManager-Dl8QRYIT.js";import"./useEvent-BdxqB2bT.js";import"./FocusScope-KnTwGtwZ.js";import"./useDescription-FXuSZwId.js";import"./useControlledState-2UblfU9s.js";import"./context-CVa0HkLD.js";import"./Text-M7GV8OIY.js";import"./inertValue-BOyND0ew.js";import"./useListState-BAG2N38R.js";import"./useHighlightSelectionDescription-Cjs6BrmM.js";import"./useUpdateEffect-BCTlKWTx.js";import"./useLocalizedStringFormatter-AkDaVf3m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D6diqR20.js";import"./useField-BVqP4DUL.js";import"./clsx-Ciqy0D92.js";import"./Button-BOhfuY2j.js";import"./Button.module-CcWMkJAG.js";import"./x-CcWeBwVO.js";import"./createLucideIcon-Be3A8vjT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
