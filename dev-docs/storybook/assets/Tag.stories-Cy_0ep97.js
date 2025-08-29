import{j as a}from"./iframe-CTL4r7_b.js";import{T as o,a as i,s as _}from"./Tag-DuJ9v5Su.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BfymJqjF.js";import"./utils-BTDv0sf-.js";import"./clsx-B-dksMZM.js";import"./Hidden-bJoJypaE.js";import"./useFocusRing-CH0ORiIx.js";import"./index-CIbrClOO.js";import"./index-DEMpS_QV.js";import"./useLabels-BlYOAd12.js";import"./useButton-6WKLglwY.js";import"./Collection-BR_fRKsV.js";import"./index-CkzwM3Z9.js";import"./ListBox-sIKdU5An.js";import"./DragAndDrop-CtnuzlsE.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-QYKXvxGT.js";import"./SelectionManager-DFmE5oYq.js";import"./useEvent-C848nLe6.js";import"./FocusScope-5bP6Lag-.js";import"./useDescription-Dpc4OW8j.js";import"./useControlledState-Bb-l3oKD.js";import"./ListKeyboardDelegate-hr0X9aK6.js";import"./Text-WSbInOZT.js";import"./inertValue-CtHc_oK6.js";import"./useListState-CKrPGKX0.js";import"./useField-C8A4oUHx.js";import"./useHighlightSelectionDescription-D5yeSq0j.js";import"./useUpdateEffect-Dc7jAOoh.js";import"./useLocalizedStringFormatter-B9gIXrmE.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BWmBZ5Ez.js";import"./Button-lPZrtwZu.js";import"./Button.module-CF2bVDCq.js";import"./x-CcX0oAd4.js";import"./createLucideIcon-DMacB6LC.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
