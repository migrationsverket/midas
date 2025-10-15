import{j as a}from"./iframe-DywgHHOz.js";import{T as o,a as i,s as D}from"./Tag-BXNhrqu3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DRurb4YZ.js";import"./utils-7E-A0KYb.js";import"./clsx-B-dksMZM.js";import"./Hidden-C9qjYhJz.js";import"./useFocusRing-C7Aa5c6M.js";import"./index-cRsuDwow.js";import"./index-mOD4BP7v.js";import"./useLabels-DoT2z1Ka.js";import"./useButton-C-KgXnqj.js";import"./Collection-BwRAmMfX.js";import"./index-DUWMINRM.js";import"./ListBox-wH05_uJ6.js";import"./DragAndDrop-DHLXqb03.js";import"./getScrollParent-BBsncba1.js";import"./scrollIntoView-W0Xz4mHI.js";import"./Separator-D43x9Jd2.js";import"./SelectionManager-CFLk4C-M.js";import"./useEvent-DPH1Tln8.js";import"./SelectionIndicator-BJSyDXZl.js";import"./useDescription-CuLk9nLj.js";import"./useControlledState-DYPLIOzd.js";import"./ListKeyboardDelegate-Dtj9dwpY.js";import"./RSPContexts-D3TFejB0.js";import"./Text-BEzBlk9J.js";import"./inertValue-P4ZFnZ2_.js";import"./useListState-B-YEzMQS.js";import"./useHighlightSelectionDescription-Bb4fYKIh.js";import"./useUpdateEffect-DffX6qpw.js";import"./useLocalizedStringFormatter-CT80NgTS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DGRR8R63.js";import"./useField-SQj0c6ZW.js";import"./clsx-Ciqy0D92.js";import"./Button-C78CM29I.js";import"./Button.module-CcWMkJAG.js";import"./x-CmSCtVeM.js";import"./createLucideIcon-BYm28bHt.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
