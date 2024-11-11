import{j as e}from"./jsx-runtime-CfatFE5O.js";import{c as b}from"./clsx-B-dksMZM.js";import{c as h}from"./createLucideIcon-DQK9Z80p.js";import{B as j}from"./Button-BxwB_ABT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DXFpw2KU.js";import"./useFocusable-B5I9Mbqb.js";import"./index-ZuzByk-F.js";import"./Hidden-Gy3GO5dR.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=h("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),z='"../../../theme/src/lib/tokens.css"',B="#b90835",L="#143c50",N="_container_cocz1_4",D="_spinner_cocz1_8",H="_rotating_cocz1_1",I="_dark_cocz1_18",C="_vsHidden_cocz1_22",a={tokens:z,red100:B,blue150:L,container:N,spinner:D,rotating:H,dark:I,vsHidden:C},c=({small:r,dark:x})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(v,{className:b(a.spinner,x&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{c.displayName="Spinner",c.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const F={component:c,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={parameters:{backgrounds:{default:"Dark"}},args:{dark:!0}},o={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(j,{children:[e.jsx(c,{dark:r.dark,small:r.small}),"Laddar"]})};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var k,_,g;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  args: {
    dark: true
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,S,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    small: true,
    dark: true
  },
  render: ({
    ...args
  }) => {
    return <Button>
        <Spinner dark={args.dark} small={args.small} />
        Laddar
      </Button>;
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const G=["Primary","Small","Dark","InButton"];export{t as Dark,o as InButton,s as Primary,n as Small,G as __namedExportsOrder,F as default};
