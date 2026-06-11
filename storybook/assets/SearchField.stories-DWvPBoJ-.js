import{r as m,f as l,j as t}from"./iframe-DhO1D3QS.js";import{S as d}from"./SearchField-DW4zl99s.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C0mjGLso.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSNCD2yj.js";import"./clsx-B-dksMZM.js";import"./Form-DQnVBK_C.js";import"./useFocusRing-CQcNXJs3.js";import"./index-LXpDKKNQ.js";import"./index-DoTz7Iqr.js";import"./Input-C6g8_Qf3.js";import"./Hidden-I1lhyBbs.js";import"./Button-C3UugFSS.js";import"./useLabel-DkS0rVDY.js";import"./useLabels-DLba56LZ.js";import"./useButton-CWHmgq4Y.js";import"./FieldError-BUEn5Oe2.js";import"./Text-_SRXujoE.js";import"./clsx-Ciqy0D92.js";import"./Text-CzyDiWSu.js";import"./RSPContexts-6O3ucjMQ.js";import"./Group-C20hGe4g.js";import"./useControlledState-C9CuHrJu.js";import"./useLocalizedStringFormatter-BuzJnweE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_37wv57.js";import"./useField-DoQL0GGr.js";import"./TextField.module-DdivwlC8.js";import"./search-D60npjly.js";import"./createLucideIcon-DKHdgiD6.js";import"./x-CdBi1_si.js";import"./useLocalizedStringFormatter-D1NPH8NW.js";import"./Button-Do0NIfC4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D9luNuIh.js";import"./Collection-Cimwf5Zr.js";import"./index-Bc5wjcDh.js";import"./DragAndDrop-CpnUOMqJ.js";import"./getScrollParent-CDShaaNJ.js";import"./scrollIntoView-aGeNnyvC.js";import"./SelectionIndicator-DS0PCRu2.js";import"./SelectionManager-BiDDZLNk.js";import"./useEvent-CAEIwGNs.js";import"./useDescription-CghzDXw0.js";import"./inertValue-BXvoH9kk.js";import"./useHighlightSelectionDescription-D9-6fRJD.js";import"./useUpdateEffect-50Wz2k7C.js";import"./ListKeyboardDelegate-D5nCii-g.js";import"./useHasTabbableChild-DVtp2-rM.js";import"./Checkbox-DtFMNpCh.js";import"./check-oasUPCPj.js";import"./useToggleState-QykUU3tt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
