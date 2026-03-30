import{r as m,f as l,j as t}from"./iframe-mq0SU6Z9.js";import{S as d}from"./SearchField-BS2Bo4yf.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-JNLdCn3s.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJUm3EKx.js";import"./clsx-B-dksMZM.js";import"./Form-bcWZFPnj.js";import"./useFocusRing-D78q_c7L.js";import"./index-CiCCX6wU.js";import"./index-Cnhx9KUB.js";import"./Input-DZnVlbOf.js";import"./Hidden-CNCyzMOi.js";import"./Button-D5Wvq1Pl.js";import"./useLabel-B5pFd3Xm.js";import"./useLabels-CIFPEs6o.js";import"./useButton-KkDhW6MW.js";import"./FieldError-f-MdB8SD.js";import"./Text-BbVeu3X7.js";import"./clsx-Ciqy0D92.js";import"./Text-QATMG5Uj.js";import"./RSPContexts-4AWQzH5S.js";import"./Group-DIGxo30w.js";import"./useControlledState-CIPDjvWu.js";import"./useLocalizedStringFormatter-6SvQMdyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-5FwpDS0l.js";import"./useField-C7vU-KUe.js";import"./TextField.module-DdivwlC8.js";import"./search--o73FQZl.js";import"./createLucideIcon-D9XqkqtN.js";import"./x-yCiVd0iJ.js";import"./useLocalizedStringFormatter-Deu_fvUu.js";import"./Button-Cvp14hiG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbUhQySq.js";import"./Collection-CE2c4eRW.js";import"./index-TT9iBVBB.js";import"./DragAndDrop-0BXIBbQb.js";import"./getScrollParent-CQdctl5w.js";import"./scrollIntoView-B1GlEmmZ.js";import"./SelectionIndicator-D__HQavp.js";import"./SelectionManager-DX8MhBW4.js";import"./useEvent-D25AVNy_.js";import"./useDescription-BIdqTDt5.js";import"./inertValue-B0vjTfKu.js";import"./useHighlightSelectionDescription-CAr2R6rG.js";import"./useUpdateEffect-Cr4l9WGQ.js";import"./ListKeyboardDelegate-juKUR1xz.js";import"./useHasTabbableChild-D6XsF5XS.js";import"./Checkbox-CLgJkG0r.js";import"./check-DPEvqVNV.js";import"./useToggleState-BeCJPfBJ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
