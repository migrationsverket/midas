import{r as m,f as l,j as t}from"./iframe-B5sjefct.js";import{S as d}from"./SearchField-DJonuo_E.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BNpLjZlE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-fPAwABKa.js";import"./clsx-B-dksMZM.js";import"./Form-DV6cj1j8.js";import"./useFocusRing-sOnwHe33.js";import"./index-DtgNuOCD.js";import"./index-Czs7kpwC.js";import"./Input-Cb4Gy95r.js";import"./Hidden-B2p0iUh8.js";import"./Button-cTz3Pef6.js";import"./useLabel-CW7f36mN.js";import"./useLabels-Dbnz0AcO.js";import"./useButton-k5p-sniw.js";import"./FieldError-DnuLUqIw.js";import"./Text-EO7MNkCF.js";import"./clsx-Ciqy0D92.js";import"./Text-BTlYwDV5.js";import"./RSPContexts-BkqIbQHr.js";import"./Group-BBOJyT9l.js";import"./useControlledState-C9npmvg7.js";import"./useLocalizedStringFormatter-BDTDudxH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRs7Ot9H.js";import"./useField-rQs3eruV.js";import"./TextField.module-DdivwlC8.js";import"./search-BHGqsHXC.js";import"./createLucideIcon-CQqZaZFl.js";import"./x-ypr4Mk8U.js";import"./useLocalizedStringFormatter-DrEfy0xs.js";import"./Button-B7RHQDq3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9CixXME.js";import"./Collection-BTfOZg7O.js";import"./index-D3nQBSt7.js";import"./DragAndDrop-iTDOMjjz.js";import"./getScrollParent-CARLrFAt.js";import"./scrollIntoView-CGmA7IW7.js";import"./SelectionIndicator-CNVo6PE4.js";import"./SelectionManager-BuBT_k-U.js";import"./useEvent-NpEIZShQ.js";import"./useDescription-ByFyhYps.js";import"./inertValue-C0WdbBTE.js";import"./useHighlightSelectionDescription-PVfLE-A8.js";import"./useUpdateEffect-UW1Vdnti.js";import"./ListKeyboardDelegate-CEeU1U1a.js";import"./useHasTabbableChild-CBF-HduE.js";import"./Checkbox-q3pdT5vv.js";import"./check-BehJ-9hW.js";import"./useToggleState-CaVnP84R.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
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
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
