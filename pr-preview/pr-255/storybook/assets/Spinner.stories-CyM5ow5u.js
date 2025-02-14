import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as j}from"./clsx-B-dksMZM.js";import{c as v}from"./createLucideIcon-8wDOqnHv.js";import{B as b}from"./Button-DeVX-GBX.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-PMtIgk3z.js";import"./useFocusable-BTV2lCc9.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=v("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),B='"../theme/tokens.css"',L="#b90835",D="#143c50",H="_container_13uof_4",I="_spinner_13uof_8",N="_rotating_13uof_1",C="_dark_13uof_18",z="_vsHidden_13uof_22",a={tokens:B,red100:L,blue150:D,container:H,spinner:I,rotating:N,dark:C,vsHidden:z},c=({small:r,dark:h})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(y,{className:j(a.spinner,h&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});c.__docgenInfo={description:"",methods:[],displayName:"Spinner"};const G={component:c,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={parameters:{backgrounds:{default:"Dark"}},args:{dark:!0}},o={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(b,{children:[e.jsx(c,{dark:r.dark,small:r.small}),"Laddar"]})};var d,i,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var k,g,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  args: {
    dark: true
  }
}`,...(_=(g=t.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var f,S,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const J=["Primary","Small","Dark","InButton"];export{t as Dark,o as InButton,s as Primary,n as Small,J as __namedExportsOrder,G as default};
