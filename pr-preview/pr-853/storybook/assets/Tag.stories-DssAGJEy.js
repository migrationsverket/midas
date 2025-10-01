import{j as a}from"./iframe-DQ0Yww4t.js";import{T as o,a as i,s as D}from"./Tag-lXOM4jbJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BuKSg3tr.js";import"./utils-DI4y5G2T.js";import"./clsx-B-dksMZM.js";import"./Hidden-BRgVz7Qp.js";import"./useFocusRing-hOwPeJyf.js";import"./index-BbLD2t5R.js";import"./index-CRGwpPOp.js";import"./useLabels-BSqZnwjD.js";import"./useButton-D0NQhWnm.js";import"./Collection-BBuyuRBL.js";import"./index-CfwgbFuy.js";import"./ListBox-Cgq8Wfla.js";import"./DragAndDrop-BLFMHGZu.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DgvAKk8z.js";import"./SelectionManager-Cst25jPJ.js";import"./useEvent-DAOMGbHo.js";import"./FocusScope-B2_brSfR.js";import"./useDescription-DlnzqUN-.js";import"./useControlledState-D6_zb-vR.js";import"./context-CRM5oj3D.js";import"./Text-Dsv6SlQ0.js";import"./inertValue-DoXJUwPZ.js";import"./useListState-BDZ-qPBp.js";import"./useHighlightSelectionDescription-wmPI9NA7.js";import"./useUpdateEffect--oc_JJWk.js";import"./useLocalizedStringFormatter-Bs0Jrmkh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DqznOBnI.js";import"./useField-4gC4u1AV.js";import"./Button-0PdEaH1l.js";import"./Button.module-DRhvPh0f.js";import"./x-DpwsMx5H.js";import"./createLucideIcon-B0HN-IoQ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
