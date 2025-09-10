import{j as a}from"./iframe-CZ5bDSaQ.js";import{T as o,a as i,s as D}from"./Tag-CoNDDA9U.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D2X5DXFX.js";import"./utils-Czfai--t.js";import"./clsx-B-dksMZM.js";import"./Hidden-DNuoOSE0.js";import"./useFocusRing-DYpOuvDT.js";import"./index-BMAPYNS6.js";import"./index-CTfyq5ur.js";import"./useLabels-CaABZ7Bt.js";import"./useButton-BEPvHTVx.js";import"./Collection-CCAIWdtv.js";import"./index-Dl5uzFUP.js";import"./ListBox-Bt0CjntY.js";import"./DragAndDrop-BGmvRjko.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-k4R3X4tJ.js";import"./SelectionManager-4ZrKzacc.js";import"./useEvent-DkYxwum_.js";import"./FocusScope-j8SDO1ae.js";import"./useDescription-BH9iGjS3.js";import"./useControlledState-C_zKl2Ib.js";import"./ListKeyboardDelegate-BP5UPWIr.js";import"./Text-D8SMh6Gg.js";import"./inertValue-C7QBUaMx.js";import"./useListState-Bfjf_sRj.js";import"./useHighlightSelectionDescription-C_o9lnYK.js";import"./useUpdateEffect-B0ecAxuy.js";import"./useLocalizedStringFormatter-CempFJC2.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CNS1b7kx.js";import"./useField-BxT03_a1.js";import"./Button-Cu5-wphl.js";import"./Button.module-GuOSDIYz.js";import"./x-BtpuSG-t.js";import"./createLucideIcon-BC5XrflQ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
