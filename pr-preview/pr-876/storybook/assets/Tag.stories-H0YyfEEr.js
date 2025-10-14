import{j as a}from"./iframe-C29QRlAU.js";import{T as o,a as i,s as D}from"./Tag-DSUuPQWf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-20OnKf0Z.js";import"./utils-Bkdp38EN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BF4OEKb3.js";import"./useFocusRing-BQqfOlYk.js";import"./index-8bZxAxBg.js";import"./index-DMFKSAW8.js";import"./useLabels-BdqYWfbW.js";import"./useButton-CpxPZiin.js";import"./Collection-D7BCUCRK.js";import"./index-DLLqYn8L.js";import"./ListBox-g8tSZFt-.js";import"./DragAndDrop-Cx9Ngmhg.js";import"./getScrollParent-D8qOcFnf.js";import"./scrollIntoView-D2DNFqUx.js";import"./Separator-C3lYLNwK.js";import"./SelectionManager-fOnByEZ_.js";import"./useEvent-Ba6WdLED.js";import"./SelectionIndicator-CTfw-gcj.js";import"./useDescription-D66Dd97R.js";import"./useControlledState-DuFZZhBN.js";import"./ListKeyboardDelegate-CGqzFlqa.js";import"./RSPContexts-mfI-p8d8.js";import"./Text-hEVlhbAY.js";import"./inertValue-D_hnM6qj.js";import"./useListState-io5IWql8.js";import"./useHighlightSelectionDescription-BlVYW-h4.js";import"./useUpdateEffect-CqYLMf7w.js";import"./useLocalizedStringFormatter-DBVitVMd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-o0qQ2M1b.js";import"./useField-B8Hfklqn.js";import"./clsx-Ciqy0D92.js";import"./Button-B84wJefQ.js";import"./Button.module-CcWMkJAG.js";import"./x-ZE0XQNdr.js";import"./createLucideIcon-DGbGHvao.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
