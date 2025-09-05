import{j as a}from"./iframe-esvdJFfr.js";import{T as o,a as i,s as D}from"./Tag-BxoA5PQ0.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DhAk4_Yc.js";import"./utils-CA6cvJcn.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bqx_ujhi.js";import"./useFocusRing-VPnEXuzQ.js";import"./index-Dor75QZH.js";import"./index-w_P7rb89.js";import"./useLabels-DQgkfLF4.js";import"./useButton-CupiQMID.js";import"./Collection-Dsustuye.js";import"./index-BM8AdnR0.js";import"./ListBox-DrCK-vmo.js";import"./DragAndDrop-BtpZy0FW.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cl0zSfmO.js";import"./SelectionManager-mcBb6mrg.js";import"./useEvent-uMfP9ZnP.js";import"./FocusScope-UstPQ-Kp.js";import"./useDescription-DOawyMZ9.js";import"./useControlledState-D2MlztED.js";import"./ListKeyboardDelegate-CUtP8j2L.js";import"./Text-C5kAi3KT.js";import"./inertValue-Df2OJuNj.js";import"./useListState-Cb-5SUR7.js";import"./useHighlightSelectionDescription-DCFUqbB8.js";import"./useUpdateEffect-DpQN22SR.js";import"./useLocalizedStringFormatter-DsuYda5r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-wyQ0MftN.js";import"./useField-Dx8Fw3cP.js";import"./Button-DMBclqbI.js";import"./Button.module-DgYkWG2o.js";import"./x-D44o35Sp.js";import"./createLucideIcon-nwVrMw5a.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
