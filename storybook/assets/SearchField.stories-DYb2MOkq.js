import{r as m,f as l,j as t}from"./iframe-_gH3GU_Z.js";import{S as d}from"./SearchField-oZclgq1z.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D80fvVLL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D8rfmS1g.js";import"./utils-CfJDu102.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField--d7LR7vK.js";import"./useFocusRing-BXEJ-Tr4.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./useFormValidation-oTP1bryq.js";import"./useField-ByUbZnyG.js";import"./Button-B0GHbiBt.js";import"./Hidden-D04Pc1_R.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./search-BaK8kwlo.js";import"./createLucideIcon-CfuZJf8D.js";import"./ClearButton-BqVjIZl_.js";import"./Button-DXF4_9k-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";import"./VisuallyHidden-C6ArGHnI.js";import"./x-BwSPrVqf.js";import"./FieldError-DpcLG2Fx.js";import"./Text-BRHHCRG8.js";import"./Text-DjGT25-P.js";import"./RSPContexts-FS6mevKY.js";import"./Collection-CiCTCt3v.js";import"./index-CTMRyEef.js";import"./DragAndDrop-D9mJ8oTf.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ata1nNeT.js";import"./SelectionManager-94IQVh0z.js";import"./useEvent-DDt3427d.js";import"./useDescription-DCw1B2k2.js";import"./inertValue-DsYza5oI.js";import"./useHighlightSelectionDescription-D85MASo9.js";import"./useUpdateEffect-CTeb7m0H.js";import"./ListKeyboardDelegate-BbjP68Pi.js";import"./useHasTabbableChild-Cdlz6fqN.js";import"./Checkbox-ByylVEMr.js";import"./Form-BOENKVbc.js";import"./check-3JajyrTA.js";import"./useToggleState-CSsAH9oD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
