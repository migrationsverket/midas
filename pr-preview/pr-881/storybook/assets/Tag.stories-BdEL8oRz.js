import{j as a}from"./iframe-BHx1YXWT.js";import{T as o,a as i,s as D}from"./Tag-CdE3HZn7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BJsTxf2v.js";import"./utils-29UIY1wg.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dgru8jFp.js";import"./useFocusRing-CsIuwnWD.js";import"./index-BIwPKOEo.js";import"./index-aBA6tMIv.js";import"./useLabels-CJoncRX8.js";import"./useButton-DyST1Yei.js";import"./Collection-iui7dfCc.js";import"./index-CCSYfR79.js";import"./ListBox-nztoXh-M.js";import"./DragAndDrop-CAQKgvRw.js";import"./getScrollParent-eF3PYYDs.js";import"./scrollIntoView-DOCxFP9m.js";import"./Separator-BvRMrgIo.js";import"./SelectionManager-BqnUqIox.js";import"./useEvent-dxH_m5jY.js";import"./SelectionIndicator-C7ltmrD2.js";import"./useDescription-CeDrGSSb.js";import"./useControlledState-C7-AYeSc.js";import"./ListKeyboardDelegate-DNLwcBTF.js";import"./RSPContexts-CZl0imhg.js";import"./Text-D6pVMuSB.js";import"./inertValue-CjYo2QG8.js";import"./useListState-g6qP-leg.js";import"./useHighlightSelectionDescription-C8cmh6Ug.js";import"./useUpdateEffect-CceIM244.js";import"./useLocalizedStringFormatter-BiDXxmQ0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D9bDHAPb.js";import"./useField-jbfqwj3n.js";import"./clsx-Ciqy0D92.js";import"./Button-CAmSTkoA.js";import"./Button.module-CcWMkJAG.js";import"./x-DAqDNG4o.js";import"./createLucideIcon-YCOVWVp0.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
