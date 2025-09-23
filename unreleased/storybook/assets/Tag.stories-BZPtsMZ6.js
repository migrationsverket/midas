import{j as a}from"./iframe-KJDLp_0m.js";import{T as o,a as i,s as D}from"./Tag-CqytFYj6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DT4olQqQ.js";import"./utils-CvzFG7zr.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWeZ5oJq.js";import"./useFocusRing-BPsypYMS.js";import"./index-K8rlEHaU.js";import"./index-C9CguOj_.js";import"./useLabels-D7zurx9v.js";import"./useButton-C4ewyi1m.js";import"./Collection-D3tqlWxK.js";import"./index-DXUssJdq.js";import"./ListBox-CLHEVhdS.js";import"./DragAndDrop-C8GY1ln9.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-A0tYgwMs.js";import"./SelectionManager-dRTwsFVG.js";import"./useEvent-CpLcXrqi.js";import"./FocusScope-BcIvWmSs.js";import"./useDescription-BifXjiAZ.js";import"./useControlledState-DJmAUmTR.js";import"./ListKeyboardDelegate-fljvkVIu.js";import"./Text-DPwL8vhz.js";import"./inertValue-DcmhgI7l.js";import"./useListState-CZlxl9fm.js";import"./useHighlightSelectionDescription-D-EOf8wZ.js";import"./useUpdateEffect-CuQxxpNn.js";import"./useLocalizedStringFormatter-CIR2fVNC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-L31mcIHK.js";import"./useField-D3UHXkId.js";import"./Button-CB915UM1.js";import"./Button.module-DRhvPh0f.js";import"./x-UN6dUsR5.js";import"./createLucideIcon-CV9z2eLr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
