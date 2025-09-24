import{j as a}from"./iframe-BVm5Zgww.js";import{T as o,a as i,s as D}from"./Tag-C3FPbzfe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B8o3zlbo.js";import"./utils-Cye8wXZQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cg_pjexJ.js";import"./useFocusRing-BkFD-WT_.js";import"./index-kjfIl-2V.js";import"./index-DZQARVYQ.js";import"./useLabels-DHXTpHAB.js";import"./useButton-BU97PgDX.js";import"./Collection-B53wRBGW.js";import"./index-7ziz68pV.js";import"./ListBox-CKQPgtFS.js";import"./DragAndDrop-CoiwY8As.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-fQ0psnzz.js";import"./SelectionManager-DD0DtCGx.js";import"./useEvent-CZDskiWQ.js";import"./FocusScope-D94Y-rnh.js";import"./useDescription-B0xoPtiO.js";import"./useControlledState-CCTlE_sZ.js";import"./ListKeyboardDelegate-IUn2n1jS.js";import"./Text-DICXZUMB.js";import"./inertValue-BMqwXlCC.js";import"./useListState-Cw8ZUVrl.js";import"./useHighlightSelectionDescription-D9VdD7d6.js";import"./useUpdateEffect-B5deMEGY.js";import"./useLocalizedStringFormatter-BeFRrNIe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BpBUHHBQ.js";import"./useField-DWkpQAgY.js";import"./Button-DqKhausU.js";import"./Button.module-DRhvPh0f.js";import"./x-CkHCN122.js";import"./createLucideIcon-DewsBgYq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
