import{j as a}from"./iframe-MaYOJAN8.js";import{T as o,a as i,s as D}from"./Tag-CYyMhpQD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C_P8qZcK.js";import"./utils-BrfbmD28.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRLR_11D.js";import"./useFocusRing-D-PG3iD_.js";import"./index-Cjc53k04.js";import"./index-CNsVKS-F.js";import"./useLabels-0rKXhsp5.js";import"./useButton-DempeO4L.js";import"./Collection-DaIdUWaC.js";import"./index-D9qgio9s.js";import"./ListBox-BqgW-j6g.js";import"./DragAndDrop-CMsnXQ-2.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Gj_1RNyA.js";import"./SelectionManager-XfzF87w8.js";import"./useEvent-CRHphMTs.js";import"./FocusScope-CTOL_5ws.js";import"./useDescription-CiQuFjt-.js";import"./useControlledState-C6HHd_oa.js";import"./context-B6O7X3jO.js";import"./Text-DqrVeG9x.js";import"./inertValue-DJAM3SO8.js";import"./useListState-BU-L6Jqe.js";import"./useHighlightSelectionDescription-C3v35K6r.js";import"./useUpdateEffect-DpJWpMcz.js";import"./useLocalizedStringFormatter-AKfu3ELC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C-o0WeAZ.js";import"./useField-DVXXZduq.js";import"./Button-0W_3u2Fu.js";import"./Button.module-DRhvPh0f.js";import"./x-DpDVU5FM.js";import"./createLucideIcon-BhgUJiTX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
