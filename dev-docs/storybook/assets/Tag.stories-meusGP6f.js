import{j as a}from"./iframe-BWPOx-Jt.js";import{T as o,a as i,s as D}from"./Tag-C334iL3C.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CxYOnaMV.js";import"./utils-YC9dNSxW.js";import"./clsx-B-dksMZM.js";import"./Hidden-NTK_ysp7.js";import"./useFocusRing-DBatYMKz.js";import"./index-CFQmPyTe.js";import"./index-DLS7hvaV.js";import"./useLabels-bm0A7JuF.js";import"./useButton-B5G9mTnP.js";import"./Collection-co_aTZm4.js";import"./index-B81C4A5n.js";import"./ListBox-CwpnSIVa.js";import"./DragAndDrop-C83HZICS.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DyUpiKMx.js";import"./SelectionManager-B3faZ9F3.js";import"./useEvent-CdwV2_y-.js";import"./FocusScope-DEs6W4Uy.js";import"./useDescription-3gvW5kZl.js";import"./useControlledState-Cwww_nOC.js";import"./ListKeyboardDelegate-CCupp3xu.js";import"./Text-BsnGlkv0.js";import"./inertValue-pwbckRE5.js";import"./useListState-81_wpXmr.js";import"./useHighlightSelectionDescription-CEB36BoX.js";import"./useUpdateEffect-C10ChMaS.js";import"./useLocalizedStringFormatter-URY1fSTo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CkZOn-1E.js";import"./useField-B-pZNdaf.js";import"./Button-Cfr2QKY1.js";import"./Button.module-BkTnSRp5.js";import"./x-_Yh4j0NG.js";import"./createLucideIcon-DVB7Rd3Y.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
