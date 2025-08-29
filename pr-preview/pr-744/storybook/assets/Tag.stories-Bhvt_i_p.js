import{j as a}from"./iframe-DgUUoo4T.js";import{T as o,a as i,s as _}from"./Tag-Dt3kl0hk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CfaThaXB.js";import"./utils-CSUHdYcV.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dg1s9RhG.js";import"./useFocusRing-B4yI1PJW.js";import"./index-D2B3xfdm.js";import"./index-DiO0iGYb.js";import"./useLabels-9Z-pw4ee.js";import"./useButton-CzH63SGf.js";import"./Collection-z21gM2v5.js";import"./index-Cfrn2vWG.js";import"./ListBox-KG3fu6V-.js";import"./DragAndDrop-mfO-zykV.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DMZ7xpsp.js";import"./SelectionManager-DQHopoPG.js";import"./useEvent-90PpPRfr.js";import"./FocusScope-21IribJh.js";import"./useDescription-DwPVuWGZ.js";import"./useControlledState-mHNcrs-P.js";import"./ListKeyboardDelegate-BaimB7xH.js";import"./Text-0XenctL6.js";import"./inertValue-CdiUtWdR.js";import"./useListState-BzoWrvig.js";import"./useField-6MVRdGd2.js";import"./useHighlightSelectionDescription-CCyKU3DX.js";import"./useUpdateEffect-BhuAQdOh.js";import"./useLocalizedStringFormatter-CYsaLqdU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DwS4pFot.js";import"./Button-cnfrlHZK.js";import"./Button.module-CF2bVDCq.js";import"./x-C_u3oRsj.js";import"./createLucideIcon-DWDaj1ca.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
