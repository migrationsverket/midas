import{j as a}from"./iframe-Fl_BsjrG.js";import{T as o,a as i,s as _}from"./Tag-S9d-50WX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bdov08rV.js";import"./utils-BrHRahVf.js";import"./clsx-B-dksMZM.js";import"./Hidden-BkBuru2Y.js";import"./useFocusRing-DYdW2VFR.js";import"./index-CkFKq3jr.js";import"./index-tuhqkb4G.js";import"./useLabels-B5skQI7a.js";import"./useButton-B_vEwI5C.js";import"./Collection-DTKD83D6.js";import"./index-DWwgF7t_.js";import"./ListBox-DDPFaSUX.js";import"./DragAndDrop-BWy9XGwv.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cs5tIHeH.js";import"./SelectionManager-DUnM369Y.js";import"./useEvent-Bkts_nWB.js";import"./FocusScope-XL_pJlfp.js";import"./useDescription-DGXrC1gQ.js";import"./useControlledState-Awo6lhLf.js";import"./ListKeyboardDelegate-B3bL0Ozr.js";import"./Text-B8SLTmRI.js";import"./inertValue-C3vsjVBV.js";import"./useListState-BDo26vJY.js";import"./useField-CdNAY7L5.js";import"./useHighlightSelectionDescription-Dxl87klZ.js";import"./useUpdateEffect-DjjNXAWU.js";import"./useLocalizedStringFormatter-CJfvcTm2.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BWRTnP2k.js";import"./Button-CnjGMK4n.js";import"./Button.module-CF2bVDCq.js";import"./x-CY2NNW4j.js";import"./createLucideIcon-BQImOslD.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
