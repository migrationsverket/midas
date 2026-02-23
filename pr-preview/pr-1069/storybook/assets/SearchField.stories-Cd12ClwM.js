import{r as m,f as l,j as t}from"./iframe-NgsVAIE_.js";import{S as d}from"./SearchField-YlI2HTIz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DXs48Z00.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C2hVvUOR.js";import"./utils-BMRDwiWU.js";import"./useLocalizedStringFormatter-CJOjjMB1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-EB-x8h0m.js";import"./useFocusRing-B3_Fq29Y.js";import"./index-DYQAdzyg.js";import"./index-DXaepPOW.js";import"./useFormValidation-C3jZc8Ny.js";import"./useField-C4md05ju.js";import"./Button-DTzo6E9X.js";import"./Hidden-CQtKkbQ1.js";import"./useLabels-DCVajOwk.js";import"./useButton-Br4NZV8a.js";import"./search-5UIBLuLo.js";import"./createLucideIcon-DNjUyKXr.js";import"./ClearButton-CU3f6PYO.js";import"./Button-CsUdCrvJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_7PwgqK.js";import"./VisuallyHidden-CrY5FCAN.js";import"./x-DXvbv7Kd.js";import"./FieldError-BYJgixQA.js";import"./Text-nv-IhAMW.js";import"./Text-CLMs0khC.js";import"./RSPContexts-DHoIcnKb.js";import"./Collection-aQtQkema.js";import"./index-BWLTw_OP.js";import"./DragAndDrop-DSNf9C7L.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cerm8eE2.js";import"./SelectionManager-3sJFQUFt.js";import"./useEvent-DX4MF0J2.js";import"./useDescription-CtpSjBNK.js";import"./inertValue-DF-3KV5N.js";import"./useHighlightSelectionDescription-C_Zj7c4b.js";import"./useUpdateEffect-kyagZSOc.js";import"./ListKeyboardDelegate-DVMZRk3M.js";import"./useHasTabbableChild-BPmEhUQp.js";import"./Checkbox-CeV25LnB.js";import"./Form-B0wb-2L5.js";import"./check-DebFqx5P.js";import"./useToggleState-BgMF6YHP.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
