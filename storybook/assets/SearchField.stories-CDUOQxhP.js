import{r as m,f as l,j as t}from"./iframe-MBbdolFR.js";import{S as d}from"./SearchField-CWQK8bjZ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DJewtDmi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DA1YFynG.js";import"./utils-Dg7ruvLQ.js";import"./useLocalizedStringFormatter-BVS7UHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dicrt-G2.js";import"./useFocusRing-Cblmo_dI.js";import"./index-DPSmS7Ww.js";import"./index-Cat6omEG.js";import"./useFormValidation-CsKOlYua.js";import"./useField-D_PnAzQa.js";import"./Button-BeUFbs-K.js";import"./Hidden-BqEHZ0Ur.js";import"./useLabels-8moplH_Y.js";import"./useButton-Cdg81aej.js";import"./search-BPoikQEs.js";import"./createLucideIcon-DbXfeuCy.js";import"./ClearButton-CNnwTfTa.js";import"./x-DzqiEM-p.js";import"./Button-hlqL-z4t.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-0WmapNTJ.js";import"./VisuallyHidden-DTLx9iH1.js";import"./FieldError-WKF4owWT.js";import"./Text-BAnCasif.js";import"./Text-CKOZXfI5.js";import"./RSPContexts-DCBOH9RH.js";import"./Collection-Bi0gIBDQ.js";import"./index-CCHFRJrR.js";import"./DragAndDrop-QN2NxYyv.js";import"./getScrollParent-BDKRolOu.js";import"./scrollIntoView-D3VE82Y3.js";import"./SelectionIndicator-NIeRPzO1.js";import"./SelectionManager-Cas3p51J.js";import"./useEvent-C6xw0YBs.js";import"./useDescription-1itsOOAn.js";import"./inertValue-dX2yTB2H.js";import"./useHighlightSelectionDescription-CY6L_9PT.js";import"./useUpdateEffect-h0dAy_9y.js";import"./ListKeyboardDelegate-DeoEHRa5.js";import"./useHasTabbableChild-BE0YiAUD.js";import"./Checkbox-DdwoBCRi.js";import"./Form-BKAb1_yC.js";import"./check-kzHKIlXD.js";import"./useToggleState-D5S4jbsc.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
