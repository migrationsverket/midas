import{j as a}from"./iframe-CpIPHAIU.js";import{T as o,a as i,s as D}from"./Tag-CVxAwrUD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-XdyfkBS7.js";import"./utils-DFBwCEiC.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dc8H1AK1.js";import"./useFocusRing-DjrtWtxV.js";import"./index-3Og8xjZK.js";import"./index-DwTuLalI.js";import"./useLabels-DbOoN3Q2.js";import"./useButton-goGDD37W.js";import"./Collection-C_aaHZJ-.js";import"./index-CeHXzLYG.js";import"./ListBox-BBxYH_mm.js";import"./DragAndDrop-CNmwfSHj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DqfZl2f1.js";import"./SelectionManager-BTWht6u6.js";import"./useEvent-BgyDv3DN.js";import"./FocusScope-D5494rFI.js";import"./useDescription-CBTeeArW.js";import"./useControlledState-hBz71Nvk.js";import"./ListKeyboardDelegate-CPMLkeYa.js";import"./Text-BTlNKB2Q.js";import"./inertValue-L9fVhR7r.js";import"./useListState-DUQomrRW.js";import"./useField-BMWFP3tG.js";import"./useHighlightSelectionDescription-CxMIBQIL.js";import"./useUpdateEffect-8DC9m0ad.js";import"./useLocalizedStringFormatter-DIT8mwtd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B-O9UPng.js";import"./Button-DDGGPoHE.js";import"./Button.module-CF2bVDCq.js";import"./x-Blure7K5.js";import"./createLucideIcon-CecMBFaF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
