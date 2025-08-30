import{j as a}from"./iframe-Cr-HqwO2.js";import{T as o,a as i,s as _}from"./Tag-B1UI4hGc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bgevckt5.js";import"./utils-DunCwgIN.js";import"./clsx-B-dksMZM.js";import"./Hidden-CCabII1s.js";import"./useFocusRing-BvU4KTmD.js";import"./index-BfXV4gGa.js";import"./index-Cj8P_h0C.js";import"./useLabels-B29PcoQb.js";import"./useButton-DK_BF2gl.js";import"./Collection-C3k1BNIq.js";import"./index-BPgwRSk5.js";import"./ListBox-D8b3F1Y2.js";import"./DragAndDrop-tns8CJP-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-FJHxyE32.js";import"./SelectionManager-9C2Cdiir.js";import"./useEvent-C3903aO2.js";import"./FocusScope-CJVGIz6A.js";import"./useDescription-DbW203nB.js";import"./useControlledState-CprlOB-c.js";import"./ListKeyboardDelegate-DCjhrAZ4.js";import"./Text-DEKdqfsr.js";import"./inertValue-B6btWTAC.js";import"./useListState-T7jV7RZd.js";import"./useField-CQ1pHz15.js";import"./useHighlightSelectionDescription-BXdWeumM.js";import"./useUpdateEffect-Cr9I7o1S.js";import"./useLocalizedStringFormatter-CC7fDEUR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BPmtUb0Q.js";import"./Button-CGa2Wy7h.js";import"./Button.module-CF2bVDCq.js";import"./x-xQRbJG35.js";import"./createLucideIcon-if3V4LDX.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
