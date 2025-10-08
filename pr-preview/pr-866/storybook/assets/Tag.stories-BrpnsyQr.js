import{j as a}from"./iframe-WBlQP-2i.js";import{T as o,a as i,s as D}from"./Tag--z81hlkh.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C_HNvl84.js";import"./utils-B53VwRbm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BK97wOOR.js";import"./useFocusRing-6zP2THIx.js";import"./index-xuhFfeNo.js";import"./index-Bon-zzI4.js";import"./useLabels-BkxPSTF5.js";import"./useButton-mFR8X-Fz.js";import"./Collection-D8DbGRqR.js";import"./index-Bhk0gy7A.js";import"./ListBox-A5OLYy9e.js";import"./DragAndDrop-BqZw3A29.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CLB642Aj.js";import"./SelectionManager-CoU2xbxu.js";import"./useEvent-DxEngiVC.js";import"./FocusScope-C8sxdmg_.js";import"./useDescription-CS-8elWF.js";import"./useControlledState-Dak3FQj3.js";import"./context-Cy0Audih.js";import"./Text-Cd48kc9r.js";import"./inertValue-DkQ7Y6_a.js";import"./useListState-BA8ib07-.js";import"./useHighlightSelectionDescription-CbQn1ncE.js";import"./useUpdateEffect-B3CwvqzW.js";import"./useLocalizedStringFormatter-gI_5SxlI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-H5Dz73iw.js";import"./useField-D_Ibrypy.js";import"./clsx-Ciqy0D92.js";import"./Button-BMkmVYU_.js";import"./Button.module-CcWMkJAG.js";import"./x-BuwA0a1y.js";import"./createLucideIcon-BV9bCxJT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
