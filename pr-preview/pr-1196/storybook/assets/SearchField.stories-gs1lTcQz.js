import{r as m,f as l,j as t}from"./iframe-DUmnjMKN.js";import{S as d}from"./SearchField-Dxrx8BFs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B6dbvFAs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0xSMeEGm.js";import"./clsx-B-dksMZM.js";import"./Form-CMYZ7XKZ.js";import"./useFocusRing-CNLfoayx.js";import"./index-DqAa-ger.js";import"./index-B5i8x2Yv.js";import"./Input-Dpw-0U33.js";import"./Hidden-Cfzmra0d.js";import"./Button-6X6Z2oCH.js";import"./useLabel-CcUgjBrh.js";import"./useLabels-DUPDduiv.js";import"./useButton-DCAwdvik.js";import"./FieldError-0rnN8Sj0.js";import"./Text-CeMQVnHe.js";import"./clsx-Ciqy0D92.js";import"./Text-CnbD-jnj.js";import"./RSPContexts-QZF1MtLT.js";import"./Group-CKnMjZ9q.js";import"./useControlledState-D6z3aXVM.js";import"./useLocalizedStringFormatter-Brx_2IRC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DCCVHlVZ.js";import"./useField-iVKXJziX.js";import"./TextField.module-DdivwlC8.js";import"./search-DSfGT6ug.js";import"./createLucideIcon-D1JpQBbc.js";import"./x-54C-wf8A.js";import"./useLocalizedStringFormatter-DAICFjeC.js";import"./Button-tmoOZgUj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cb4icQhq.js";import"./Collection-BaHsUj9e.js";import"./index-fxnARNVi.js";import"./DragAndDrop-Bd-vV0hn.js";import"./getScrollParent-BQDHCp3Y.js";import"./scrollIntoView-Cg9djLSg.js";import"./SelectionIndicator-4GZjABHy.js";import"./SelectionManager-CKBV8ory.js";import"./useEvent-CkK3gQjy.js";import"./useDescription-DXN7t0bP.js";import"./inertValue-BL4E-Jug.js";import"./useHighlightSelectionDescription-C2P_h4oe.js";import"./useUpdateEffect-CBRoWx1G.js";import"./ListKeyboardDelegate-DHwJq8xV.js";import"./useHasTabbableChild-DEDB_WH9.js";import"./Checkbox-Dwp67rP1.js";import"./check-qqeMj0m-.js";import"./useToggleState-Cla2RTo5.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
