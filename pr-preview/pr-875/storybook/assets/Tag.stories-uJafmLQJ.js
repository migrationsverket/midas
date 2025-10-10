import{j as a}from"./iframe-CF14QyFH.js";import{T as o,a as i,s as D}from"./Tag-DXX01ct-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cwj2UogJ.js";import"./utils-XGkEOIue.js";import"./clsx-B-dksMZM.js";import"./Hidden-YX9OMwPz.js";import"./useFocusRing-SstsIAWg.js";import"./index-8tH9Xmlo.js";import"./index-mZaCiAPP.js";import"./useLabels-BWv5NPGE.js";import"./useButton-Ue9vS-MB.js";import"./Collection-DprqvAdq.js";import"./index-BD93_Czk.js";import"./ListBox-wLAZM4Zq.js";import"./DragAndDrop-DetdYKWp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DnSLFKFK.js";import"./SelectionManager-DMRhZQl5.js";import"./useEvent-COZz0KdZ.js";import"./FocusScope-CTtK_cGR.js";import"./useDescription-DE0JBQDB.js";import"./useControlledState-yj7IUWa3.js";import"./context-jZeicwOg.js";import"./Text-CpG1P9Jf.js";import"./inertValue-l7BCQXsF.js";import"./useListState-CT2P6qrE.js";import"./useHighlightSelectionDescription-DWVsGmDA.js";import"./useUpdateEffect-CNSMH6R6.js";import"./useLocalizedStringFormatter-5K_ZMbs6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CdEkvmyG.js";import"./useField-CZELSr9S.js";import"./clsx-Ciqy0D92.js";import"./Button-Bn0l5StG.js";import"./Button.module-CcWMkJAG.js";import"./x-DNc0zncj.js";import"./createLucideIcon-DTnn7RDv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
