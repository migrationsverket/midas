import{j as a}from"./iframe-DqdFVXzy.js";import{T as o,a as i,s as D}from"./Tag-BFNbc0yZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BQwWwOYc.js";import"./utils-BybFEiWG.js";import"./clsx-B-dksMZM.js";import"./Hidden-AsuRat69.js";import"./useFocusRing-CsmZctop.js";import"./index-H8lr350N.js";import"./index-DKNPjsqP.js";import"./useLabels-DzxSeVa3.js";import"./useButton-Cxd-fkHx.js";import"./Collection-B7BO8yeo.js";import"./index-CK8yzisA.js";import"./ListBox-_Xgv2GJx.js";import"./DragAndDrop-DNrecCgY.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-LugSSN8v.js";import"./SelectionManager-D-i2S3vu.js";import"./useEvent-C0Qmt8gK.js";import"./FocusScope-BTU0_y7x.js";import"./useDescription-CLXrmkVa.js";import"./useControlledState-11-dBGiu.js";import"./ListKeyboardDelegate-CWe4yC8K.js";import"./Text-BjFdvgcC.js";import"./inertValue-DrfPnFaN.js";import"./useListState-zjA1JRgd.js";import"./useHighlightSelectionDescription-NlWpxJ0B.js";import"./useUpdateEffect-jzWgAYkz.js";import"./useLocalizedStringFormatter-CuRfBicw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CcAj9gfO.js";import"./useField-B_vOu40d.js";import"./Button-B7_q0KkC.js";import"./Button.module-GuOSDIYz.js";import"./x-CDKlBMTv.js";import"./createLucideIcon-BFfBiUjw.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
