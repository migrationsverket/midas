import{j as a}from"./iframe-DEKOUU8k.js";import{T as o,a as i,s as D}from"./Tag-eNZZ98hz.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DroBRk8h.js";import"./utils-BksSIjfn.js";import"./clsx-B-dksMZM.js";import"./Hidden-b14-4qzn.js";import"./useFocusRing-BjMf-8m2.js";import"./index-Ca1SZadx.js";import"./index-BKqI4NdY.js";import"./useLabels-DOBtPN0D.js";import"./useButton-CxUATmRD.js";import"./Collection-BVGCucDa.js";import"./index-DPdddLjd.js";import"./ListBox-BMX2T-_b.js";import"./DragAndDrop-IyPH1pMC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C10Q-49L.js";import"./SelectionManager-CW90qV2Q.js";import"./useEvent-BV35s3Iy.js";import"./FocusScope-DK9Ej_Dh.js";import"./useDescription-B06oh3XJ.js";import"./useControlledState-DGrUdstW.js";import"./ListKeyboardDelegate-D9euLFy5.js";import"./Text-Wmoj8ver.js";import"./inertValue-0NytaxRE.js";import"./useListState-CEeEzZMo.js";import"./useHighlightSelectionDescription-BZ6GIqiq.js";import"./useUpdateEffect-50iKJK4Q.js";import"./useLocalizedStringFormatter-BU4ow1fK.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D9Eb5SrC.js";import"./useField-Byt8qrDd.js";import"./Button-BHeuYd2y.js";import"./Button.module-GuOSDIYz.js";import"./x-BoHFg0h-.js";import"./createLucideIcon-BP4CF5pf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
