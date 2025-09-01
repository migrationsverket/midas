import{j as a}from"./iframe-BMmMZ3KQ.js";import{T as o,a as i,s as D}from"./Tag-tsAh7CC5.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CAnGa41Q.js";import"./utils-xNuviegb.js";import"./clsx-B-dksMZM.js";import"./Hidden-Csnnc-5W.js";import"./useFocusRing-BLN4P0l8.js";import"./index-Bu4v8jR2.js";import"./index-ayWxPvH_.js";import"./useLabels-bQhl9_tH.js";import"./useButton-C4rEA2ow.js";import"./Collection-DRKmQ10F.js";import"./index-Xlj1111l.js";import"./ListBox-BwOW5b4Z.js";import"./DragAndDrop-CIJxwyri.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C2wHLlaf.js";import"./SelectionManager-B3sDjCA-.js";import"./useEvent-dMl8FbRc.js";import"./FocusScope-nZwB_i2O.js";import"./useDescription-BOxlfeZ7.js";import"./useControlledState-B57r2QjO.js";import"./ListKeyboardDelegate-C5eFPFPB.js";import"./Text-BZcgUTV9.js";import"./inertValue-CzN8cl0m.js";import"./useListState-Dl-PJYav.js";import"./useHighlightSelectionDescription-CsotdiHy.js";import"./useUpdateEffect-ezomtBnJ.js";import"./useLocalizedStringFormatter-BpLsT0Js.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CBQNbEJt.js";import"./useField-C3oaSnLU.js";import"./Button-CHVH63zJ.js";import"./Button.module-CF2bVDCq.js";import"./x-ByopPi01.js";import"./createLucideIcon-nRYkhXZX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
