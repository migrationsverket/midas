import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as b}from"./clsx-B-dksMZM.js";import{c as h}from"./createLucideIcon-WuqQdmgs.js";import{B as j}from"./Button-CXg1YB7h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-oEo1n-jK.js";import"./index-Drt3gf4w.js";import"./Hidden-CeomKQRv.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=h("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),B='"../../../theme/src/lib/tokens.css"',L="#b90835",N="#143c50",D="_container_9ikl1_4",H="_spinner_9ikl1_8",I="_rotating_9ikl1_1",C="_dark_9ikl1_17",q="_vsHidden_9ikl1_21",a={tokens:B,red100:L,blue150:N,container:D,spinner:H,rotating:I,dark:C,vsHidden:q},c=({small:r,dark:x})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(v,{className:b(a.spinner,x&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{c.displayName="Spinner",c.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const A={component:c,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={parameters:{backgrounds:{default:"Dark"}},args:{dark:!0}},o={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(j,{children:[e.jsx(c,{dark:r.dark,small:r.small}),"Laddar"]})};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const F=["Primary","Small","Dark","InButton"];export{t as Dark,o as InButton,s as Primary,n as Small,F as __namedExportsOrder,A as default};
