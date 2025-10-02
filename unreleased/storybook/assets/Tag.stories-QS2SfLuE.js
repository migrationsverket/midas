import{j as a}from"./iframe-C251NieE.js";import{T as o,a as i,s as D}from"./Tag-BGYnp6bt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bo0HTgzh.js";import"./utils-fMj190VI.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlfgqAT4.js";import"./useFocusRing-BlphGu6m.js";import"./index-Cer21jz6.js";import"./index-DdIqy8fq.js";import"./useLabels-BRfFSWGv.js";import"./useButton-DhnpG5cC.js";import"./Collection-DsqiEiM0.js";import"./index-COH_uWXS.js";import"./ListBox-CoqFLHq5.js";import"./DragAndDrop-B07xgw69.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DtMkpjko.js";import"./SelectionManager-CzDE3VxV.js";import"./useEvent-CQ1Mdfny.js";import"./FocusScope-CxIcDM8e.js";import"./useDescription-BvFgc1GV.js";import"./useControlledState-DcN5d6xE.js";import"./context-Cp1i6iK-.js";import"./Text-CkLDZShR.js";import"./inertValue-B41IODbK.js";import"./useListState-CqUFRBT2.js";import"./useHighlightSelectionDescription-DECYbXBl.js";import"./useUpdateEffect-D15xSBp5.js";import"./useLocalizedStringFormatter-Mr-SiDM6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B_w64UHO.js";import"./useField-CuBLXJQ5.js";import"./clsx-Ciqy0D92.js";import"./Button-D-pxzxs-.js";import"./Button.module-DRhvPh0f.js";import"./x-DCeJ5o-V.js";import"./createLucideIcon-BFbaoavE.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
