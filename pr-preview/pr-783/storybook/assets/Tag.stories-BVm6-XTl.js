import{j as a}from"./iframe-DzOy1gAk.js";import{T as o,a as i,s as D}from"./Tag-HJd6sLXU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CVwnm0R9.js";import"./utils-CspyMWq6.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bm7n3ZtD.js";import"./useFocusRing-ZOcLu7gP.js";import"./index-B-FdS93T.js";import"./index-DShvf5eO.js";import"./useLabels-CHHIF30u.js";import"./useButton-Cl9ZaFdH.js";import"./Collection-BNZ21LAj.js";import"./index-Dl9MKa6j.js";import"./ListBox-B6IFrDpF.js";import"./DragAndDrop-BzbhvSER.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DA6j-Bcy.js";import"./SelectionManager-Qd01U8HL.js";import"./useEvent-Cgx3qB44.js";import"./FocusScope-BGAWioR1.js";import"./useDescription-04UgQ2LJ.js";import"./useControlledState-DB34tEyA.js";import"./ListKeyboardDelegate-NDqUZn9F.js";import"./Text-mcLyK5_Z.js";import"./inertValue-CJsdE1_M.js";import"./useListState-DsUmBwNr.js";import"./useHighlightSelectionDescription-KZbxBEFg.js";import"./useUpdateEffect-BeQNuDMC.js";import"./useLocalizedStringFormatter-BNPb1Dfw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BJWBDmip.js";import"./useField-DG40KQoK.js";import"./Button-D4whKl8Q.js";import"./Button.module-DgYkWG2o.js";import"./x-C-DvWUo8.js";import"./createLucideIcon-CV31QyPd.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
