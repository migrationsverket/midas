import{j as a}from"./iframe-Cjinl3KY.js";import{T as o,a as i,s as D}from"./Tag-BipXp8aX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BzO5uQlz.js";import"./utils-Df6g5th9.js";import"./clsx-B-dksMZM.js";import"./Hidden-BYr6X160.js";import"./useFocusRing-BDYIEaxW.js";import"./index-m9hpbgeH.js";import"./index-CLkfaRef.js";import"./useLabels-Bq5P0zwF.js";import"./useButton-CYeiUsIx.js";import"./Collection-C1xbPv27.js";import"./index--qVMC9Mz.js";import"./ListBox-h4h1sc4v.js";import"./DragAndDrop-4TK5fC3D.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CUDRGmi5.js";import"./SelectionManager--kiOrq-L.js";import"./useEvent-BEZ6m5jX.js";import"./FocusScope-DAJZAsxN.js";import"./useDescription-Axda9Z09.js";import"./useControlledState-B8FrTbp7.js";import"./ListKeyboardDelegate-C8yTPB0Y.js";import"./Text-CvqKJyo0.js";import"./inertValue-D1q590WQ.js";import"./useListState-CbBBkYHK.js";import"./useHighlightSelectionDescription-BjgO85Ba.js";import"./useUpdateEffect-DH7O7AlD.js";import"./useLocalizedStringFormatter-DqC1TwZG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BJnybFLf.js";import"./useField-C_6HJxyE.js";import"./Button-Bk2dWWNW.js";import"./Button.module-DWkXlqFG.js";import"./x-CcSnAaFn.js";import"./createLucideIcon-DRoLvpIq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
