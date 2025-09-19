import{j as a}from"./iframe-Dew0X5GW.js";import{T as o,a as i,s as D}from"./Tag-Bz0AdXAX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CDsvEn-m.js";import"./utils-QgBipOtY.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cj1vBnWF.js";import"./useFocusRing-Bp_g748W.js";import"./index-DEKYPxVK.js";import"./index-BisWvth1.js";import"./useLabels-BWDAOYhm.js";import"./useButton-CZSKwDjk.js";import"./Collection-DtI-DKL9.js";import"./index-BrbEPDVz.js";import"./ListBox-BUALrkY2.js";import"./DragAndDrop-BRXceK14.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C_rBUels.js";import"./SelectionManager-CXZO9H5S.js";import"./useEvent-y-SxBjge.js";import"./FocusScope-EF_BVbhI.js";import"./useDescription-BpHjjcjC.js";import"./useControlledState-BRKvUaO2.js";import"./ListKeyboardDelegate-JMbxKDn4.js";import"./Text-BMY_b1LF.js";import"./inertValue-DXbpIykM.js";import"./useListState-BqtovQ4u.js";import"./useHighlightSelectionDescription-mm6p08O6.js";import"./useUpdateEffect-BAec1z2T.js";import"./useLocalizedStringFormatter-Gc1JxRY6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BAXU2PgE.js";import"./useField-JLR8gzLq.js";import"./Button-lIqQd5hE.js";import"./Button.module-DRhvPh0f.js";import"./x-DOYjD1g1.js";import"./createLucideIcon-C7-xn1kL.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
