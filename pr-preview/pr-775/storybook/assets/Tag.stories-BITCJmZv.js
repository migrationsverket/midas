import{j as a}from"./iframe-CGcdNPxV.js";import{T as o,a as i,s as D}from"./Tag-D1twaZgv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CgQ4u9Ia.js";import"./utils-CcsEyQ5d.js";import"./clsx-B-dksMZM.js";import"./Hidden-O2JbbNiF.js";import"./useFocusRing-CKBzQSpk.js";import"./index-Ds9ehpYg.js";import"./index-CG2zuO8Z.js";import"./useLabels-LGKS6_1N.js";import"./useButton-CUajmSO_.js";import"./Collection-VbG0Y8mo.js";import"./index-BcW3HWhg.js";import"./ListBox-QirPJhNh.js";import"./DragAndDrop-A1CEc7Wk.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B7cB1sgf.js";import"./SelectionManager-orhD9qsJ.js";import"./useEvent-DeM6emkQ.js";import"./FocusScope-CQV9GBxO.js";import"./useDescription-B871tvyk.js";import"./useControlledState-BcPHzvAQ.js";import"./ListKeyboardDelegate-BVJ1tDYk.js";import"./Text-ff_kjFkF.js";import"./inertValue-BzzoARi-.js";import"./useListState-DHqMFWXJ.js";import"./useHighlightSelectionDescription-DWV5oTJd.js";import"./useUpdateEffect-B1zpDj1a.js";import"./useLocalizedStringFormatter-hIcIqYfR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CRFPt2fE.js";import"./useField-BtL_CIHl.js";import"./Button-CxfnIsdq.js";import"./Button.module-DgYkWG2o.js";import"./x-D1OcHhcq.js";import"./createLucideIcon-DM7iuOYT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
