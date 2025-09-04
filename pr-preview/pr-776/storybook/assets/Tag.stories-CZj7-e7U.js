import{j as a}from"./iframe-Dcm3PUfN.js";import{T as o,a as i,s as D}from"./Tag-CAlAW10A.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dcz2BTmw.js";import"./utils-CNhHowXg.js";import"./clsx-B-dksMZM.js";import"./Hidden-De0FIIfc.js";import"./useFocusRing-CrQOIJL2.js";import"./index-DyMzXPc5.js";import"./index-CeIBvjCF.js";import"./useLabels-rgTI7aEq.js";import"./useButton-BnAC54jP.js";import"./Collection-CXUfk18A.js";import"./index-CblpVEm5.js";import"./ListBox-DHqo6Yh2.js";import"./DragAndDrop-FgKNwEym.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DfpPQK8Q.js";import"./SelectionManager-DDC4RHX1.js";import"./useEvent-Bmj5GdXX.js";import"./FocusScope-PxYv1vn5.js";import"./useDescription-CNC4nIQn.js";import"./useControlledState-Bd4aLDek.js";import"./ListKeyboardDelegate-CEjIzMTq.js";import"./Text-CGi0MNbH.js";import"./inertValue-BombQmVF.js";import"./useListState-D0J5Tgnk.js";import"./useHighlightSelectionDescription-C6DB9UYo.js";import"./useUpdateEffect-B7tXZClZ.js";import"./useLocalizedStringFormatter-D_nDnUGF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C9kMWd1j.js";import"./useField-CmoNS9bW.js";import"./Button-Drn7032p.js";import"./Button.module-DgYkWG2o.js";import"./x-Dyb985wS.js";import"./createLucideIcon-DszR0dV9.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
