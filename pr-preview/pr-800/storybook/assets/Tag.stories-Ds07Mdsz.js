import{j as a}from"./iframe-CAvVc_IC.js";import{T as o,a as i,s as D}from"./Tag-DISVXY7w.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cxq2HaPj.js";import"./utils-CWFeFJ0_.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_kS6b7l.js";import"./useFocusRing-DUaqGxPK.js";import"./index-DH357gdo.js";import"./index-CfAwoNHB.js";import"./useLabels-CMfJIBTF.js";import"./useButton-DFks96e5.js";import"./Collection-CGWDLeM-.js";import"./index-CIiAYzwt.js";import"./ListBox-HJygICmV.js";import"./DragAndDrop-BPRf-Ft1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C7lQxreN.js";import"./SelectionManager-DM-kliGL.js";import"./useEvent-BxH0nKIT.js";import"./FocusScope-C8KaGDIn.js";import"./useDescription-DGokbRMp.js";import"./useControlledState-Um831eMi.js";import"./ListKeyboardDelegate-kpPlHEM9.js";import"./Text-CRxShYXI.js";import"./inertValue--oHxnpXL.js";import"./useListState-BET3ddLf.js";import"./useHighlightSelectionDescription-DTnTMiW5.js";import"./useUpdateEffect-DR6O_aMN.js";import"./useLocalizedStringFormatter-O0Pt4NhT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-rJgnjVfX.js";import"./useField-CFgMTq7a.js";import"./Button-BCUZwIJm.js";import"./Button.module-DRhvPh0f.js";import"./x-BS8jF5UB.js";import"./createLucideIcon-BhNK69GC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
