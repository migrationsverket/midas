import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{g as h}from"./utils-DmZ6kXfk.js";import{r as n}from"./index-BbAIUH2N.js";import{S as l}from"./SearchField-CUhAR04g.js";import{T as f,a as x,C as T,$ as S,R as g,b as w}from"./Table-BgI12jv4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-Co3XUpyT.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Text-EJwwmz-7.js";import"./TextField.module-eTMcdoyU.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BolKm6uG.js";import"./Hidden-CwCDq9YD.js";import"./index-i7ZvCR4f.js";import"./useLabels-CtxEn0bM.js";import"./Button-Byufbxkw.js";import"./Group-ceAKJ6e-.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./context-DFhOKXSg.js";import"./createLucideIcon-8wDOqnHv.js";import"./Button-OalY2HqH.js";import"./x-Cu6J0Y2u.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-ChKcjgL2.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-CzRPRDMi.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./useDescription-Ct3UQeSC.js";import"./VisuallyHidden-DXoeczHE.js";import"./ListKeyboardDelegate-D7ImecD0.js";import"./useHighlightSelectionDescription-qrTcz71W.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CFpHdRS1.js";import"./useGridSelectionCheckbox-CDAQ2PRs.js";import"./Checkbox-CEuvkKUO.js";const ne={component:l,title:"Examples/Search",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{}},a={args:{},render:function(){const i=[{name:"Fruit",id:"fruit",isRowHeader:!0},{name:"Description",id:"description"}],[c,d]=n.useState(""),[u]=n.useState(()=>Array.from(h(10)).map((e,t)=>({id:t+1,fruit:e.name,description:`A delicious ${e.name.toLowerCase()}.`}))),o=u.filter(e=>e.fruit.toLowerCase().includes(c.toLowerCase()));return r.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[r.jsx(l,{placeholder:"Search for a fruit...",buttonText:"Search",onInput:e=>d(e.target.value)}),o.length===0&&r.jsx("p",{style:{marginTop:"20px"},children:"No results found"}),o.length>0&&r.jsxs(f,{"aria-label":"Fruit Table",style:{width:"100%",marginTop:"20px"},children:[r.jsx(x,{children:i.map(e=>r.jsx(T,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),r.jsx(S,{children:o.map(e=>r.jsx(g,{children:i.map(t=>r.jsx(w,{children:e[t.id]},t.id))},e.id))})]})]})}};var m,s,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Fruit',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Description',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => Array.from(generateMockOptions(10)).map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: \`A delicious \${item.name.toLowerCase()}.\`
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Search for a fruit...' buttonText='Search' onInput={e => setSearchTerm((e.target as HTMLInputElement).value)} />

        {filteredData.length === 0 && <p style={{
        marginTop: '20px'
      }}>No results found</p>}

        {filteredData.length > 0 && <Table aria-label='Fruit Table' style={{
        width: '100%',
        marginTop: '20px'
      }}>
            <TableHeader>
              {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                  {column.name}
                </Column>)}
            </TableHeader>
            <TableBody>
              {filteredData.map(item => <Row key={item.id}>
                  {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                </Row>)}
            </TableBody>
          </Table>}
      </div>;
  }
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const me=["SimpleSearch"];export{a as SimpleSearch,me as __namedExportsOrder,ne as default};
