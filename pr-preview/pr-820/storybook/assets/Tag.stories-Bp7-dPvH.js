import{j as a}from"./iframe-DR_kK9Cg.js";import{T as o,a as i,s as D}from"./Tag-Dg8EHFOP.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CnUbMn85.js";import"./utils-DLRouJf4.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cs5uIpgP.js";import"./useFocusRing-CEvuj93z.js";import"./index-DWZuCpOn.js";import"./index-D7aTveDw.js";import"./useLabels-DoP5dxDy.js";import"./useButton-BYQAQrwn.js";import"./Collection-Dkj2DWnc.js";import"./index-Dft9EgRy.js";import"./ListBox-Bc8OI0Tb.js";import"./DragAndDrop-CGQZgNCu.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Bly2QJ6z.js";import"./SelectionManager-CUZgpx6w.js";import"./useEvent-O9famMAV.js";import"./FocusScope-B0UiIo32.js";import"./useDescription-6xfEjRv2.js";import"./useControlledState-BhA46bjE.js";import"./ListKeyboardDelegate-CATd-T--.js";import"./Text-D-dwn-t5.js";import"./inertValue-C0VyHb_m.js";import"./useListState-DVMCqDMd.js";import"./useHighlightSelectionDescription-BWctMHna.js";import"./useUpdateEffect-Bzl6AC3o.js";import"./useLocalizedStringFormatter-OM6v2DqJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CYVxm2b1.js";import"./useField-DUxVTCFc.js";import"./Button-CY6ysksa.js";import"./Button.module-DRhvPh0f.js";import"./x-BzAYrKXy.js";import"./createLucideIcon-Cn7oDdhF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
