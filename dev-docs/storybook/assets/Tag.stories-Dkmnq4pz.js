import{j as a}from"./iframe-15uHx6jG.js";import{T as o,a as i,s as D}from"./Tag-DMzKLA0d.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BQU4byHL.js";import"./utils-G0NazBgU.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bo96X54I.js";import"./useFocusRing-DqZTxRPt.js";import"./index-B0iXMVmW.js";import"./index-Cpykslap.js";import"./useLabels-DyztXmTo.js";import"./useButton-Cdqk7B7Z.js";import"./Collection-CSPVpcm8.js";import"./index-U-DescLT.js";import"./ListBox-Cr405nvq.js";import"./DragAndDrop-s_H-nvmN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BEXvYr4T.js";import"./SelectionManager-BH2TngR9.js";import"./useEvent-DDx_sdhm.js";import"./FocusScope-7suesREs.js";import"./useDescription-Dl3Irc7y.js";import"./useControlledState-BhULkshX.js";import"./ListKeyboardDelegate-PHymW5Dd.js";import"./Text-Brn77Wkl.js";import"./inertValue-BruhlNov.js";import"./useListState-DB_V4HSV.js";import"./useHighlightSelectionDescription-DyU8lIBp.js";import"./useUpdateEffect-BHTPNvf8.js";import"./useLocalizedStringFormatter-Dw6YaPHd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DaCce8OC.js";import"./useField-Dd6Nd37e.js";import"./Button-eCQBM9xW.js";import"./Button.module-GuOSDIYz.js";import"./x-CNuFKPAi.js";import"./createLucideIcon-BrDQsNMZ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
