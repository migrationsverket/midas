import{r as m,f as l,j as t}from"./iframe-6hgGCLw8.js";import{S as d}from"./SearchField-C6JyMmA8.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dir82CB7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-yzEE9xtq.js";import"./utils-CX_zB5aR.js";import"./useLocalizedStringFormatter-DMNGX3Z_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZxv6GTb.js";import"./useFocusRing-Cuwdf14T.js";import"./index-0RlmGZ9W.js";import"./index-I7rnJuI0.js";import"./useFormValidation-D27bsKed.js";import"./useField-DGwoxVi1.js";import"./Button-Brt9OyKK.js";import"./Hidden-z4IjskhB.js";import"./useLabels-CgnqeCaq.js";import"./useButton-DGyELYzD.js";import"./search-jU_sbQJ8.js";import"./createLucideIcon-CMqrOtBY.js";import"./ClearButton-CPFsvy0z.js";import"./Button-C-MJs-8h.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-mYRlTdsp.js";import"./VisuallyHidden-CWb-I5WH.js";import"./x-DgeoVxQW.js";import"./FieldError-i2DV-PmA.js";import"./Text-iSCx5bjD.js";import"./Text-CFTnJ3zF.js";import"./RSPContexts-Bcn_vAUn.js";import"./Collection-BPb9_hiS.js";import"./index-Cu6VjWUj.js";import"./DragAndDrop-DMkAxK3W.js";import"./getScrollParent-B0JbJ1bW.js";import"./scrollIntoView-Ckk0jegU.js";import"./SelectionIndicator-Csfh2Tbk.js";import"./SelectionManager-DzswR_cU.js";import"./useEvent-BJk0ykSO.js";import"./useDescription-ltz1Kv2E.js";import"./inertValue-CUjvjlUp.js";import"./useHighlightSelectionDescription-CMYFHumH.js";import"./useUpdateEffect-CB-u7eri.js";import"./ListKeyboardDelegate-XGMUHETx.js";import"./useHasTabbableChild-DzvVkjR0.js";import"./Checkbox-oGdFJudG.js";import"./Form-DVYOmAio.js";import"./check-BH8onhzi.js";import"./useToggleState-B_iAp99o.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
