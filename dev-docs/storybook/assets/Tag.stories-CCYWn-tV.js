import{j as a}from"./iframe-BSo4gsvr.js";import{T as o,a as i,s as D}from"./Tag-86YkTm8t.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-w3oDsey0.js";import"./utils-0Gf6jHdw.js";import"./clsx-B-dksMZM.js";import"./Hidden-CLVw-VGC.js";import"./useFocusRing-S3cIUjrh.js";import"./index-DbGRHx9-.js";import"./index-CT6uBtU9.js";import"./useLabels-CIMl--62.js";import"./useButton-DBZEyWkn.js";import"./Collection-BCpR9oCA.js";import"./index-Ce255hfJ.js";import"./ListBox-DZtuvBOc.js";import"./DragAndDrop-E0z5PuYi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Drt0OF4F.js";import"./SelectionManager-DsA-S4I3.js";import"./useEvent-DpV3Gmq5.js";import"./FocusScope-D1p5ffhX.js";import"./useDescription-DWl8xwdq.js";import"./useControlledState-2wYzA0Kf.js";import"./ListKeyboardDelegate-uRYs3TUe.js";import"./Text-kycnXTfi.js";import"./inertValue-C0GLJAUI.js";import"./useListState-CHYgHdt1.js";import"./useHighlightSelectionDescription-nbPN7uaa.js";import"./useUpdateEffect-CBpobUgp.js";import"./useLocalizedStringFormatter-Bf9AquBJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-q43JjYGl.js";import"./useField-BzTwIDiM.js";import"./Button-BkX9QSV1.js";import"./Button.module-BkTnSRp5.js";import"./x-C38a5_5B.js";import"./createLucideIcon-DOhr1T52.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
