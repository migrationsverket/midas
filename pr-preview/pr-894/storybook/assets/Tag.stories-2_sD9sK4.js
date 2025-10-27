import{j as a}from"./iframe-BCv2rzr9.js";import{T as o,a as i,s as D}from"./Tag-B1D8UDmR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D5kuCja3.js";import"./utils-CDKvZeof.js";import"./clsx-B-dksMZM.js";import"./Hidden-BenjnVYI.js";import"./useFocusRing-BNESqCRc.js";import"./index-Dx8nmKY4.js";import"./index-Bb_2lGIb.js";import"./useLabels-DxQXfiDI.js";import"./useButton-QTAKkxRm.js";import"./Collection-CVdszb_7.js";import"./index-_A-oj774.js";import"./ListBox-CH92jayw.js";import"./DragAndDrop-DVnKDWuA.js";import"./getScrollParent-DfKXlfx2.js";import"./scrollIntoView-GBiVTFAr.js";import"./Separator-rsGARimM.js";import"./SelectionManager-DBgwQ_i0.js";import"./useEvent-CyeZcoaa.js";import"./SelectionIndicator-1jtXO3OL.js";import"./useDescription-h4aCqBHj.js";import"./useControlledState-DVm64QZU.js";import"./ListKeyboardDelegate-CMSZQWEU.js";import"./RSPContexts-BSw-ShGO.js";import"./Text-BDHSM18P.js";import"./inertValue-bbNYVk1W.js";import"./useListState-BA_RuX6Z.js";import"./useHighlightSelectionDescription-DY4jW10X.js";import"./useUpdateEffect-CBWUYgSP.js";import"./useLocalizedStringFormatter-B59lqAQj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BQood6Td.js";import"./useField-JV8twEpD.js";import"./clsx-Ciqy0D92.js";import"./Button-D2vcUsmS.js";import"./Button.module-CcWMkJAG.js";import"./x-CN3kS_w8.js";import"./createLucideIcon-DWu9pD4R.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
