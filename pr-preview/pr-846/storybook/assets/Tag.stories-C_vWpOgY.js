import{j as a}from"./iframe-C8eYRWKs.js";import{T as o,a as i,s as D}from"./Tag-CcRQOgNk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D6zCOfnb.js";import"./utils-Ba9bBHI9.js";import"./clsx-B-dksMZM.js";import"./Hidden-gG2uVh1c.js";import"./useFocusRing-CBWsyEyf.js";import"./index-CFFhRdE-.js";import"./index-DHjOkDSR.js";import"./useLabels-RW0m0ljz.js";import"./useButton-B3xsQ4dM.js";import"./Collection-rWWiEA9N.js";import"./index-Dbss5FRx.js";import"./ListBox-y3fT0-i7.js";import"./DragAndDrop-DDe9Rijq.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-1GNA7zh_.js";import"./SelectionManager-CmGFzbI_.js";import"./useEvent-BHc4jZRQ.js";import"./FocusScope-BAz_VatN.js";import"./useDescription-Bf1lDEqk.js";import"./useControlledState-DoZTVyYs.js";import"./context-B1_jWOzG.js";import"./Text-6pN2evHC.js";import"./inertValue-XTNnyBT3.js";import"./useListState-DzvIUhKH.js";import"./useHighlightSelectionDescription-8QyZg2-v.js";import"./useUpdateEffect-CtyLHAAT.js";import"./useLocalizedStringFormatter-CUXSsZvn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BsMy2R3M.js";import"./useField-DthPaKAT.js";import"./Button-mM_ouEW3.js";import"./Button.module-DRhvPh0f.js";import"./x-BLdsMFDV.js";import"./createLucideIcon-C-SrpETr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
