import{r as m,f as l,j as t}from"./iframe-DTLJLCqo.js";import{S as d}from"./SearchField-XTI3FlwW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DD4nRNOI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D7_B-bjt.js";import"./utils-aQAqN8gs.js";import"./useLocalizedStringFormatter-Cpm5l6p9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_rJIOGj.js";import"./useFocusRing-CCXTTGcy.js";import"./index-R7zWEzuw.js";import"./index-DWROMjn1.js";import"./useFormValidation-DXoy3rZ6.js";import"./useField-DrzhCEc1.js";import"./Button-DLbZMMBE.js";import"./Hidden-Ba9IdiNq.js";import"./useLabels-C_LVKDoo.js";import"./useButton-Dm0JCrG-.js";import"./search-pUi4ZGEn.js";import"./createLucideIcon-ZFlUY_RU.js";import"./ClearButton-BoQmgs7B.js";import"./Button-wjvYMOzu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNlIS9z.js";import"./VisuallyHidden-Cr5LwEwU.js";import"./x-BYwfMl4s.js";import"./FieldError-CveCLVTj.js";import"./Text-BVi5Ej-u.js";import"./Text-VQywqbiS.js";import"./RSPContexts-C0vMLaLM.js";import"./Collection-S7fflzp9.js";import"./index-D3QbyDlh.js";import"./DragAndDrop-D3Yi6xf7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COJaXbf_.js";import"./SelectionManager-CVMkAKx2.js";import"./useEvent-DuEmEayB.js";import"./useDescription-D_-VTjQ7.js";import"./inertValue-DRMBQ_H3.js";import"./useHighlightSelectionDescription-c5xTizu4.js";import"./useUpdateEffect-B8EAwBZf.js";import"./ListKeyboardDelegate-Dk3H0uLl.js";import"./useHasTabbableChild-BIobIjKR.js";import"./Checkbox-Bo2F5Hi2.js";import"./Form-CdS54emo.js";import"./check-Cp8dJBW7.js";import"./useToggleState-B8fzTXYC.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
