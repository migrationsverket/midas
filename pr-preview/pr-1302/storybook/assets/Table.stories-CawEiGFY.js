import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-bzG21Jm6.js";import{D as i,n as a,t as o}from"./import-CMLYlj3S.js";import{t as s}from"./Link-DwN7Xa3R.js";import{t as c}from"./link-DAQGXrxE.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Table-BGZ7pcaP.js";var g,_,v,y,b,x,S,C,w,T,E;e((()=>{o(),g=t(n(),1),m(),c(),_=r(),v=[{name:`Name`,id:`name`,isRowHeader:!0},{name:`Type`,id:`type`},{name:`Date Modified`,id:`date`}],y=[{id:1,name:`Games`,date:`6/7/2020`,type:`File folder`},{id:2,name:`Program Files`,date:`4/7/2021`,type:`File folder`},{id:3,name:`bootmgr`,date:`11/20/2010`,type:`System file`},{id:4,name:`log.txt`,date:`1/18/2016`,type:`Text Document`}],b={component:u,subcomponents:{TableHeader:f,Column:d,TableBody:l,Row:p,Cell:h},title:`Components/Table`,tags:[`autodocs`],args:{"aria-label":`Files`,selectionMode:`multiple`},argTypes:{size:{control:!1}},render:e=>(0,_.jsxs)(u,{...e,children:[(0,_.jsx)(f,{columns:v,children:e=>(0,_.jsx)(d,{isRowHeader:e.isRowHeader,children:e.name})}),(0,_.jsx)(l,{items:y,children:e=>(0,_.jsx)(p,{columns:v,children:t=>(0,_.jsx)(h,{children:e[t.id]})})})]})},x={},S={args:{striped:!0,className:`my-class`}},C={tags:[`!test`],render:e=>{let t=[];for(let e=0;e<5e3;e++)t.push({id:e,foo:`Foo ${e}`,bar:`Bar ${e}`,baz:`Baz ${e}`});return(0,_.jsx)(a,{layout:i,layoutOptions:{rowHeight:48,headingHeight:48},children:(0,_.jsxs)(u,{...e,style:{height:300,overflow:`auto`,scrollPaddingTop:48},children:[(0,_.jsxs)(f,{children:[(0,_.jsx)(d,{isRowHeader:!0,children:`Foo`}),(0,_.jsx)(d,{children:`Bar`}),(0,_.jsx)(d,{children:`Baz`})]}),(0,_.jsx)(l,{items:t,children:e=>(0,_.jsxs)(p,{"data-even":e.id%2==0,children:[(0,_.jsx)(h,{children:e.foo}),(0,_.jsx)(h,{children:e.bar}),(0,_.jsx)(h,{children:e.baz})]})})]})})}},w={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:`todo`}},args:{striped:!0},render:e=>(0,_.jsxs)(u,{...e,children:[(0,_.jsx)(f,{children:(0,_.jsx)(d,{children:`Derp`})}),(0,_.jsxs)(l,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(h,{children:(0,_.jsx)(s,{href:`#`,children:`Link`})})}),(0,_.jsx)(p,{children:(0,_.jsx)(h,{children:(0,_.jsx)(s,{href:`#`,children:`Link`})})})]})]})},T={render:e=>{let[t,n]=(0,g.useState)({column:`name`,direction:`ascending`}),r=[...y].sort((e,n)=>{let r=e[t.column],i=n[t.column],a=0;return typeof r==`string`&&typeof i==`string`?a=r.localeCompare(i):typeof r==`number`&&typeof i==`number`&&(a=r-i),t.direction===`descending`&&(a*=-1),a});return(0,_.jsxs)(u,{...e,sortDescriptor:t,onSortChange:n,children:[(0,_.jsx)(f,{columns:v,children:e=>(0,_.jsx)(d,{isRowHeader:e.isRowHeader,allowsSorting:!0,children:e.name})}),(0,_.jsx)(l,{items:r,children:e=>(0,_.jsx)(p,{columns:v,children:t=>(0,_.jsx)(h,{children:e[t.id]})})})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    className: 'my-class'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  // slow test
  tags: ['!test'],
  render: args => {
    const rows = [];
    for (let i = 0; i < 5000; i++) {
      rows.push({
        id: i,
        foo: \`Foo \${i}\`,
        bar: \`Bar \${i}\`,
        baz: \`Baz \${i}\`
      });
    }
    return <Virtualizer layout={TableLayout} layoutOptions={{
      rowHeight: 48,
      headingHeight: 48
    }}>
        <Table {...args} style={{
        height: 300,
        overflow: 'auto',
        scrollPaddingTop: 48
      }}>
          <TableHeader>
            <Column isRowHeader>Foo</Column>
            <Column>Bar</Column>
            <Column>Baz</Column>
          </TableHeader>
          <TableBody items={rows}>
            {item => <Row data-even={item.id % 2 === 0}>
                <Cell>{item.foo}</Cell>
                <Cell>{item.bar}</Cell>
                <Cell>{item.baz}</Cell>
              </Row>}
          </TableBody>
        </Table>
      </Virtualizer>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    a11y: {
      // Link color has insufficient contrast to striped background
      test: 'todo'
    }
  },
  args: {
    striped: true
  },
  render: args => <Table {...args}>
      <TableHeader>
        <Column>Derp</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            <Link href='#'>Link</Link>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Link href='#'>Link</Link>
          </Cell>
        </Row>
      </TableBody>
    </Table>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: 'name',
      direction: 'ascending'
    });
    const sortedRows = [...rows].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof Row];
      const second = b[sortDescriptor.column as keyof Row];
      let cmp = 0;
      if (typeof first === 'string' && typeof second === 'string') {
        cmp = first.localeCompare(second);
      } else if (typeof first === 'number' && typeof second === 'number') {
        cmp = first - second;
      }
      if (sortDescriptor.direction === 'descending') {
        cmp *= -1;
      }
      return cmp;
    });
    return <Table {...args} sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
        <TableHeader columns={columns}>
          {column => <Column isRowHeader={column.isRowHeader} allowsSorting>
              {column.name}
            </Column>}
        </TableHeader>
        <TableBody items={sortedRows}>
          {item => <Row columns={columns}>
              {column => <Cell>{item[column.id]}</Cell>}
            </Row>}
        </TableBody>
      </Table>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Primary`,`Striped`,`Virtualized`,`StripedWithLink`,`Sorting`]}))();export{x as Primary,T as Sorting,S as Striped,w as StripedWithLink,C as Virtualized,E as __namedExportsOrder,b as default};