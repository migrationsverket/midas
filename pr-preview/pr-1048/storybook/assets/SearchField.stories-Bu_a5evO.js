import{r as m,f as l,j as t}from"./iframe-Chekwr6M.js";import{S as d}from"./SearchField-XgMgVWcJ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DBciPjeZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLkXqHsM.js";import"./utils-Dj64B4Ck.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPdk6fHk.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./useFormValidation-DohLj8tG.js";import"./useField-CXgMMZV1.js";import"./Button-Z4awFVTj.js";import"./Hidden-Dy--Tx0W.js";import"./number-DfkVkf0F.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./search-dT25xe9_.js";import"./createLucideIcon-CPHdlOig.js";import"./ClearButton-3uFyXwOs.js";import"./Button-D5FNdohA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./VisuallyHidden-CfeHWJtp.js";import"./x-DVt_hLRk.js";import"./FieldError-DCB-eHPb.js";import"./Text-d5-92hiR.js";import"./Text-CNbIZlGx.js";import"./RSPContexts-B-5HPXFu.js";import"./Collection-C8suguH5.js";import"./index-DBBfNPs6.js";import"./DragAndDrop-DB_ZqrSz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5UMCGiW.js";import"./SelectionManager-CCLf1y3R.js";import"./useEvent-Du-C-SwK.js";import"./useDescription-BaU05DyX.js";import"./inertValue-Dw3EJLO2.js";import"./useHighlightSelectionDescription-Qg6eYY2Z.js";import"./useUpdateEffect-SuTRzneO.js";import"./ListKeyboardDelegate-C97Cy8pc.js";import"./useHasTabbableChild-C5Zh-Kem.js";import"./Checkbox-DamWw9J5.js";import"./Form-C1k2uELU.js";import"./check-DKw1rHLP.js";import"./useToggleState-BmQLkzXi.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
