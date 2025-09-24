import{j as a}from"./iframe-ClwCrMCh.js";import{T as o,a as i,s as D}from"./Tag-prqts_xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B3cip3Jz.js";import"./utils-VSbBK2zM.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwKZ8Q62.js";import"./useFocusRing-BTHwzkbZ.js";import"./index-B9pL1clj.js";import"./index-CfSoyt6A.js";import"./useLabels-CuKI6rRu.js";import"./useButton-B5yp-EEv.js";import"./Collection-nmyIvCAc.js";import"./index-DvTJ1Buw.js";import"./ListBox-lheEyKD8.js";import"./DragAndDrop-D1jTigOZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DXpOCI_O.js";import"./SelectionManager-CSxxKIJC.js";import"./useEvent-BwlyTvI1.js";import"./FocusScope-D0p23-rG.js";import"./useDescription-BUH_WvtX.js";import"./useControlledState-CQZBHuFz.js";import"./ListKeyboardDelegate-a6QwTknO.js";import"./Text-DlIE_kgH.js";import"./inertValue-DWWFPr5y.js";import"./useListState-D10-EtjW.js";import"./useHighlightSelectionDescription-CjG09q7Q.js";import"./useUpdateEffect-CnABPAMC.js";import"./useLocalizedStringFormatter-DPMBJlWy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DE50saGj.js";import"./useField-CNMnXxDZ.js";import"./Button-VAjavxJL.js";import"./Button.module-DRhvPh0f.js";import"./x-D7SFdfPJ.js";import"./createLucideIcon-QXatZoBu.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
