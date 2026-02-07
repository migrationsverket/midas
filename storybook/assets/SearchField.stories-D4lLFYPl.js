import{r as m,f as l,j as t}from"./iframe-B7CA7zm9.js";import{S as d}from"./SearchField-BnA3rx2N.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-yNolaeDq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C73mtcAA.js";import"./utils-CQgVAoKd.js";import"./useLocalizedStringFormatter-jYoZNKU4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BcHGj1n2.js";import"./useFocusRing-DlIVYC0Q.js";import"./index-Cwsun3ZN.js";import"./index-BocC1wQt.js";import"./useFormValidation-CmLLFYfy.js";import"./useField-q_r02WmP.js";import"./Button-DCb3Avtf.js";import"./Hidden-D1GMlL2H.js";import"./useLabels-COPc6DSg.js";import"./useButton-OekK3SSa.js";import"./search-b52eZ5QM.js";import"./createLucideIcon-DrWysga5.js";import"./ClearButton-BlRGT7SL.js";import"./Button-D89KgD4F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dmi23tW0.js";import"./VisuallyHidden-B6IbkCTP.js";import"./x-BMjxK86n.js";import"./FieldError-C6l0vGmY.js";import"./Text-D03EwgzM.js";import"./Text-Cj80PO87.js";import"./RSPContexts-DllVX3bg.js";import"./Collection-DxnCaOCK.js";import"./index-Dlarzz0C.js";import"./DragAndDrop-CFh6fto1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COP-JOsu.js";import"./SelectionManager--8uLHtnZ.js";import"./useEvent-D9DTZ6Bu.js";import"./useDescription-_20e8jer.js";import"./inertValue-DLkUqyz2.js";import"./useHighlightSelectionDescription-k5LEqTO6.js";import"./useUpdateEffect-COumG9AI.js";import"./ListKeyboardDelegate-DCvaEldI.js";import"./useHasTabbableChild-BT_GQS3H.js";import"./Checkbox-Cb-A5nFR.js";import"./Form-DfyY1zJA.js";import"./check-CkpRpT-x.js";import"./useToggleState-BVQK-K3f.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
