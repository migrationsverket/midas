import{r as m,f as l,j as t}from"./iframe-CjheOyM5.js";import{S as d}from"./SearchField-f7FiKHcV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUWu9IhR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFDK1kJU.js";import"./utils-GJab0JjV.js";import"./useLocalizedStringFormatter-Bb6KJ9HR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFpwerb-.js";import"./useFocusRing-BQBU-xxB.js";import"./index-BdSERe24.js";import"./index-CQFCXopn.js";import"./useFormValidation-DkzOoVjE.js";import"./useField-Bj94Kh8V.js";import"./Button-BEfApAj7.js";import"./Hidden-fPTMSZG1.js";import"./useLabels-CB9GaZKC.js";import"./useButton-BK6j3-_O.js";import"./search-duf1AwAh.js";import"./createLucideIcon-D7R3LjHD.js";import"./ClearButton-cZd4oERW.js";import"./Button-D6LrA16i.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-o8VSdvfs.js";import"./VisuallyHidden-BkQsNkQj.js";import"./x-DXoGLFAv.js";import"./FieldError-CtzgHxZv.js";import"./Text-CyPeEhZq.js";import"./Text-DfjK2rvS.js";import"./RSPContexts-CC-kh1Fw.js";import"./Collection-DVHiEAXj.js";import"./index-BHFPch_N.js";import"./DragAndDrop-B6_cZVdv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9tC7Emy.js";import"./SelectionManager-C1IokEHS.js";import"./useEvent-DLgfOL5L.js";import"./useDescription-NtTCr5vC.js";import"./inertValue-Cqee1tkf.js";import"./useHighlightSelectionDescription-K8gC0YqV.js";import"./useUpdateEffect-qDcCXVZp.js";import"./ListKeyboardDelegate-DMyvfGvx.js";import"./useHasTabbableChild-D-BSgA4q.js";import"./Checkbox-BARAQwW-.js";import"./Form-Dyi7YPUC.js";import"./check-RzEJJvoV.js";import"./useToggleState-m3OOSc5V.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
