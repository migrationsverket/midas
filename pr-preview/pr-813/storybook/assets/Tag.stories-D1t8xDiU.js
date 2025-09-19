import{j as a}from"./iframe-_lRz8YFu.js";import{T as o,a as i,s as D}from"./Tag-DOzfK7ce.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-W_ikXVQB.js";import"./utils-BUmaUPeH.js";import"./clsx-B-dksMZM.js";import"./Hidden-Ds4lnupb.js";import"./useFocusRing-sAwqsfDC.js";import"./index-xW6Vd_PP.js";import"./index-CyglFFdH.js";import"./useLabels-BcYo1CVh.js";import"./useButton-CpO7hjdn.js";import"./Collection-C19nHrW7.js";import"./index-B0RpjRRR.js";import"./ListBox-DLLAbyF7.js";import"./DragAndDrop-C2e9FM-3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BDXklYB8.js";import"./SelectionManager-DaiRSpOb.js";import"./useEvent-zPAT1qr-.js";import"./FocusScope-CcqDJ-LX.js";import"./useDescription-BQuP6H2R.js";import"./useControlledState-CyXMqpQO.js";import"./ListKeyboardDelegate-WVUEsQ_r.js";import"./Text-w35hOI-7.js";import"./inertValue-S2-P1AD8.js";import"./useListState-BunlHBee.js";import"./useHighlightSelectionDescription-DBSvQLxs.js";import"./useUpdateEffect-CEvymFCB.js";import"./useLocalizedStringFormatter-BpggfE7y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CgNxOkhm.js";import"./useField-DXsj8dAW.js";import"./Button-CSo9cgjK.js";import"./Button.module-DRhvPh0f.js";import"./x-C-m0IpWp.js";import"./createLucideIcon-DcItXkQX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
