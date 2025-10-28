import{j as a}from"./iframe-DcyFuf9u.js";import{T as o,a as i,s as D}from"./Tag-BZZXIX9D.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D6PbPTK8.js";import"./utils-Dia2cPFB.js";import"./clsx-B-dksMZM.js";import"./Hidden-iMghgTJB.js";import"./useFocusRing-D-97Harl.js";import"./index-DV_aah6D.js";import"./index-eSGHIcjT.js";import"./useLabels-Cy7OHgPR.js";import"./useButton-BZPs6Qrk.js";import"./Collection-BoO4itjp.js";import"./index-CY_OTIyz.js";import"./ListBox-B5zeAN-R.js";import"./DragAndDrop-g-VrlTEU.js";import"./getScrollParent-myYEZq9h.js";import"./scrollIntoView-Cy51z1Q1.js";import"./Separator-CuRQr308.js";import"./SelectionManager-DAq2DFkQ.js";import"./useEvent-ClL0NP5G.js";import"./SelectionIndicator-DvLDInrE.js";import"./useDescription-BH0CpnLr.js";import"./useControlledState-BGMpK9Nc.js";import"./ListKeyboardDelegate-YfUy6wVX.js";import"./RSPContexts-BoPpi6sb.js";import"./Text-Bs387_mT.js";import"./inertValue-DMgxweod.js";import"./useListState-hr_HmQvv.js";import"./useHighlightSelectionDescription-B-wbRz58.js";import"./useUpdateEffect-C6Z_eCvn.js";import"./useLocalizedStringFormatter-BxKjduFy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DtrLxq-5.js";import"./useField-BfYKY04T.js";import"./clsx-Ciqy0D92.js";import"./Button-L-5a289J.js";import"./Button.module-CcWMkJAG.js";import"./x-PaM6QQEB.js";import"./createLucideIcon-DB197HVc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
