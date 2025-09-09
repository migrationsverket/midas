import{j as a}from"./iframe-CF8NSoMg.js";import{T as o,a as i,s as D}from"./Tag-qjRxlE7G.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DxB1trTe.js";import"./utils-DXxMpZrY.js";import"./clsx-B-dksMZM.js";import"./Hidden-CYBwSpyF.js";import"./useFocusRing-w2Vwm9Ha.js";import"./index-By5I7u-u.js";import"./index-BAi9aBeU.js";import"./useLabels-DXk3hEZO.js";import"./useButton-B0tnnNP-.js";import"./Collection-C9Z0fQaY.js";import"./index-CjVikPS-.js";import"./ListBox-BplGA0sP.js";import"./DragAndDrop-C4ZB9wYE.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cyhtiz1q.js";import"./SelectionManager-D0p45fwW.js";import"./useEvent-XFQmfvWf.js";import"./FocusScope-CcV9dPLj.js";import"./useDescription-NB9RbfOu.js";import"./useControlledState-D8ynvHan.js";import"./ListKeyboardDelegate-D71by0Cl.js";import"./Text-B6qmPVEy.js";import"./inertValue-8d7wwLN3.js";import"./useListState-BNdhzNdj.js";import"./useHighlightSelectionDescription-D4Vd1uns.js";import"./useUpdateEffect-DwlRX27x.js";import"./useLocalizedStringFormatter-CgQrWDXI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B7N5NAT3.js";import"./useField-CuzoWvdX.js";import"./Button-CrIUuTAK.js";import"./Button.module-BkTnSRp5.js";import"./x-CA6CIkcD.js";import"./createLucideIcon-Cw1MX5VV.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
