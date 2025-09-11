import{j as a}from"./iframe-msVlqhML.js";import{T as o,a as i,s as D}from"./Tag-B30ZAm9f.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DTX0YFTS.js";import"./utils-CU_Zz0Hf.js";import"./clsx-B-dksMZM.js";import"./Hidden-nMwTbqTI.js";import"./useFocusRing-DslHgSdZ.js";import"./index-BjJyUuOt.js";import"./index-CtZ7qj5_.js";import"./useLabels-Cg9UvaAJ.js";import"./useButton-CNbGrEGy.js";import"./Collection-BOugAWrE.js";import"./index-DEjMZ3Ze.js";import"./ListBox-C4VxKaL8.js";import"./DragAndDrop-RKcWSBEW.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DXEqEuub.js";import"./SelectionManager-Cqwz0YOv.js";import"./useEvent-Bb3BaYHZ.js";import"./FocusScope-ZKX3SuJ-.js";import"./useDescription-CAEc6CSl.js";import"./useControlledState-B3T6283o.js";import"./ListKeyboardDelegate-BTyCc1Hd.js";import"./Text-C_qPqKMm.js";import"./inertValue-BOzIYnf3.js";import"./useListState-CNEsE5NL.js";import"./useHighlightSelectionDescription-BCwmMSPs.js";import"./useUpdateEffect-BytN_Ld2.js";import"./useLocalizedStringFormatter-BXUd3FRe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B73vEme0.js";import"./useField-05U9CGnj.js";import"./Button-CEthOg-l.js";import"./Button.module-DRhvPh0f.js";import"./x-N5fUvO1K.js";import"./createLucideIcon-DjsO8H4y.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
