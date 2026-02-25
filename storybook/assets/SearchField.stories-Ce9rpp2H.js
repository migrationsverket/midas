import{r as m,f as l,j as t}from"./iframe-H2fTZ2nq.js";import{S as d}from"./SearchField-CdUqjiQr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Co2XN7ai.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CgUQbm6f.js";import"./utils-DW5ctycD.js";import"./useLocalizedStringFormatter-CY6ZTepc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dk4GdbuG.js";import"./useFocusRing-rY5-5oYI.js";import"./index-CIV3byj9.js";import"./index-CSi78BJY.js";import"./useFormValidation-DMoO2kJv.js";import"./useField-BMix6HQr.js";import"./Button-Thvc77gT.js";import"./Hidden-4IKYQ2HC.js";import"./useLabels-CTAJFpqt.js";import"./useButton-Ch9WkEmD.js";import"./search-B0GeXRuY.js";import"./createLucideIcon-DiZz3DHh.js";import"./ClearButton-C6w4mDjZ.js";import"./Button-wmHwb-lN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CfxXtKTH.js";import"./VisuallyHidden-h3OxpH0T.js";import"./x-S0-Uc0vp.js";import"./FieldError-Ze_QYnbw.js";import"./Text-DSNt7iu3.js";import"./Text-K2RkR5q1.js";import"./RSPContexts-ClKYWlVb.js";import"./Collection-C4vNG5Az.js";import"./index-pKIxTJCR.js";import"./DragAndDrop-CCD17xaz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DuYULepk.js";import"./SelectionManager-DdmeT842.js";import"./useEvent-DAH9VV2g.js";import"./useDescription-7i5dhWK0.js";import"./inertValue-WuyrfxKE.js";import"./useHighlightSelectionDescription-Be9wc_Xe.js";import"./useUpdateEffect-C0swBseD.js";import"./ListKeyboardDelegate-BlvDSIj7.js";import"./useHasTabbableChild-BiCw9Jr2.js";import"./Checkbox-CRBbuf9m.js";import"./Form-qTx3d32I.js";import"./check-DgsbmPB1.js";import"./useToggleState-3wJmWJfz.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
