import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as h}from"./createLucideIcon-DjmUzaoT.js";import{B as j}from"./Button-9KeTfxY-.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-ojkDv_BK.js";import"./useFocusable-B8HhqQIl.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=h("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),B="_container_13uof_4",L="_spinner_13uof_8",D="_dark_13uof_18",N="_vsHidden_13uof_22",a={container:B,spinner:L,dark:D,vsHidden:N},d=({small:r,dark:x})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(b,{className:v(a.spinner,x&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{d.displayName="Spinner",d.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const F={component:d,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={parameters:{backgrounds:{default:"Dark"}},args:{dark:!0}},o={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(j,{children:[e.jsx(d,{dark:r.dark,small:r.small}),"Laddar"]})};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,y,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const M=["Primary","Small","Dark","InButton"];export{t as Dark,o as InButton,s as Primary,n as Small,M as __namedExportsOrder,F as default};
