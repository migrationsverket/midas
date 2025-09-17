import{j as a}from"./iframe-CBLyp6Df.js";import{T as o,a as i,s as D}from"./Tag-CxjAq0dd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DNy0we5g.js";import"./utils-CZnmoRnZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cgex3EGe.js";import"./useFocusRing-Ba5BIRHo.js";import"./index-BeMsLq_7.js";import"./index-XngMirVr.js";import"./useLabels-xFBToVlf.js";import"./useButton-BYvOX5r7.js";import"./Collection-BUz76WAB.js";import"./index-DBpYSZP5.js";import"./ListBox-B-_XnFuZ.js";import"./DragAndDrop-D-cgf1vQ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BBqb7WaU.js";import"./SelectionManager-Bc7SFXXY.js";import"./useEvent-BRoPDqrk.js";import"./FocusScope-DacESX7A.js";import"./useDescription-DTdpx1Ui.js";import"./useControlledState-nq6MpzIR.js";import"./ListKeyboardDelegate-vzPGcoA_.js";import"./Text-Bktl3WMK.js";import"./inertValue-Ba9DdO6W.js";import"./useListState-BkKCuV-m.js";import"./useHighlightSelectionDescription-Bf4Vkv5g.js";import"./useUpdateEffect-FcmjDvQB.js";import"./useLocalizedStringFormatter-uOnQJl0p.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DzAZ0ruI.js";import"./useField-eBg2yBGQ.js";import"./Button-ByLLZfj5.js";import"./Button.module-DRhvPh0f.js";import"./x-CYzNJqF_.js";import"./createLucideIcon-pVx8Uva1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
