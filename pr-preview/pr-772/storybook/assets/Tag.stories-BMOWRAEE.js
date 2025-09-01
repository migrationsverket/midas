import{j as a}from"./iframe-a6T_oqXD.js";import{T as o,a as i,s as D}from"./Tag-Pevu8ngU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CF_9qHfr.js";import"./utils-3JRhMg6v.js";import"./clsx-B-dksMZM.js";import"./Hidden-DDaNTZ5x.js";import"./useFocusRing-D9UmzkvQ.js";import"./index-udwCI9Pl.js";import"./index-D2lsOTij.js";import"./useLabels-ClrvcWOH.js";import"./useButton-DBhLoHRp.js";import"./Collection-VBlmRWNR.js";import"./index-BQYhuc0k.js";import"./ListBox-B1jx-fUu.js";import"./DragAndDrop-CXcSmUJ3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BRiqCdR7.js";import"./SelectionManager-Cy8g9VEB.js";import"./useEvent-BKtueyb-.js";import"./FocusScope-Bqe3is0l.js";import"./useDescription-C2S07-0U.js";import"./useControlledState-VZ7Bh5gE.js";import"./ListKeyboardDelegate-CJXe-5T0.js";import"./Text-C2GHvdRv.js";import"./inertValue-L8Bd10Ev.js";import"./useListState-C9ezzVuh.js";import"./useHighlightSelectionDescription-DbWdbOkX.js";import"./useUpdateEffect-omy8YHuv.js";import"./useLocalizedStringFormatter-rFQB-ZdO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D28lo_Np.js";import"./useField-CvAnmG_Z.js";import"./Button-s5wz6aIz.js";import"./Button.module-CF2bVDCq.js";import"./x-EQqVegys.js";import"./createLucideIcon-CMRMaV3n.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
