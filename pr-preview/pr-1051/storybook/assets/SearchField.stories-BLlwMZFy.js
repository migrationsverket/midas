import{r as m,f as l,j as t}from"./iframe-BZJIgrzq.js";import{S as d}from"./SearchField-mMoeqc4r.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DBvuG-N6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-YwjV-cgx.js";import"./utils-CDsu9e82.js";import"./useLocalizedStringFormatter--c6s_bUB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField--6RFNd7w.js";import"./useFocusRing-CLRJYDX3.js";import"./index-CMFY0fD_.js";import"./index-DLK3qOyE.js";import"./useFormValidation-CynkB5SZ.js";import"./useField-MSXXK5ZP.js";import"./Button-nILSV0Zl.js";import"./Hidden-BH3zIE_M.js";import"./useLabels-1qpMULhJ.js";import"./useButton-DhBm0XNi.js";import"./search-BLksSg5B.js";import"./createLucideIcon-OgUSFDFv.js";import"./ClearButton-CX-jffOV.js";import"./Button-CLHjLMLk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-c0g796co.js";import"./VisuallyHidden-C0iAQ1h6.js";import"./x-4lOs2yK-.js";import"./FieldError-Xf7luySm.js";import"./Text-BCf7Uakc.js";import"./Text-CLRTBMzT.js";import"./RSPContexts-Db0C8CO2.js";import"./Collection-Bw20jmHK.js";import"./index-CHIfq2GA.js";import"./DragAndDrop-C5ikiPqX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEjfesxB.js";import"./SelectionManager-TMotc0NR.js";import"./useEvent-8RC0B9o7.js";import"./useDescription-D0LbgrVb.js";import"./inertValue-CUHYactK.js";import"./useHighlightSelectionDescription-DQhTfTJP.js";import"./useUpdateEffect-BlpTKB2q.js";import"./ListKeyboardDelegate-C3FvELMR.js";import"./useHasTabbableChild-BwKYMuhb.js";import"./Checkbox-Sc4Qk340.js";import"./Form-Cb9oyesI.js";import"./check-DsVoRjtp.js";import"./useToggleState-DG_DvitX.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
