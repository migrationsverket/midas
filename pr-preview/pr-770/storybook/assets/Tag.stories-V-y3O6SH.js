import{j as a}from"./iframe-B4tPl1wR.js";import{T as o,a as i,s as _}from"./Tag-BIrahb7w.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Du06egnb.js";import"./utils-D2qQONNw.js";import"./clsx-B-dksMZM.js";import"./Hidden-CorVvZSb.js";import"./useFocusRing-BC6L3D4U.js";import"./index-CYTtKqW6.js";import"./index-CcN0Be5N.js";import"./useLabels-BI7BbafE.js";import"./useButton-Do0ILZ-6.js";import"./Collection-BrramftZ.js";import"./index-DyiptYvP.js";import"./ListBox-4eb8nenF.js";import"./DragAndDrop-DyhmDKBk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-XAFA2mB5.js";import"./SelectionManager-DELBl3N0.js";import"./useEvent-DRgpWYye.js";import"./FocusScope-C4wZ-9Nk.js";import"./useDescription-Bfi_9FVB.js";import"./useControlledState-RYB-iLQj.js";import"./ListKeyboardDelegate-DXmgAP0b.js";import"./Text-B7QaerfI.js";import"./inertValue-DiN37I6L.js";import"./useListState-BV4Jd03l.js";import"./useField-B4Hq85LF.js";import"./useHighlightSelectionDescription-CxB9lfbr.js";import"./useUpdateEffect-DdU4m2lD.js";import"./useLocalizedStringFormatter-Bnz6MSev.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DHIauxWW.js";import"./Button-BOjMet1u.js";import"./Button.module-CF2bVDCq.js";import"./x-DsxHvBCE.js";import"./createLucideIcon-DvfxC9_l.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
