import{j as a}from"./iframe-DuGV-nJg.js";import{T as o,a as i,s as D}from"./Tag-Df6aYkDj.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CN5BzAGz.js";import"./utils-DMXpxxWM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CDWt_Hqe.js";import"./useFocusRing-DZevXC5x.js";import"./index-BYp4SrVV.js";import"./index-B5eSfPIC.js";import"./useLabels-B9oi6BvG.js";import"./useButton-BZcqx5pu.js";import"./Collection-Dhd6463K.js";import"./index-C6NxZSmk.js";import"./ListBox-CCjHZtY0.js";import"./DragAndDrop-DeJl7ieh.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cl80GkkI.js";import"./SelectionManager-etTHRufU.js";import"./useEvent-oeERdTLZ.js";import"./FocusScope-CAvUDr1F.js";import"./useDescription-BBE-zXAf.js";import"./useControlledState-BlnoIrZu.js";import"./ListKeyboardDelegate-DkChHUWM.js";import"./Text-DKyaOHyp.js";import"./inertValue-CrJ_yeH7.js";import"./useListState-QrKjb_2T.js";import"./useHighlightSelectionDescription-DSxpPvsP.js";import"./useUpdateEffect-Y8e5fOMw.js";import"./useLocalizedStringFormatter-9U_wd7Wi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DOf72_Na.js";import"./useField-DZmfhGAw.js";import"./Button-jZCC3-mm.js";import"./Button.module-DRhvPh0f.js";import"./x-Dbrz1_YK.js";import"./createLucideIcon-B7F13ZBn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
