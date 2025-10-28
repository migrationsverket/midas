import{j as a}from"./iframe-BbZrodNC.js";import{T as o,a as i,s as D}from"./Tag-B0_2lwcu.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BL4mzCjl.js";import"./utils-svfKO8OE.js";import"./clsx-B-dksMZM.js";import"./Hidden-BOCEQY3j.js";import"./useFocusRing-Cj9nulgg.js";import"./index-CZWLSawq.js";import"./index-dtG6SJ9f.js";import"./useLabels-D-1rCkKt.js";import"./useButton-BftxziQO.js";import"./Collection-DNUcstJi.js";import"./index-DTDzCd9z.js";import"./ListBox-B8_CZl8_.js";import"./DragAndDrop-CBy8mxx-.js";import"./getScrollParent-ZKwR3FsS.js";import"./scrollIntoView-CvNxlnGM.js";import"./Separator-78kfQv5t.js";import"./SelectionManager-DPZ0_cJT.js";import"./useEvent-DE6wL1S8.js";import"./SelectionIndicator-C9j8TTh9.js";import"./useDescription-DIh2gm3u.js";import"./useControlledState-BJObeV5G.js";import"./ListKeyboardDelegate-DIfNwi43.js";import"./RSPContexts-BMvMOyYO.js";import"./Text-CwGe3h9i.js";import"./inertValue-D2Xyyvtq.js";import"./useListState-fWGFpL57.js";import"./useHighlightSelectionDescription-CoWhWSbj.js";import"./useUpdateEffect-DUb5CwGZ.js";import"./useLocalizedStringFormatter-BNHbpWoy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C9yx4y19.js";import"./useField-BxKfxmmF.js";import"./clsx-Ciqy0D92.js";import"./Button-B5Hz3VpK.js";import"./Button.module-CcWMkJAG.js";import"./x-Bc-bjNmh.js";import"./createLucideIcon-DBIg6Q9N.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
