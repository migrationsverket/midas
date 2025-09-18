import{j as a}from"./iframe-BFWUK625.js";import{T as o,a as i,s as D}from"./Tag-DvtBFjJ-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BONAnSTn.js";import"./utils-Brg-wHrw.js";import"./clsx-B-dksMZM.js";import"./Hidden-AmvCo4gI.js";import"./useFocusRing-CJar3c2A.js";import"./index-B75jU_X7.js";import"./index-Dra_gn4E.js";import"./useLabels-DBss7SBO.js";import"./useButton-Cifv2Bvt.js";import"./Collection-CWpATs1Z.js";import"./index-qB3F7btM.js";import"./ListBox-Ced3tYzO.js";import"./DragAndDrop-CTxFxa8M.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DEXl3vDQ.js";import"./SelectionManager-BogtSliE.js";import"./useEvent-KXEMIh3t.js";import"./FocusScope-B5gLx0Un.js";import"./useDescription-DwtNcvho.js";import"./useControlledState-CzQh1LEr.js";import"./ListKeyboardDelegate-Dk_IbTKd.js";import"./Text-B-okCbBe.js";import"./inertValue-DoH0Ct24.js";import"./useListState-CNBxRwjJ.js";import"./useHighlightSelectionDescription-CbvK1-eV.js";import"./useUpdateEffect-DAcr0akQ.js";import"./useLocalizedStringFormatter-Ba1EUQcz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D4W5ZW52.js";import"./useField-C-OMyNFf.js";import"./Button-CaVsQkFv.js";import"./Button.module-DRhvPh0f.js";import"./x-KIR2NjoA.js";import"./createLucideIcon-8pWnrCMq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
