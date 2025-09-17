import{j as a}from"./iframe-dLhn8haa.js";import{T as o,a as i,s as D}from"./Tag-CAtx9KDe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-R-W_TxSW.js";import"./utils-CdPDuU9h.js";import"./clsx-B-dksMZM.js";import"./Hidden-DrNMbQrJ.js";import"./useFocusRing-DqHewW9h.js";import"./index-C5HyGUKx.js";import"./index-B4nifaJ-.js";import"./useLabels-CougkJ5D.js";import"./useButton-CjQ1OPWT.js";import"./Collection-EsEvJ3Ye.js";import"./index-WOFO2LH4.js";import"./ListBox-D1SOV6g_.js";import"./DragAndDrop-CPwYnllE.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-cmnZNN2j.js";import"./SelectionManager-BxCJYLFV.js";import"./useEvent-z46_rxaY.js";import"./FocusScope-C5g0w296.js";import"./useDescription-BjGy5o0E.js";import"./useControlledState-D3aMUzl-.js";import"./ListKeyboardDelegate-D_qsLFJa.js";import"./Text-BAT3NomV.js";import"./inertValue-D6x8QYtc.js";import"./useListState-CBgnMDu4.js";import"./useHighlightSelectionDescription-DVfFd7IH.js";import"./useUpdateEffect-DnMm6lEb.js";import"./useLocalizedStringFormatter-BLuZAhtX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BZdmPNAt.js";import"./useField-DDVqU_56.js";import"./Button-Cd_IHc8e.js";import"./Button.module-DRhvPh0f.js";import"./x-Agr58GsP.js";import"./createLucideIcon-OeyHrksp.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
