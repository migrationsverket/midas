import{j as a}from"./iframe-ByXITAR6.js";import{T as o,a as i,s as D}from"./Tag-FRtaeroL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CB59GHT1.js";import"./utils-D1Iz_sGU.js";import"./clsx-B-dksMZM.js";import"./Hidden-DK38GnWF.js";import"./useFocusRing-DCaf1N-5.js";import"./index-D2QPoSuO.js";import"./index-YEkjdco4.js";import"./useLabels-Bx28a0pw.js";import"./useButton-DuW5PgQG.js";import"./Collection-Dr_kZumB.js";import"./index-BARHehnK.js";import"./ListBox-PSL0FEeD.js";import"./DragAndDrop-Ds8WYoLK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-4dPx9U-W.js";import"./SelectionManager-DXJRtYjZ.js";import"./useEvent-BXBhk7Ms.js";import"./FocusScope-CXmZYlpT.js";import"./useDescription-DynR-RZu.js";import"./useControlledState-CMNN2Kd9.js";import"./ListKeyboardDelegate-vP7aWkW5.js";import"./Text-VL-RFPJB.js";import"./inertValue-CbA_6_jk.js";import"./useListState-D1QEIMSv.js";import"./useHighlightSelectionDescription-CcaUa1__.js";import"./useUpdateEffect-yYOpjBfD.js";import"./useLocalizedStringFormatter-CdCZ10QW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-PklB8_N-.js";import"./useField-DJVlL9WR.js";import"./Button-BiYW4yQU.js";import"./Button.module-DRhvPh0f.js";import"./x-DZt6mJWH.js";import"./createLucideIcon-N0rfLJ1l.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
