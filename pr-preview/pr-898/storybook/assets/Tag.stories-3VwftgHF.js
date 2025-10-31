import{j as a}from"./iframe-D0N9Z4gh.js";import{T as o,a as i,s as D}from"./Tag-DenqDvOT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B4t1_9w4.js";import"./utils-D0LCdDmo.js";import"./clsx-B-dksMZM.js";import"./Hidden-gMsWwj7-.js";import"./useFocusRing-DjlEAUPa.js";import"./index-CH5X4Beu.js";import"./index-ZnHSHBR0.js";import"./useLabels-CdTc7eD_.js";import"./useButton-D1MW79u0.js";import"./Collection-BTU097zO.js";import"./index-C-mFqzEk.js";import"./ListBox-DQQ_YJhY.js";import"./DragAndDrop-DOJeOxjN.js";import"./getScrollParent-Boxvu3x1.js";import"./scrollIntoView-R05EoV2Z.js";import"./Separator-B0WGt6FH.js";import"./SelectionManager-BsXF5Rx3.js";import"./useEvent-CYYJVG5c.js";import"./SelectionIndicator-D-OIL8Sa.js";import"./useDescription-DP7ZHG1e.js";import"./useControlledState-CxrTOxQO.js";import"./ListKeyboardDelegate-DOUmNaiR.js";import"./RSPContexts-Da8HOg47.js";import"./Text-_H5mVN6V.js";import"./inertValue-CRywxNz7.js";import"./useListState-RFKa6Ii8.js";import"./useHighlightSelectionDescription-D-24tCBk.js";import"./useUpdateEffect-U6QAS62J.js";import"./useLocalizedStringFormatter-Bb0VYmYm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cdw3RT7o.js";import"./useField-BcEF9zR8.js";import"./clsx-Ciqy0D92.js";import"./Button-CnMe1FWR.js";import"./Button.module-CcWMkJAG.js";import"./x-D_FYmGBI.js";import"./createLucideIcon-CnAYQqLJ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
