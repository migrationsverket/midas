import{j as a}from"./iframe-B1PXMFJH.js";import{T as o,a as i,s as D}from"./Tag-DReVBHAX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bp6PsTmG.js";import"./utils--cdDOgQ9.js";import"./clsx-B-dksMZM.js";import"./Hidden-pXJnpdQE.js";import"./useFocusRing-CaCwQhqQ.js";import"./index-DflHDfD6.js";import"./index-DviUo7BM.js";import"./useLabels-C-5XlMpq.js";import"./useButton-DRBU-csS.js";import"./Collection-CcS6tW_X.js";import"./index-CLj2SmbT.js";import"./ListBox-vETnluTo.js";import"./DragAndDrop-Dv6ri7zr.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BaPp2OIQ.js";import"./SelectionManager-9RjfiAQJ.js";import"./useEvent-BSxq3C9f.js";import"./FocusScope-DJ7oL-6y.js";import"./useDescription-DXwkPHaD.js";import"./useControlledState-CxQdtbRy.js";import"./ListKeyboardDelegate-DW4cgVrX.js";import"./Text-CDSSvww9.js";import"./inertValue-CAA4yFWW.js";import"./useListState-DeBbiNsy.js";import"./useHighlightSelectionDescription-BBZ3rC-n.js";import"./useUpdateEffect-B2CTkbF_.js";import"./useLocalizedStringFormatter-NpoBiwjz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-n4ftKuFs.js";import"./useField-4HGMjqOy.js";import"./Button-r_ZHzQTp.js";import"./Button.module-BkTnSRp5.js";import"./x-OLRObqUj.js";import"./createLucideIcon-D2sxI8sW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
