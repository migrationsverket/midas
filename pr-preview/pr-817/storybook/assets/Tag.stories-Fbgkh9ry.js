import{j as a}from"./iframe-5mJ54hMG.js";import{T as o,a as i,s as D}from"./Tag-jbsZ-cBl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BlJ-h24Q.js";import"./utils-fIT37HFT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxpR5TfX.js";import"./useFocusRing-QzQvOQb8.js";import"./index-By6goSh1.js";import"./index-DdqZOxaN.js";import"./useLabels-DEIIzD1W.js";import"./useButton-iQ81wae6.js";import"./Collection-8B0Wywu-.js";import"./index-DHS6g6Ss.js";import"./ListBox--xXotyh0.js";import"./DragAndDrop-6ubQvIQ8.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BzMrmjGt.js";import"./SelectionManager-Due5j-gO.js";import"./useEvent-KjZWQh8t.js";import"./FocusScope-DVauhb5R.js";import"./useDescription-D7D0dAJQ.js";import"./useControlledState-BD4TrQu4.js";import"./ListKeyboardDelegate-Bcy-t-zI.js";import"./Text-C3OhQqHf.js";import"./inertValue-Bmimd2g0.js";import"./useListState-BMWsZuqu.js";import"./useHighlightSelectionDescription-DPWpvsGC.js";import"./useUpdateEffect-DFrqOY3w.js";import"./useLocalizedStringFormatter-BzwP57dJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-rBYCEneK.js";import"./useField-BvEkW0bn.js";import"./Button-DJD2ZPYu.js";import"./Button.module-DRhvPh0f.js";import"./x-CiLbNEJ6.js";import"./createLucideIcon-Ce8IEqwF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
