import{r as m,f as l,j as t}from"./iframe-TiTRU3BL.js";import{S as d}from"./SearchField-BsAQsppQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-kNQl_-0h.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-L72g7_5f.js";import"./utils-C9MqlSp2.js";import"./useLocalizedStringFormatter-BNlFtQ2R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B2i3IhM8.js";import"./useFocusRing-dtBjt7J0.js";import"./index-B_qfMS5p.js";import"./index-B3QYGaBR.js";import"./useFormValidation-IRKpcm5-.js";import"./useField-Dlg194Hm.js";import"./Button-D1pF9L05.js";import"./Hidden-oj9BLOe9.js";import"./useLabels-CfZHg_n5.js";import"./useButton-P0duEZAc.js";import"./search-FcP0tpJj.js";import"./createLucideIcon-BH4SiISs.js";import"./ClearButton-BNhBTCqi.js";import"./x-Bakj2uHV.js";import"./Button-uSTshioy.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-BuTIbiUS.js";import"./VisuallyHidden-BpqMk6oy.js";import"./FieldError-Db_dX9Wa.js";import"./Text-BHbOdxoE.js";import"./Text-CNXxeonm.js";import"./RSPContexts-ByDZeKU9.js";import"./Collection-CS7C6DmN.js";import"./index-nhPrKmvq.js";import"./DragAndDrop-BYRYbzeW.js";import"./getScrollParent-Lft_6uIw.js";import"./scrollIntoView-DVlMW1h6.js";import"./SelectionIndicator-BB0oS2TY.js";import"./SelectionManager-CY4JiqN1.js";import"./useEvent-YyEIKRGW.js";import"./useDescription-C6zFetVQ.js";import"./inertValue-0z6hsZSf.js";import"./useHighlightSelectionDescription-BnmfTIgW.js";import"./useUpdateEffect-C2ViXhcm.js";import"./ListKeyboardDelegate-C2tXzQP2.js";import"./useHasTabbableChild-C6iKnjis.js";import"./Checkbox-7c0thlDP.js";import"./Form-B7tgjL8C.js";import"./check-BJgeEJtf.js";import"./useToggleState-e3bRLyOO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
