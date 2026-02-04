import{r as m,f as l,j as t}from"./iframe-xSlZKBk7.js";import{S as d}from"./SearchField-CdvsqQR9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BQGzU4AV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BEVMoc2A.js";import"./utils-5SJY94w3.js";import"./useLocalizedStringFormatter-DRZZdc_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BT_P7BPV.js";import"./useFocusRing-D_hK-2vE.js";import"./index-CBg_-d7r.js";import"./index-DVqoIBNR.js";import"./useFormValidation-D6PKw7Iw.js";import"./useField-D4-9WxUr.js";import"./Button-Dgw1ffzt.js";import"./Hidden-DwvugQlw.js";import"./useLabels-gxsBD3ir.js";import"./useButton-Ccm1vhj3.js";import"./search-D6kxpstk.js";import"./createLucideIcon-NQNnXyf7.js";import"./ClearButton-CIKkBcV9.js";import"./Button-3PLMBo1F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DI3vZSY9.js";import"./VisuallyHidden-BGA6bfiz.js";import"./x-C4Ur1Yca.js";import"./FieldError-C_i49J3y.js";import"./Text-DgXR0aOr.js";import"./Text-KNOlaizT.js";import"./RSPContexts-aPse6uyn.js";import"./Collection-Si9-pC3r.js";import"./index-BoyVYKPh.js";import"./DragAndDrop-T-tWuzVR.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-5PT-iEWC.js";import"./SelectionManager-CLqYy-zz.js";import"./useEvent-DhxS9s3R.js";import"./useDescription-DsIho0Ts.js";import"./inertValue-BQ3NH6BV.js";import"./useHighlightSelectionDescription-CQrnWx68.js";import"./useUpdateEffect-Baf4sQpK.js";import"./ListKeyboardDelegate-BgaT32mH.js";import"./useHasTabbableChild-DBEqSV3b.js";import"./Checkbox-CL7GT3BP.js";import"./Form-B9HnXKed.js";import"./check-BKVRj97E.js";import"./useToggleState-ZRUc0OXZ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
