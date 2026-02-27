import{r as m,f as l,j as t}from"./iframe-C0YgPd_X.js";import{S as d}from"./SearchField-b_Qj4RZp.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BmG3ZLfr.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CoSP0aK4.js";import"./utils-Ci8FU_mO.js";import"./useLocalizedStringFormatter-DXSG4DWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yfWoYPMd.js";import"./useFocusRing-d4xeVmwI.js";import"./index-DR6-hAa4.js";import"./index-B1yuzVKX.js";import"./useFormValidation-DngJ6Ojw.js";import"./useField-CSv43KA5.js";import"./Button-XxkWRrW-.js";import"./Hidden-B7mLw12T.js";import"./useLabels-CDHVT8zI.js";import"./useButton-1PkuGq_I.js";import"./search-BnCF_NL6.js";import"./createLucideIcon-Btasiudw.js";import"./ClearButton-DnBu9QSF.js";import"./Button-CRNHL0rZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-eCcOY5R3.js";import"./VisuallyHidden-DgXH2cKS.js";import"./x-Ckyv5PDt.js";import"./FieldError-DPY80cAa.js";import"./Text-DmZIPz6e.js";import"./Text-CQgzeM0c.js";import"./RSPContexts-DAjBn9Ce.js";import"./Collection-Cej5becY.js";import"./index-BLSEeT3a.js";import"./DragAndDrop-NuVOqJLM.js";import"./getScrollParent-B8LViZWg.js";import"./scrollIntoView-DpW98Jv0.js";import"./SelectionIndicator-zMODC9aG.js";import"./SelectionManager-DJK8Q2Ua.js";import"./useEvent-Cmu4Aec-.js";import"./useDescription-Ce3Mvgly.js";import"./inertValue-B3PHO6wG.js";import"./useHighlightSelectionDescription-BYeg0C5b.js";import"./useUpdateEffect-Bvsvvzjq.js";import"./ListKeyboardDelegate-CB2lvDQ8.js";import"./useHasTabbableChild-DAKC4vrj.js";import"./Checkbox-B2n2V0Ue.js";import"./Form-C-7U6XPP.js";import"./check-CD369TJZ.js";import"./useToggleState-CgYdRVE9.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
