import{j as a}from"./iframe-crlrIVsQ.js";import{T as o,a as i,s as D}from"./Tag-DerpPKtd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-F6FDEjlM.js";import"./utils-CKMuvOBF.js";import"./clsx-B-dksMZM.js";import"./Hidden-XjjImMeD.js";import"./useFocusRing-DUXbt4NF.js";import"./index-BK7zmcWb.js";import"./index-VzyU27QZ.js";import"./useLabels-BHuUBCgF.js";import"./useButton-BACsF3s-.js";import"./Collection-CNqnyRVx.js";import"./index-Bi4F9c6t.js";import"./ListBox-DlHoLmN6.js";import"./DragAndDrop-DEfXtUWF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B7EYXh2O.js";import"./SelectionManager-HmjfnzIe.js";import"./useEvent-BpDwHWa5.js";import"./FocusScope-BKzqu3lz.js";import"./useDescription-I1VEsQYb.js";import"./useControlledState-C7OvoNFo.js";import"./ListKeyboardDelegate-CWPPl1IS.js";import"./Text-C_JUCZT8.js";import"./inertValue-BFIfaT3W.js";import"./useListState-DDBRLDdt.js";import"./useHighlightSelectionDescription-cJVIGN2_.js";import"./useUpdateEffect-B5JybLrk.js";import"./useLocalizedStringFormatter-C8JhLBbY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DE7tNnkg.js";import"./useField-Cx-gezDH.js";import"./Button-B_8DsRtF.js";import"./Button.module-DRhvPh0f.js";import"./x-Da8VRJPV.js";import"./createLucideIcon-Do6SDQFc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
