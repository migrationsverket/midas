import{r as m,f as l,j as t}from"./iframe-CYrC2O7n.js";import{S as d}from"./SearchField-C8LBdZfj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DL3gXixp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CWVzqNB6.js";import"./utils-W9KFSJyi.js";import"./useLocalizedStringFormatter-D52FmrAL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPInpXO5.js";import"./useFocusRing-DwhBMXNM.js";import"./index-Dd5lO-PO.js";import"./index-BE0HShMl.js";import"./useFormValidation-CYVywKCd.js";import"./useField-BuQKvOvB.js";import"./Button-BKTJlLGY.js";import"./Hidden-Cuqxaz-j.js";import"./useLabels-JnCkPdA7.js";import"./useButton-DzzAV_qM.js";import"./search-CxmZDSCB.js";import"./createLucideIcon-B2v0PGO8.js";import"./ClearButton-s_FT3Kh6.js";import"./Button-OKR0VFLl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CEUvbGBF.js";import"./VisuallyHidden-vjowbZXC.js";import"./x-Bso_vTII.js";import"./FieldError-Co8p2V5G.js";import"./Text-kU8vQOsb.js";import"./Text-C6dUuRFD.js";import"./RSPContexts-96m8ngxa.js";import"./Collection-C0qlFWCq.js";import"./index-C6ZPDeAo.js";import"./DragAndDrop-C59lz9Zb.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BisZMVPl.js";import"./SelectionManager-C2qcIVnE.js";import"./useEvent-Cl9zlQud.js";import"./useDescription-CS0207ko.js";import"./inertValue-Cik3Ufxv.js";import"./useHighlightSelectionDescription-QvNkI5Tj.js";import"./useUpdateEffect-BXzwZRRY.js";import"./ListKeyboardDelegate-Cq5x0cfE.js";import"./useHasTabbableChild-DC70xHVy.js";import"./Checkbox-4UAcbmTD.js";import"./Form-B3TXkIwh.js";import"./check-C39w1yI0.js";import"./useToggleState-HgvMIhPN.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
