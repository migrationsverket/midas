import{r as m,f as l,j as t}from"./iframe-RhDbrXC3.js";import{S as d}from"./SearchField-CJuGO_Xz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BW78Gnsq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DW8RLnA8.js";import"./clsx-B-dksMZM.js";import"./Form-BGhlaKqh.js";import"./useFocusRing-gsVXsph9.js";import"./index-Bq-QYhEQ.js";import"./index-D8RpSJOW.js";import"./Input-Dm1er1Vq.js";import"./Hidden-UG-LGAyj.js";import"./Button-B7Qh-IV7.js";import"./useLabel-CGSCFlTW.js";import"./useLabels-BNdBxkb6.js";import"./useButton-CVLOUy-6.js";import"./FieldError-BMJ6O_ac.js";import"./Text-BjSdk3hx.js";import"./clsx-Ciqy0D92.js";import"./Text-CcqjDRD2.js";import"./RSPContexts-CYLIcFJW.js";import"./Group-DhQ-VxvO.js";import"./useControlledState-DqxoR-5f.js";import"./useLocalizedStringFormatter-DVReLGbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEgpf5VL.js";import"./useField-D3_NVbG0.js";import"./TextField.module-DdivwlC8.js";import"./search-BGvnl2gG.js";import"./createLucideIcon-CO3bJS-y.js";import"./x-BCkyh0wS.js";import"./useLocalizedStringFormatter-C2RlB95E.js";import"./Button-ByeM9eCK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BacDaEj4.js";import"./Collection-BSc5pS1V.js";import"./index-Cx4SVn-F.js";import"./DragAndDrop-DUusl04a.js";import"./getScrollParent-CN5B_Bz1.js";import"./scrollIntoView-BRqXrGDm.js";import"./SelectionIndicator-CrZwTg5e.js";import"./SelectionManager-BHvP0mMk.js";import"./useEvent-Cahrq6rW.js";import"./useDescription-D6Rbp9cO.js";import"./inertValue-Bigpya0j.js";import"./useHighlightSelectionDescription-Cn_kPpM_.js";import"./useUpdateEffect-B5egeYz0.js";import"./ListKeyboardDelegate-BqZvF2rt.js";import"./useHasTabbableChild-BVoAuX9K.js";import"./Checkbox-DQlHA_Hs.js";import"./check-B5n-9Fke.js";import"./useToggleState-Bc1D-O89.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
