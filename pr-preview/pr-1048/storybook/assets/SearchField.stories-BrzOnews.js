import{r as m,f as l,j as t}from"./iframe-CWutqfKR.js";import{S as d}from"./SearchField-DSnBv9D1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CmvqwSlG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BVGmSD4F.js";import"./utils-qZdmNmO1.js";import"./useLocalizedStringFormatter-TUhhiYru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUWSY0RD.js";import"./useFocusRing-BuUfrlQY.js";import"./index-B_sF5hyi.js";import"./index-CvMFxXqB.js";import"./useFormValidation-Db_RhjoB.js";import"./useField-BwhXtUtI.js";import"./Button-BnWrQLFg.js";import"./Hidden-MRIgxKO_.js";import"./useLabels-CV5H4iTO.js";import"./useButton-_SFucHjZ.js";import"./search-DKhnDP8B.js";import"./createLucideIcon-CEH_8uo-.js";import"./ClearButton-DKhsMHm8.js";import"./Button-CRDZmgjm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-7pnUr10b.js";import"./VisuallyHidden-D9EFy6-j.js";import"./x-DIkHBrE3.js";import"./FieldError-ClytNfPk.js";import"./Text-CJlC6srz.js";import"./Text-BwTFzJBU.js";import"./RSPContexts-BHcnN_pC.js";import"./Collection-BPl_BKTc.js";import"./index-DAg4bfWV.js";import"./DragAndDrop-CEvD8DsR.js";import"./getScrollParent-DpRlBU94.js";import"./scrollIntoView-CxEfx6Cs.js";import"./SelectionIndicator-E3cIqDFo.js";import"./SelectionManager-BkT6stK1.js";import"./useEvent-2mXEMkLk.js";import"./useDescription-B-mxcc0_.js";import"./inertValue-B2Ww32O5.js";import"./useHighlightSelectionDescription-4Khd14Q2.js";import"./useUpdateEffect-CBRkprSk.js";import"./ListKeyboardDelegate-_yjJx8ut.js";import"./useHasTabbableChild-M7ycyQSL.js";import"./Checkbox-B8GoQqYk.js";import"./Form-DTiAf4kb.js";import"./check-DB3wqhMC.js";import"./useToggleState-fwi-Qtj5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
