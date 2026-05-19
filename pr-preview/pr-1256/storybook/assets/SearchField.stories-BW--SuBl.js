import{r as m,f as l,j as t}from"./iframe-TmYtQgnY.js";import{S as d}from"./SearchField-B_Gqmrlo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CGXmhlcr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvgYso-7.js";import"./clsx-B-dksMZM.js";import"./Form-DALGR-BM.js";import"./useFocusRing-DS5bIIsk.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./Input-evjaDaYE.js";import"./Hidden-Curp_cq_.js";import"./Button-ChpfMuYO.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./FieldError-7FPxvhrU.js";import"./Text-Buf9POGu.js";import"./clsx-Ciqy0D92.js";import"./Text-T0trnrKS.js";import"./RSPContexts-DD-NCnvs.js";import"./Group-DFvqsGLM.js";import"./useControlledState-D8j9ZCcX.js";import"./useLocalizedStringFormatter-BDPcye4t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BH15xdHg.js";import"./useField-T1pIVFYf.js";import"./TextField.module-DdivwlC8.js";import"./search-werSkSIa.js";import"./createLucideIcon-DeoFDGGs.js";import"./x-WIEiNIRj.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./Button-CPisJxWJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bad1FF8A.js";import"./Collection-DjRJ2-_Y.js";import"./index-DD5CoGXe.js";import"./DragAndDrop-CXCtjZxr.js";import"./getScrollParent-D0szpDfO.js";import"./scrollIntoView-BMboN7jH.js";import"./SelectionIndicator-QUvO_-7Z.js";import"./SelectionManager-BpEOlw03.js";import"./useEvent-znuN9vlN.js";import"./useDescription-BlLDYGFU.js";import"./inertValue-C6wgsV-E.js";import"./useHighlightSelectionDescription-_AJSnwSe.js";import"./useUpdateEffect-BjEaIc_E.js";import"./ListKeyboardDelegate-DtDZKLW9.js";import"./useHasTabbableChild-CahsH2m2.js";import"./Checkbox-C6I2r_2C.js";import"./check-Dof7NHtS.js";import"./useToggleState-C_hlurAB.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
