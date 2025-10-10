import{j as a}from"./iframe-BKZSIuL1.js";import{T as o,a as i,s as D}from"./Tag-DOcJlXPe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-lMjEWuJL.js";import"./utils-B0_EI_VD.js";import"./clsx-B-dksMZM.js";import"./Hidden-ymbLgZ30.js";import"./useFocusRing-Du1dmkey.js";import"./index-C6nnakPq.js";import"./index-B_IfA_nr.js";import"./useLabels-hscjzlRS.js";import"./useButton-C9IsEkht.js";import"./Collection-DsQ4hKPF.js";import"./index-C1fPSMFP.js";import"./ListBox-BggL0eb7.js";import"./DragAndDrop-Cto7fkWx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Su6N-o32.js";import"./SelectionManager-B-I3DxIU.js";import"./useEvent-L7iB7xBM.js";import"./FocusScope-CYJKgfbJ.js";import"./useDescription-Dk0lepRk.js";import"./useControlledState-B93ivRDu.js";import"./context-CQhcDmqB.js";import"./Text-DBMaukP9.js";import"./inertValue-D8qk1W5p.js";import"./useListState-Do2FgWdC.js";import"./useHighlightSelectionDescription-SK00AOyN.js";import"./useUpdateEffect-RhpteYp9.js";import"./useLocalizedStringFormatter-BxpkPDPd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CCcqN3_i.js";import"./useField-BitnE6KK.js";import"./clsx-Ciqy0D92.js";import"./Button-BdITQgFL.js";import"./Button.module-CcWMkJAG.js";import"./x-Dl48VjNa.js";import"./createLucideIcon-Cp4qZj9X.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
