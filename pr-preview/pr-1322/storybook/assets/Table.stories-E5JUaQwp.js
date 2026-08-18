import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-BWEY7W6I.js";import{D as i,n as a,t as o}from"./exports-BgqkI7l9.js";import{t as s}from"./Button-eySyr39X.js";import{t as c}from"./button-DKkgOJvN.js";import{t as l}from"./Link-CNFRWBwc.js";import{t as u}from"./link-BZbLhYxH.js";import{a as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./Table-BR-Z9gGh.js";import{t as v}from"./TextField-BybalJEa.js";import{t as y}from"./textfield-BVwS7pz1.js";var b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{o(),b=t(n(),1),g(),u(),c(),y(),x=r(),S=[{name:`Name`,id:`name`,isRowHeader:!0},{name:`Type`,id:`type`},{name:`Date Modified`,id:`date`}],C=[{id:1,name:`Games`,date:`6/7/2020`,type:`File folder`},{id:2,name:`Program Files`,date:`4/7/2021`,type:`File folder`},{id:3,name:`bootmgr`,date:`11/20/2010`,type:`System file`},{id:4,name:`log.txt`,date:`1/18/2016`,type:`Text Document`}],w={component:f,subcomponents:{TableHeader:m,Column:p,TableBody:d,Row:h,Cell:_},title:`Components/Table`,tags:[`autodocs`],args:{"aria-label":`Files`,selectionMode:`multiple`},argTypes:{size:{control:!1}},render:e=>(0,x.jsxs)(f,{...e,children:[(0,x.jsx)(m,{columns:S,children:e=>(0,x.jsx)(p,{isRowHeader:e.isRowHeader,children:e.name})}),(0,x.jsx)(d,{items:C,children:e=>(0,x.jsx)(h,{columns:S,children:t=>(0,x.jsx)(_,{children:e[t.id]})})})]})},T={},E={args:{striped:!0,className:`my-class`}},D={tags:[`!test`],render:e=>{let t=[];for(let e=0;e<5e3;e++)t.push({id:e,foo:`Foo ${e}`,bar:`Bar ${e}`,baz:`Baz ${e}`});return(0,x.jsx)(a,{layout:i,layoutOptions:{rowHeight:48,headingHeight:48},children:(0,x.jsxs)(f,{...e,style:{height:300,overflow:`auto`,scrollPaddingTop:48},children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(p,{isRowHeader:!0,children:`Foo`}),(0,x.jsx)(p,{children:`Bar`}),(0,x.jsx)(p,{children:`Baz`})]}),(0,x.jsx)(d,{items:t,children:e=>(0,x.jsxs)(h,{"data-even":e.id%2==0,children:[(0,x.jsx)(_,{children:e.foo}),(0,x.jsx)(_,{children:e.bar}),(0,x.jsx)(_,{children:e.baz})]})})]})})}},O={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0},a11y:{test:`todo`}},args:{striped:!0},render:e=>(0,x.jsxs)(f,{...e,children:[(0,x.jsx)(m,{children:(0,x.jsx)(p,{children:`Derp`})}),(0,x.jsxs)(d,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(_,{children:(0,x.jsx)(l,{href:`#`,children:`Link`})})}),(0,x.jsx)(h,{children:(0,x.jsx)(_,{children:(0,x.jsx)(l,{href:`#`,children:`Link`})})})]})]})},k={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,x.jsxs)(f,{...e,selectionMode:`none`,keyboardNavigationBehavior:`tab`,children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(p,{isRowHeader:!0,children:`Name`}),(0,x.jsx)(p,{children:`Note`}),(0,x.jsx)(p,{children:`Actions`})]}),(0,x.jsx)(d,{items:C,children:e=>(0,x.jsxs)(h,{children:[(0,x.jsx)(_,{children:e.name}),(0,x.jsx)(_,{children:(0,x.jsx)(v,{"aria-label":`Note for ${e.name}`})}),(0,x.jsx)(_,{children:(0,x.jsx)(s,{children:`Edit`})})]})})]})},A={render:e=>{let[t,n]=(0,b.useState)({column:`name`,direction:`ascending`}),r=[...C].sort((e,n)=>{let r=e[t.column],i=n[t.column],a=0;return typeof r==`string`&&typeof i==`string`?a=r.localeCompare(i):typeof r==`number`&&typeof i==`number`&&(a=r-i),t.direction===`descending`&&(a*=-1),a});return(0,x.jsxs)(f,{...e,sortDescriptor:t,onSortChange:n,children:[(0,x.jsx)(m,{columns:S,children:e=>(0,x.jsx)(p,{isRowHeader:e.isRowHeader,allowsSorting:!0,children:e.name})}),(0,x.jsx)(d,{items:r,children:e=>(0,x.jsx)(h,{columns:S,children:t=>(0,x.jsx)(_,{children:e[t.id]})})})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true,
    className: 'my-class'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <Table {...args} selectionMode='none' keyboardNavigationBehavior='tab'>
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Note</Column>
        <Column>Actions</Column>
      </TableHeader>
      <TableBody items={rows}>
        {item => <Row>
            <Cell>{item.name}</Cell>
            <Cell>
              <TextField aria-label={\`Note for \${item.name}\`} />
            </Cell>
            <Cell>
              <Button>Edit</Button>
            </Cell>
          </Row>}
      </TableBody>
    </Table>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Primary`,`Striped`,`Virtualized`,`StripedWithLink`,`InteractiveCells`,`Sorting`]}))();export{k as InteractiveCells,T as Primary,A as Sorting,E as Striped,O as StripedWithLink,D as Virtualized,j as __namedExportsOrder,w as default};