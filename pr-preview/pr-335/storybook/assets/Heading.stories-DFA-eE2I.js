import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{c as W}from"./clsx-B-dksMZM.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h=({component:e,element:n,variant:f})=>e===n||!e&&f===n,X='"../theme/tokens.css"',Y="#000000",Z='"Inter", sans-serif',$="_h1_ozm69_5",ee="_h1External_ozm69_6",ne="_h2_ozm69_8",ae="_h2External_ozm69_9",te="_h3_ozm69_11",re="_h3External_ozm69_12",se="_h4_ozm69_14",oe="_h4External_ozm69_15",ie="_h5_ozm69_17",le="_h5External_ozm69_18",a={tokens:X,black:Y,display:Z,h1:$,h1External:ee,h2:ne,h2External:ae,h3:te,h3External:re,h4:se,h4External:oe,h5:ie,h5External:le},E=({children:e,...n})=>s.jsx(he,{...n,children:e}),he=({component:e,children:n,className:f,variant:r="h3",isExternal:o=!1,...i})=>{const Q={h1:o?a.h1External:a.h1,h2:o?a.h2External:a.h2,h3:o?a.h3External:a.h3,h4:o?a.h4External:a.h4,h5:o?a.h5External:a.h5},l=W(Q[r],f);return h({component:e,variant:r,element:"h1"})?s.jsx("h1",{className:l,...i,children:n}):h({component:e,variant:r,element:"h2"})?s.jsx("h2",{className:l,...i,children:n}):h({component:e,variant:r,element:"h3"})?s.jsx("h3",{className:l,...i,children:n}):h({component:e,variant:r,element:"h4"})?s.jsx("h4",{className:l,...i,children:n}):h({component:e,variant:r,element:"h5"})?s.jsx("h5",{className:l,...i,children:n}):null};try{E.displayName="Heading",E.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExternal:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const me={component:E,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExternal:!1}},c={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},g={args:{...c.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},p={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},x={args:{...p.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},d={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},m={args:{variant:"h3",children:"Citrus",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},u={args:{variant:"h4",children:"C. reticulata",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},y={args:{variant:"h5",children:"Clementin",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},v={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExternal:n}})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":n?"24px":"16px","line-height":n?"32px":"24px","font-weight":600})}};var H,_,S;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Sapindales'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400
    });
  }
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var z,R,w;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...InternalHeading1.args,
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '44px',
      'font-weight': 400
    });
  }
}`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var B,k,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Rutaceae'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400
    });
  }
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,I,N;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...InternalHeading2.args,
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '36px',
      'font-weight': 500
    });
  }
}`,...(N=(I=x.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var b,q,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var A,O,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus',
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '24px',
      'line-height': '32px',
      'font-weight': 600
    });
  }
}`,...(T=(O=m.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,D,F;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'C. reticulata',
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600
    });
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'h5',
    children: 'Clementin',
    isExternal: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,P;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    component: 'h1',
    children: 'A h1 that looks just like a h3'
  },
  play: async ({
    canvas,
    args: {
      isExternal
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExternal ? '24px' : '16px',
      'line-height': isExternal ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ue=["InternalHeading1","ExternalHeading1","InternalHeading2","ExternalHeading2","InternalHeading3","ExternalHeading3","ExternalHeading4","ExternalHeading5","ChangeSemanticElement"];export{v as ChangeSemanticElement,g as ExternalHeading1,x as ExternalHeading2,m as ExternalHeading3,u as ExternalHeading4,y as ExternalHeading5,c as InternalHeading1,p as InternalHeading2,d as InternalHeading3,ue as __namedExportsOrder,me as default};
