import{j as a}from"./iframe-BQE1_x2S.js";import{T as o,a as i,s as D}from"./Tag-DOGhWF3R.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-9CGiz-mA.js";import"./utils-Dj9XEpml.js";import"./clsx-B-dksMZM.js";import"./Hidden-BKKV1oQO.js";import"./useFocusRing-BSM-wn--.js";import"./index-By6nvHJX.js";import"./index-BXBrjF9u.js";import"./useLabels-BHPzjVNQ.js";import"./useButton-Dgp2fcZM.js";import"./Collection-MbJcbpn4.js";import"./index-2Aux9dvz.js";import"./ListBox-DoBgcqT-.js";import"./DragAndDrop-qXoo-BxQ.js";import"./getScrollParent-D0uFK7Qv.js";import"./scrollIntoView-CAs8Z7DL.js";import"./Separator-RihtYL7H.js";import"./SelectionManager-CX75Fhzi.js";import"./useEvent-B0PbKiGH.js";import"./SelectionIndicator-D39dEQtA.js";import"./useDescription-BhVxZGZD.js";import"./useControlledState-BOA36rtj.js";import"./ListKeyboardDelegate-BbMbOUjZ.js";import"./RSPContexts-CySpb_Tp.js";import"./Text-qOdU1hDP.js";import"./inertValue-DYxBj0m7.js";import"./useListState-CuiScvGr.js";import"./useHighlightSelectionDescription-b1NL6g_B.js";import"./useUpdateEffect-BH1QHKBS.js";import"./useLocalizedStringFormatter-Ba31SGL0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BclD3-10.js";import"./useField-45iak9F4.js";import"./clsx-Ciqy0D92.js";import"./Button-DtmjQOn1.js";import"./Button.module-CcWMkJAG.js";import"./x-COfEcpBf.js";import"./createLucideIcon-BWThs30e.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
