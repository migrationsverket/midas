import{j as a}from"./iframe-DWeIVeph.js";import{T as o,a as i,s as D}from"./Tag-ByQ-4hro.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DjXyYGpa.js";import"./utils-DpZhcIRJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-OHKoEzO0.js";import"./useFocusRing-BrYzm1WE.js";import"./index-CLd4ePYI.js";import"./index-diFmr_MR.js";import"./useLabels-Ci2CHO-E.js";import"./useButton-XQafiRGF.js";import"./Collection-VA8nDJDW.js";import"./index-43OxD3gC.js";import"./ListBox-D5qaGheM.js";import"./DragAndDrop-B2ex9aLV.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-deA4lD6B.js";import"./SelectionManager-DsgAVjY_.js";import"./useEvent-NO9hY4Fn.js";import"./FocusScope-MRhTprq9.js";import"./useDescription-B1Mjxcra.js";import"./useControlledState-D6sP099n.js";import"./ListKeyboardDelegate-BgHri0Rv.js";import"./Text-BY7Usvs3.js";import"./inertValue-q4YHieAj.js";import"./useListState-HLaslcLS.js";import"./useHighlightSelectionDescription-Odx92jua.js";import"./useUpdateEffect-BY7Szxn_.js";import"./useLocalizedStringFormatter-rS1APecD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DpVKbzpv.js";import"./useField-CV1GfsN5.js";import"./Button-BMeoJ3Wx.js";import"./Button.module-DgYkWG2o.js";import"./x-Bi-DXXAO.js";import"./createLucideIcon-D-Bnqv-j.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
