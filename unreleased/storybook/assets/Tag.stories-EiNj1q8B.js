import{j as a}from"./iframe-C-JwkB8C.js";import{T as o,a as i,s as D}from"./Tag-C4oMoMH6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-skDYBiDx.js";import"./utils-DLFknj4S.js";import"./clsx-B-dksMZM.js";import"./Hidden-DGfm138I.js";import"./useFocusRing-BaxPXSy9.js";import"./index-XflWq0rN.js";import"./index-LQRRWEmL.js";import"./useLabels-DSlIIaGQ.js";import"./useButton-CtdciTc2.js";import"./Collection-C2MwZC2l.js";import"./index-Dd43UhKs.js";import"./ListBox-DrEvem9v.js";import"./DragAndDrop-TdHEirTm.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CxslGeyq.js";import"./SelectionManager-BxbTqxXO.js";import"./useEvent-C6G5OZKK.js";import"./FocusScope-DTK1CmKK.js";import"./useDescription-XW0CL71n.js";import"./useControlledState-noK_bT9f.js";import"./context-Q0duwzki.js";import"./Text-BnCnQqRm.js";import"./inertValue-CwSUCpaM.js";import"./useListState-De-mQBxo.js";import"./useHighlightSelectionDescription-vLH5KmBL.js";import"./useUpdateEffect-Sd5RAhvL.js";import"./useLocalizedStringFormatter-BnYaVGF7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-nBevYB2z.js";import"./useField-CJb9nn1V.js";import"./Button-DvqBsoC1.js";import"./Button.module-DRhvPh0f.js";import"./x-8HyyZ3SU.js";import"./createLucideIcon-DUaBOFhf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
