import{j as a}from"./iframe-X_Q6yNkV.js";import{T as o,a as i,s as D}from"./Tag-PesYrEwH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BirKvOIO.js";import"./utils-w3-MX_gc.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cn7Y9qfk.js";import"./useFocusRing-CnyFL7BU.js";import"./index-cX9s3_mV.js";import"./index-gQKxNt4T.js";import"./useLabels-B1LPWkUD.js";import"./useButton-BJxwzM8-.js";import"./Collection-BN1wwfI0.js";import"./index-DW5OYtaY.js";import"./ListBox-CZGpU_yI.js";import"./DragAndDrop-BMSLjKZW.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BMHxq8lF.js";import"./SelectionManager-Dat4Uh03.js";import"./useEvent-BgC5gJaF.js";import"./FocusScope-DZ19Vvwe.js";import"./useDescription-D2FVFZrK.js";import"./useControlledState-CrDf3AUD.js";import"./context-DQvE8zSv.js";import"./Text-DyddHSED.js";import"./inertValue-BA3Ssu-Z.js";import"./useListState-CHcNUNA1.js";import"./useHighlightSelectionDescription-BbLzlAQC.js";import"./useUpdateEffect-BVGVSr70.js";import"./useLocalizedStringFormatter-DajBfopX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bas2D5yD.js";import"./useField-C_7iXoft.js";import"./clsx-Ciqy0D92.js";import"./Button-DMpmux-1.js";import"./Button.module-CcWMkJAG.js";import"./x-C011c84V.js";import"./createLucideIcon-DwS6bUmY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
