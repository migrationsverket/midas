import{j as a}from"./iframe-BBpTncPr.js";import{T as o,a as i,s as D}from"./Tag-CToGXEp-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BBa6ZlC7.js";import"./utils-Ddob-MgF.js";import"./clsx-B-dksMZM.js";import"./Hidden-DtO3EHyG.js";import"./useFocusRing-C9U_xTRq.js";import"./index-uXaYGI9U.js";import"./index-YLrnuuNB.js";import"./useLabels-DwdYcKhE.js";import"./useButton-C3yq4NJO.js";import"./Collection-C0DJ1Qf3.js";import"./index-CeBKnv9W.js";import"./ListBox-Dw6v2nXX.js";import"./DragAndDrop-Cu15OIMO.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dvmwverl.js";import"./SelectionManager-B0EdpGsS.js";import"./useEvent-COyopsLg.js";import"./FocusScope-DE8B9TWJ.js";import"./useDescription-8EJ_Tw52.js";import"./useControlledState-bXJVhrNb.js";import"./ListKeyboardDelegate-D7E4Wub0.js";import"./Text-Cboo7IC7.js";import"./inertValue-DRju0VMZ.js";import"./useListState-BigpWyCY.js";import"./useHighlightSelectionDescription-CK2MsQC_.js";import"./useUpdateEffect-DJ8b5xhd.js";import"./useLocalizedStringFormatter-Dg3MNjhx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DC98NS4_.js";import"./useField-C7fEHmCg.js";import"./Button-DY0bczag.js";import"./Button.module-DRhvPh0f.js";import"./x-DzjQYogj.js";import"./createLucideIcon-8lExFGPu.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
