import{j as a}from"./iframe-B-yof7v0.js";import{T as o,a as i,s as D}from"./Tag-D-gA8ebc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-NUczIEOP.js";import"./utils-1sMYfN8U.js";import"./clsx-B-dksMZM.js";import"./Hidden-CnqEZwWs.js";import"./useFocusRing-CNqV6a42.js";import"./index-Da5ifXzY.js";import"./index-DZECVR5q.js";import"./useLabels-ZwL1pcmC.js";import"./useButton-Cy7gHjn7.js";import"./Collection-BbpV8Zn9.js";import"./index-BI9ArE0D.js";import"./ListBox-DcAgC5Ue.js";import"./DragAndDrop-Cxxic3xP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DrH9kEGC.js";import"./SelectionManager-BcaDdfDg.js";import"./useEvent-DiMtCqNH.js";import"./FocusScope-BKq0jv7h.js";import"./useDescription-DBJkG7ME.js";import"./useControlledState-3Cmpag-P.js";import"./ListKeyboardDelegate-DL1q2dUL.js";import"./Text-BOe6Q3za.js";import"./inertValue-CMYfxEVG.js";import"./useListState-Do73H1fD.js";import"./useHighlightSelectionDescription-DExUBA2g.js";import"./useUpdateEffect-DTDhC_Vr.js";import"./useLocalizedStringFormatter-BiGDH9Kw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CRgeXn_d.js";import"./useField-CEmkhm2Y.js";import"./Button-ehy4r1Na.js";import"./Button.module-DRhvPh0f.js";import"./x-CwbuPXI5.js";import"./createLucideIcon-BIpQBx_q.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
