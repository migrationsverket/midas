import{j as a}from"./iframe-C2I2IXAb.js";import{T as o,a as i,s as D}from"./Tag-unW43kFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cd6r4fAI.js";import"./utils-BKJcEba4.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bsb3SYHJ.js";import"./useFocusRing-Bnlf4ZU_.js";import"./index-Brg-xNUA.js";import"./index-0oHbsqCH.js";import"./useLabels-CAg_jKMU.js";import"./useButton-ZRkE-b7U.js";import"./Collection-DGDYlX9v.js";import"./index-PfKgW19v.js";import"./ListBox-BjM45Wyd.js";import"./DragAndDrop-CQiHe_3t.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DeebUBZR.js";import"./SelectionManager-DL8rUktV.js";import"./useEvent-C26IfLn2.js";import"./FocusScope-Da2QSG2u.js";import"./useDescription-CxIIfG81.js";import"./useControlledState-Cv-DkPWb.js";import"./ListKeyboardDelegate-BWqEPee0.js";import"./Text-CVegTv8d.js";import"./inertValue-C-Hgg4kY.js";import"./useListState-BbXTdy2V.js";import"./useHighlightSelectionDescription-Bch0M2ZA.js";import"./useUpdateEffect-DvJx6NUC.js";import"./useLocalizedStringFormatter-Be5nvw90.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C-D13pIi.js";import"./useField-Bxs0kETM.js";import"./Button-DxF7NtrV.js";import"./Button.module-DRhvPh0f.js";import"./x-PfpuJ2Gm.js";import"./createLucideIcon-DF5KEBgY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
