import{r as m,f as l,j as t}from"./iframe-CCQoa_za.js";import{S as d}from"./SearchField-B5OWRH9W.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-NXPHFM5u.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CDPjHx4z.js";import"./utils-BdXRUyql.js";import"./useLocalizedStringFormatter-DGLdWeqa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dd2cx5I5.js";import"./useFocusRing-BCtmiU0K.js";import"./index-B-zUS5Y_.js";import"./index-v9D4YVUO.js";import"./useFormValidation-Cbtdnqjx.js";import"./useField-DmXFFhmO.js";import"./Button-BrsQgG2O.js";import"./Hidden-DcjYmRqi.js";import"./useLabels-B6SFlZG6.js";import"./useButton-CrmhM509.js";import"./search-BYuFiGBV.js";import"./createLucideIcon-Q-uPorfw.js";import"./ClearButton-ChEsB0OR.js";import"./Button-C_b8qgGp.js";import"./Button.module-CPCFE9o0.js";import"./useLocalizedStringFormatter-C-e4eVhQ.js";import"./VisuallyHidden-B--Ked72.js";import"./x-CDIA4O5d.js";import"./FieldError-CpKUhFOP.js";import"./Text-YX2OQKIh.js";import"./Text-CqLZ0QeB.js";import"./RSPContexts-7vhnChNh.js";import"./Collection-QWDkhOmC.js";import"./index-CO5TAJRV.js";import"./DragAndDrop-BK_49_YM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DxjscOJj.js";import"./SelectionManager-VGqUM2UO.js";import"./useEvent-CScpbFfp.js";import"./useDescription-DTFIEJBZ.js";import"./inertValue-D9Nviv6v.js";import"./useHighlightSelectionDescription-BCkjhks2.js";import"./useUpdateEffect-C7cVUbKB.js";import"./ListKeyboardDelegate-wa-GcMJZ.js";import"./useHasTabbableChild-CdtsPx6o.js";import"./Checkbox-3GIr4X6A.js";import"./Form-CtASfJWn.js";import"./check-DZuVoXix.js";import"./useToggleState-BKXVYURV.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
