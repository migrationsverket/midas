import{j as a}from"./iframe-aF6mY0Oe.js";import{T as o,a as i,s as D}from"./Tag-ieJu0DZt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-noFY4LdH.js";import"./utils-DFGqrSyb.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOvaJRpp.js";import"./useFocusRing-DTrz9-fw.js";import"./index-CJnx68Py.js";import"./index-CYUfkFFc.js";import"./useLabels-CtjGmi0R.js";import"./useButton-CuA0O0WY.js";import"./Collection-BefO4J0o.js";import"./index-Btx4IIFJ.js";import"./ListBox-CPUaKFxh.js";import"./DragAndDrop-SDu85eiv.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bw5eeKBU.js";import"./SelectionManager-Bc20nag2.js";import"./useEvent-B0iLOBoa.js";import"./FocusScope-ClxgOVGV.js";import"./useDescription-DELoPoZW.js";import"./useControlledState-CbLsySA0.js";import"./ListKeyboardDelegate-DuR3D7TM.js";import"./Text-BMiV8L2y.js";import"./inertValue-DqvMgLKs.js";import"./useListState-BZexvQ_T.js";import"./useHighlightSelectionDescription-BVeMvasy.js";import"./useUpdateEffect-aF76pqAr.js";import"./useLocalizedStringFormatter-C3j_GnGG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CwXADRoA.js";import"./useField-CVAtE2pC.js";import"./Button-BJYOnwGY.js";import"./Button.module-DRhvPh0f.js";import"./x-SfgJHpF-.js";import"./createLucideIcon-CGb0x05u.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
