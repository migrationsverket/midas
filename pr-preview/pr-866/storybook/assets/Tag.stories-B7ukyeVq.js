import{j as a}from"./iframe-0I9oPXfY.js";import{T as o,a as i,s as D}from"./Tag-ByLtKMWZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CCG3sKZk.js";import"./utils-DmSxheDP.js";import"./clsx-B-dksMZM.js";import"./Hidden-CODB6zs1.js";import"./useFocusRing-CBLrXsNj.js";import"./index-B-q-mAMe.js";import"./index-sTsLkbYn.js";import"./useLabels-BslkYrg2.js";import"./useButton-n4Ci3OAt.js";import"./Collection-B_aXmOP9.js";import"./index-xTsgDzj4.js";import"./ListBox-D4RyiOG3.js";import"./DragAndDrop-Bhf87KF5.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BU4jlUdP.js";import"./SelectionManager-4hZ3ph8J.js";import"./useEvent-CDeJjJLj.js";import"./FocusScope-CIjHOgj4.js";import"./useDescription-Dn6QFowz.js";import"./useControlledState-CeevRCQn.js";import"./context-B2hDnSVi.js";import"./Text-CbsDDqbR.js";import"./inertValue-Cl7czGiY.js";import"./useListState-CrvNDCj3.js";import"./useHighlightSelectionDescription-BvtpUzA1.js";import"./useUpdateEffect-Bbz_12t5.js";import"./useLocalizedStringFormatter-CuMXPYIj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B46s2vPK.js";import"./useField-B9Oy3-jE.js";import"./clsx-Ciqy0D92.js";import"./Button-CQsc2DTh.js";import"./Button.module-DRhvPh0f.js";import"./x-DT_P28eN.js";import"./createLucideIcon-CfRIoqqz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
