import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as u}from"./clsx-B-dksMZM.js";import{C as n}from"./Card-Cq88KACG.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-D0Ektq6_.js";import"./Link-CQB74Beb.js";import"./useFocusable-BTV2lCc9.js";import"./createLucideIcon-8wDOqnHv.js";const _='"../theme/tokens.css"',p="(min-width: 768px)",k="(min-width: 1200px)",x="(min-width: 1440px)",h="_container_1aupx_4",v="_grid_1aupx_16",g="_fluid_1aupx_45",j="_col_1aupx_52",a={tokens:_,mdBreakpoint:p,lgBreakpoint:k,xlBreakpoint:x,container:h,grid:v,fluid:g,col:j,"col-1":"_col-1_1aupx_58","col-2":"_col-2_1aupx_62","col-3":"_col-3_1aupx_66","col-4":"_col-4_1aupx_70","col-5":"_col-5_1aupx_74","col-6":"_col-6_1aupx_78","col-7":"_col-7_1aupx_82","col-8":"_col-8_1aupx_86","col-9":"_col-9_1aupx_90","col-10":"_col-10_1aupx_94","col-11":"_col-11_1aupx_98","col-12":"_col-12_1aupx_102","offset-1":"_offset-1_1aupx_106","offset-2":"_offset-2_1aupx_110","offset-3":"_offset-3_1aupx_114","offset-4":"_offset-4_1aupx_118","offset-5":"_offset-5_1aupx_122","offset-6":"_offset-6_1aupx_126","offset-7":"_offset-7_1aupx_130","offset-8":"_offset-8_1aupx_134","offset-9":"_offset-9_1aupx_138","offset-10":"_offset-10_1aupx_142","offset-11":"_offset-11_1aupx_146"},c=({children:r,fluid:o=!1,...l})=>e.jsx("div",{className:u(a.container,o&&a.fluid,l.className),...l,children:e.jsx("div",{className:a.grid,children:r})});c.__docgenInfo={description:`Grid based on display: grid;
Calculates breakpoints and distributes columns according to MV specifications

### Children
Use GridItem to manage each column.
GridItem accepts values of 1 through 12 and auto.`,methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fluid:{required:!1,tsType:{name:"boolean"},description:"Removes outer margins for nested use. First Flex on a page should have outer margins.",defaultValue:{value:"false",computed:!1}}}};const t=({children:r,col:o,...l})=>{const f=o?`col-${o}`:"";return e.jsx("div",{className:u(a.col,a[f],l.className),...l,children:r})};t.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},col:{required:!1,tsType:{name:"union",raw:`| '1'
| '2'
| '3'
| '4'
| '5'
| '6'
| '7'
| '8'
| '9'
| '10'
| '11'
| '12'
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12`,elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"},{name:"literal",value:"'5'"},{name:"literal",value:"'6'"},{name:"literal",value:"'7'"},{name:"literal",value:"'8'"},{name:"literal",value:"'9'"},{name:"literal",value:"'10'"},{name:"literal",value:"'11'"},{name:"literal",value:"'12'"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Column size and behaviour"}}};const b={component:c,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{control:{type:"boolean"}}}},i={args:{},render:({...r})=>e.jsxs(c,{fluid:r.fluid,children:[e.jsx(t,{col:3,children:e.jsx(n,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:3,children:e.jsx(n,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:6,children:e.jsx(n,{title:"Ett kort",content:"Som är i sex kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:4,children:e.jsx(n,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:4,children:e.jsx(n,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:4,children:e.jsx(n,{title:"Ett kort",content:"Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.",link:{children:"Länk",href:"#"}})}),e.jsx(t,{col:10,children:e.jsx(n,{title:"Ett kort",content:"Som är utan kolumner",link:{children:"Länk",href:"#"}})})]})};var s,d,m;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={6}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={10}>
        <Card title={'Ett kort'} content={'Som är utan kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
    </Grid>
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const w=["Primary"];export{i as Primary,w as __namedExportsOrder,b as default};
