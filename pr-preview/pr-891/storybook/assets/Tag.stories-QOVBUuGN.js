import{j as a}from"./iframe-Tw41aNfS.js";import{T as o,a as i,s as D}from"./Tag-M-YMrITH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DNTXyKA6.js";import"./utils-BPejs0wc.js";import"./clsx-B-dksMZM.js";import"./Hidden-_XUoW0aU.js";import"./useFocusRing-mxtqiPoR.js";import"./index-CKncJRoA.js";import"./index-C3uEoWC8.js";import"./useLabels-CihZ0btI.js";import"./useButton-DvHXUOBv.js";import"./Collection-Damm0H4p.js";import"./index-BatNM415.js";import"./ListBox-Z6kx2UzX.js";import"./DragAndDrop-DZQRu1mR.js";import"./getScrollParent-C19WkcPQ.js";import"./scrollIntoView-5IfCkSsC.js";import"./Separator-D9dqEjz7.js";import"./SelectionManager-CSo5rJqG.js";import"./useEvent-BL7ym3ft.js";import"./SelectionIndicator-Cf15jQQA.js";import"./useDescription-Cbff0xqB.js";import"./useControlledState-B5Dm8GAh.js";import"./ListKeyboardDelegate-DqfvtVCk.js";import"./RSPContexts-BaqoygXm.js";import"./Text-Bc0J-Jf5.js";import"./inertValue-NJBRoBmc.js";import"./useListState-q5FpRFHq.js";import"./useHighlightSelectionDescription-BYRm4LL9.js";import"./useUpdateEffect-4zxp6d-Z.js";import"./useLocalizedStringFormatter-CSGw0Clq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Q0K6m3gY.js";import"./useField-i2aIJcHd.js";import"./clsx-Ciqy0D92.js";import"./Button-BHbFATyp.js";import"./Button.module-CcWMkJAG.js";import"./x-DDCprBDq.js";import"./createLucideIcon-DaJOZeq2.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
