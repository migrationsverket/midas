import{j as a}from"./jsx-runtime-CBDCb4rg.js";import{c as j}from"./clsx-B-dksMZM.js";import{c as v}from"./createLucideIcon-DjmUzaoT.js";import{B as y}from"./Button-dZcdrYJ-.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BeKNHBLF.js";import"./useFocusable-BFvoMS9y.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=v("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),L="_container_13uof_4",D="_spinner_13uof_8",H="_dark_13uof_18",I="_vsHidden_13uof_22",e={container:L,spinner:D,dark:H,vsHidden:I},d=({small:r,dark:h})=>a.jsxs("div",{className:e.container,role:"status",children:[a.jsx(B,{className:j(e.spinner,h&&e.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),a.jsx("span",{className:e.vsHidden,children:"Laddar, vänligen vänta."})]});d.__docgenInfo={description:"",methods:[],displayName:"Spinner"};const q={component:d,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={parameters:{backgrounds:{default:"Dark"}},args:{dark:!0}},o={args:{small:!0,dark:!0},render:({...r})=>a.jsxs(y,{children:[a.jsx(d,{dark:r.dark,small:r.small}),"Laddar"]})};var c,m,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var k,g,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const w=["Primary","Small","Dark","InButton"];export{t as Dark,o as InButton,s as Primary,n as Small,w as __namedExportsOrder,q as default};
