import{j as a}from"./iframe-C8jmHyHw.js";import{T as o,a as i,s as D}from"./Tag-Dk11LrHq.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-2gmZbYwI.js";import"./utils-1TRItCzw.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxTpBUXB.js";import"./useFocusRing-B9FR-SR_.js";import"./index-DGMmncya.js";import"./index-BAdHPd1h.js";import"./useLabels-Tvhj2ooU.js";import"./useButton-CZ9RCKLc.js";import"./Collection-CQCtrIRl.js";import"./index-BDWwfPmD.js";import"./ListBox-17HbJNMZ.js";import"./DragAndDrop-BMKL_NGs.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D2N5e8kW.js";import"./SelectionManager-BlgDLiK2.js";import"./useEvent-CEdnxDbp.js";import"./FocusScope-CwYSOVmg.js";import"./useDescription-DwCBa7Xf.js";import"./useControlledState-ChVgg0mf.js";import"./ListKeyboardDelegate-NPF5jpnV.js";import"./Text-Cd6LKnUV.js";import"./inertValue-FnjFyZ94.js";import"./useListState-Di1MxvIk.js";import"./useHighlightSelectionDescription-TVi82y0F.js";import"./useUpdateEffect-B-U_mm6G.js";import"./useLocalizedStringFormatter-C9GRevfG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BPdIxid_.js";import"./useField-BQXrq7Ml.js";import"./Button-C692PS25.js";import"./Button.module-DRhvPh0f.js";import"./x-EQOB7IBd.js";import"./createLucideIcon-PbjLv6Y9.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
