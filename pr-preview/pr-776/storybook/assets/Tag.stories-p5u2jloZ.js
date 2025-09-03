import{j as a}from"./iframe-CwzS8m2C.js";import{T as o,a as i,s as D}from"./Tag-Cz3IfK7P.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-5JUiCgCI.js";import"./utils-IOiWX9wg.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dfn4CsM7.js";import"./useFocusRing-dRRpbavw.js";import"./index-D7OaZxr0.js";import"./index-cdL6jhNB.js";import"./useLabels-DvhVZXOT.js";import"./useButton-CEd3kBHw.js";import"./Collection-B6NRzMX8.js";import"./index-DXvRC8g0.js";import"./ListBox-Cjwum2Tr.js";import"./DragAndDrop-CIdSiyW3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B9ME_IUu.js";import"./SelectionManager-Bhe91yj-.js";import"./useEvent-BKiT64KO.js";import"./FocusScope-jo22FXvt.js";import"./useDescription-B7706CL8.js";import"./useControlledState-jk5dcHZC.js";import"./ListKeyboardDelegate-BJL8fISi.js";import"./Text-CSB3E464.js";import"./inertValue-DHm7HLSf.js";import"./useListState-B2M8anQk.js";import"./useHighlightSelectionDescription-D_iyaGVB.js";import"./useUpdateEffect-Cey76zik.js";import"./useLocalizedStringFormatter-AaLNClRV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C5BSRuxW.js";import"./useField-CTi-TIfF.js";import"./Button-BPEkmjCw.js";import"./Button.module-DWkXlqFG.js";import"./x-BJZycUT8.js";import"./createLucideIcon-CVPYiiso.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
