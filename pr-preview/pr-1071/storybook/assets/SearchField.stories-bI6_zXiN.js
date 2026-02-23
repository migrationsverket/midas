import{r as m,f as l,j as t}from"./iframe-DKSPN_rt.js";import{S as d}from"./SearchField-BQgdhzIh.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B4yqiDsm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CRiY1CfR.js";import"./utils-Dsb4CS80.js";import"./useLocalizedStringFormatter-DHrvMH-8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BWfn6mOs.js";import"./useFocusRing-DIM101qK.js";import"./index-CgoYFXbr.js";import"./index-DIEsqu5Q.js";import"./useFormValidation-No2F6jq6.js";import"./useField-Bm2ze5GN.js";import"./Button-D_ksf53O.js";import"./Hidden-rmoVbPRV.js";import"./useLabels-DMhDiSEv.js";import"./useButton-ld_mmKe7.js";import"./search-BAxJdrjF.js";import"./createLucideIcon-Cef0fBNb.js";import"./ClearButton-ClO0lYx5.js";import"./Button-DeDsiUlU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BNEuYvl4.js";import"./VisuallyHidden-C5ojwSbT.js";import"./x-RaB1lDYv.js";import"./FieldError-CGHdNWyD.js";import"./Text-Bjh-HQuI.js";import"./Text-DS4myfGl.js";import"./RSPContexts-D7Y3JUuE.js";import"./Collection-Pk1zjnDd.js";import"./index-B4oV2hzS.js";import"./DragAndDrop-CUFjF_qe.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-jJOTZ3KW.js";import"./SelectionManager-CRXXHeJa.js";import"./useEvent-WaBg8569.js";import"./useDescription-CtUioLWT.js";import"./inertValue-CXBvmBFg.js";import"./useHighlightSelectionDescription-B5hbYLq4.js";import"./useUpdateEffect-BwWPDfaK.js";import"./ListKeyboardDelegate-lcz-DEyi.js";import"./useHasTabbableChild-CZlczSRh.js";import"./Checkbox-Cbc3PMXZ.js";import"./Form-DNk9CeTC.js";import"./check-DQevY4Zw.js";import"./useToggleState-BPz-Nz-B.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
