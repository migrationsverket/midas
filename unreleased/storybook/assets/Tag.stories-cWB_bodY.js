import{j as a}from"./iframe-CbexyTHU.js";import{T as o,a as i,s as D}from"./Tag-DfrP8_wH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CqBLha1v.js";import"./utils-C2AdIHdL.js";import"./clsx-B-dksMZM.js";import"./Hidden-DaO1QKSL.js";import"./useFocusRing-j9hBrNvk.js";import"./index-BfBmSA-i.js";import"./index-DZCtJAGU.js";import"./useLabels-Cc8Oxi18.js";import"./useButton-B_51QS_8.js";import"./Collection-RTQH1V9Q.js";import"./index-DjQlqutO.js";import"./ListBox-BJQU0WHF.js";import"./DragAndDrop-BJ72XSkd.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DuerWLvk.js";import"./SelectionManager-B9Kro_qX.js";import"./useEvent-DP2HRElI.js";import"./FocusScope-XYX6hy7o.js";import"./useDescription-DEx-baF9.js";import"./useControlledState-CCd0CEgP.js";import"./ListKeyboardDelegate-BpiGu0OI.js";import"./Text-D3VrqraL.js";import"./inertValue-Bf03EiZX.js";import"./useListState-n70oI04V.js";import"./useHighlightSelectionDescription-BGmaPz-_.js";import"./useUpdateEffect-CvObuRTE.js";import"./useLocalizedStringFormatter-C41FtrHd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BbpEFuh0.js";import"./useField-D3wgidSf.js";import"./Button-6peQpPBr.js";import"./Button.module-DRhvPh0f.js";import"./x-YPAYDF6F.js";import"./createLucideIcon-Cf3TWMDy.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
