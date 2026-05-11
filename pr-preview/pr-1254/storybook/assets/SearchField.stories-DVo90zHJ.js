import{r as m,f as l,j as t}from"./iframe-BJvdaX8k.js";import{S as d}from"./SearchField-CtQTaCxC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-aS30ShT6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZkRQ_pis.js";import"./clsx-B-dksMZM.js";import"./Form-BV7WK4aN.js";import"./useFocusRing-DK9g2iem.js";import"./index-BdUbB4sv.js";import"./index-Do7MdBuV.js";import"./Input-Cu4qY4tm.js";import"./Hidden-1TQ91tjS.js";import"./Button-2rxKwo5b.js";import"./useLabel-C0O3ak7w.js";import"./useLabels-RexyVJCn.js";import"./useButton-5dWGjBz6.js";import"./FieldError-Dsj3zxX_.js";import"./Text-BNMtUmCk.js";import"./clsx-Ciqy0D92.js";import"./Text-C0JJvFIL.js";import"./RSPContexts-CoTdr7hf.js";import"./Group-cyVCmGVY.js";import"./useControlledState-CFLNrtf2.js";import"./useLocalizedStringFormatter-DTwaBSs6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrwnAK80.js";import"./useField-Bt0bpF0c.js";import"./TextField.module-DdivwlC8.js";import"./search-CAn0QmSw.js";import"./createLucideIcon-CeO-jkh6.js";import"./x-DbFWgsIq.js";import"./useLocalizedStringFormatter-BZU7-x_x.js";import"./Button-Bns6iq4v.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-PAT-EUPY.js";import"./Collection-61HWRNq1.js";import"./index-Cr3DY1hz.js";import"./DragAndDrop-CVBkubFA.js";import"./getScrollParent-DAFKwCNH.js";import"./scrollIntoView-B05vA7IT.js";import"./SelectionIndicator-R-DvunUm.js";import"./SelectionManager-Dspabaik.js";import"./useEvent-CFX03mzz.js";import"./useDescription-BybqaC--.js";import"./inertValue-Bxaz8vt3.js";import"./useHighlightSelectionDescription-Cy9z7gSe.js";import"./useUpdateEffect-DCNcPDXB.js";import"./ListKeyboardDelegate-COto3r9Q.js";import"./useHasTabbableChild-CjUnmMCD.js";import"./Checkbox-B16OVHH9.js";import"./check-B8Rr2EWy.js";import"./useToggleState-CgWasKa8.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
