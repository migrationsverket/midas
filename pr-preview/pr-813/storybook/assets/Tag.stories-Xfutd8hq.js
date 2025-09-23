import{j as a}from"./iframe-Dv7jRoyV.js";import{T as o,a as i,s as D}from"./Tag-C_usHWp8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DEBZrv0u.js";import"./utils-C7obG5zo.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6fhnN_f.js";import"./useFocusRing-aVt3QRFU.js";import"./index-DRKtyzio.js";import"./index-CCHpQrzN.js";import"./useLabels-CRq2Fhnu.js";import"./useButton-DgW1f3at.js";import"./Collection-B6EewEz4.js";import"./index-CJpM2wej.js";import"./ListBox-B_cg3s3i.js";import"./DragAndDrop-BT_gdR-3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DcOKM4YH.js";import"./SelectionManager-GHhv1Mzf.js";import"./useEvent-DZoeUflK.js";import"./FocusScope-DWyIhzk8.js";import"./useDescription-BiS98pXb.js";import"./useControlledState-DBINk-V_.js";import"./ListKeyboardDelegate-DN9tGEV6.js";import"./Text-B1APPngW.js";import"./inertValue-gsO-1Z9s.js";import"./useListState-C7gRm5jG.js";import"./useHighlightSelectionDescription-CA7v3pJ2.js";import"./useUpdateEffect-QNtnG_kT.js";import"./useLocalizedStringFormatter-_hQ7Bthj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-fgAEvc0e.js";import"./useField-DzWbRMd-.js";import"./Button-CsLpFORT.js";import"./Button.module-DRhvPh0f.js";import"./x-D6MZmVNz.js";import"./createLucideIcon-Bfn2w-jT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
