import{r as m,f as l,j as t}from"./iframe-C9oGoQlD.js";import{S as d}from"./SearchField-CqZbQFFc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DCGa7hRz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bqpo8ac-.js";import"./utils-c5FSWQc2.js";import"./useLocalizedStringFormatter-BZNBSpMr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtgUFzkV.js";import"./useFocusRing-BZ5zqIPz.js";import"./index-DI4OZgw7.js";import"./index-D3v6lHGq.js";import"./useFormValidation-Dt_mLA4h.js";import"./useField-D2aP1UuT.js";import"./Button-Cxj7U1e9.js";import"./Hidden-DN3uGqX_.js";import"./useLabels-B3yO6u3S.js";import"./useButton-DJeKkiJU.js";import"./search-Bl-ZQBd0.js";import"./createLucideIcon-B4xrwkR8.js";import"./ClearButton-8l_iRIic.js";import"./Button-BfQwIuB4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CCYDdyRA.js";import"./VisuallyHidden-cGHgangc.js";import"./x-a64OMIuk.js";import"./FieldError-BqYP09uo.js";import"./Text-BguV-1BC.js";import"./Text-6CtE12hJ.js";import"./RSPContexts-BnvAgtmh.js";import"./Collection-1CzbJfsQ.js";import"./index-CzsQzHup.js";import"./DragAndDrop-DB52-qbS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BU-2wMTH.js";import"./SelectionManager-5cPgrrKD.js";import"./useEvent-CKrpPU1L.js";import"./useDescription-DU5vTSEG.js";import"./inertValue-BzN497sR.js";import"./useHighlightSelectionDescription-Kg9t898G.js";import"./useUpdateEffect-k4WRsvAC.js";import"./ListKeyboardDelegate-B2fL_pD3.js";import"./useHasTabbableChild-bhQJycoG.js";import"./Checkbox-OoD3CyIL.js";import"./Form-HBTvhOGb.js";import"./check-aqc3dtrw.js";import"./useToggleState-mY1XG-gJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
