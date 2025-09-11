import{j as a}from"./iframe-Ctz7No1o.js";import{T as o,a as i,s as D}from"./Tag-6-eFm1O7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DG_oF4nV.js";import"./utils-BfOAahVB.js";import"./clsx-B-dksMZM.js";import"./Hidden-D0446nH_.js";import"./useFocusRing-BIXYgKfR.js";import"./index-B4D26wo-.js";import"./index-BrvAFOj_.js";import"./useLabels-BzGI7x3p.js";import"./useButton-_bnuILTM.js";import"./Collection-0VCVNFuv.js";import"./index-DgfuqsA2.js";import"./ListBox-wNby6RBU.js";import"./DragAndDrop-DwgWR2_I.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-vXO7pOTk.js";import"./SelectionManager-BIccKWkx.js";import"./useEvent-DEzace9H.js";import"./FocusScope-DdI6IzS7.js";import"./useDescription-B_lZZd4s.js";import"./useControlledState-UGdYHVBr.js";import"./ListKeyboardDelegate-Cfbh0YpD.js";import"./Text-CLF9xucF.js";import"./inertValue-B6xAKUSJ.js";import"./useListState-CZDqI737.js";import"./useHighlightSelectionDescription-jhCmneD6.js";import"./useUpdateEffect-CbK-dmQv.js";import"./useLocalizedStringFormatter-D1B5Q96R.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-x0KCROCM.js";import"./useField-B6Dd3UD8.js";import"./Button-Ly_Gg0a2.js";import"./Button.module-DRhvPh0f.js";import"./x-DtDM2fsr.js";import"./createLucideIcon-CHl5w9ch.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
