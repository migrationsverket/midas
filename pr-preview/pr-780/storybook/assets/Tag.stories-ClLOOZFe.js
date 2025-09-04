import{j as a}from"./iframe-Brw6tsIJ.js";import{T as o,a as i,s as D}from"./Tag-CddYIF5Z.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BgDR-S3C.js";import"./utils-Bvz2iZGB.js";import"./clsx-B-dksMZM.js";import"./Hidden-7rsLDPHs.js";import"./useFocusRing-CYX_qWsm.js";import"./index-BbxebM3I.js";import"./index-BR8oKHRk.js";import"./useLabels-DooHqkzg.js";import"./useButton-B7qomZAK.js";import"./Collection-CKLvBHyi.js";import"./index-BKMaJt_O.js";import"./ListBox-DiL_b4G9.js";import"./DragAndDrop-UKtqXNfe.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cosu0uxc.js";import"./SelectionManager-gEvc8kgS.js";import"./useEvent-Dc9rFbz-.js";import"./FocusScope-C01-XLFD.js";import"./useDescription-BIhPNaYQ.js";import"./useControlledState-Bmkg3wLB.js";import"./ListKeyboardDelegate-CwRO4Nui.js";import"./Text-C6C9IJDR.js";import"./inertValue-HgIswYss.js";import"./useListState-XrqADz0u.js";import"./useHighlightSelectionDescription-CEWRqzee.js";import"./useUpdateEffect-3BA1e2ml.js";import"./useLocalizedStringFormatter-ew4jiiFZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CdlfUWb-.js";import"./useField-rMpuwDY1.js";import"./Button-DcZbgQFz.js";import"./Button.module-CF2bVDCq.js";import"./x-CzfS78Iy.js";import"./createLucideIcon-BCsrHOl6.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
