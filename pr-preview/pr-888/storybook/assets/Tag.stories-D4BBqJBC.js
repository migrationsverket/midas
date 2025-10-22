import{j as a}from"./iframe-exAIIesz.js";import{T as o,a as i,s as D}from"./Tag-CXUbip4Y.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-UK7eZhYA.js";import"./utils-BOVlzJyh.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cq7tItyH.js";import"./useFocusRing-BZWWt6WH.js";import"./index-dL06C2ZB.js";import"./index-DbjT8O8-.js";import"./useLabels-D6mGi-9p.js";import"./useButton-DOjlTX9-.js";import"./Collection-BjqR60V0.js";import"./index-DoCDkWz9.js";import"./ListBox-DroLWLlk.js";import"./DragAndDrop-DWH5_1P8.js";import"./getScrollParent-CK82ps7F.js";import"./scrollIntoView-C2xIFzTA.js";import"./Separator-DYgcKna9.js";import"./SelectionManager-GD3QRAtk.js";import"./useEvent-D4-Tue6s.js";import"./SelectionIndicator-DnjV2-2T.js";import"./useDescription-Bv2X1BnC.js";import"./useControlledState-DHEoYuiB.js";import"./ListKeyboardDelegate-B7B4tgnw.js";import"./RSPContexts-Bxud3ohR.js";import"./Text-Ch7PO2OE.js";import"./inertValue-DMGqGjqQ.js";import"./useListState-CONctuXx.js";import"./useHighlightSelectionDescription-2YUwQkgL.js";import"./useUpdateEffect-C9IFA8Mz.js";import"./useLocalizedStringFormatter-DAGGjybR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CX5T5w5l.js";import"./useField-0WAOAHVK.js";import"./clsx-Ciqy0D92.js";import"./Button-DyH0QqsJ.js";import"./Button.module-CcWMkJAG.js";import"./x-Bw_5GrvR.js";import"./createLucideIcon-AlVM7_G-.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
