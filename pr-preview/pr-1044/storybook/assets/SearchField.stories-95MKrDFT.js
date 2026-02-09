import{r as m,f as l,j as t}from"./iframe-c0lnwIw4.js";import{S as d}from"./SearchField-C_nDjqPB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUXvDhuo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BiOg0pOd.js";import"./utils-CKxPVGJv.js";import"./useLocalizedStringFormatter-BFGWbxP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CC8vVeT1.js";import"./useFocusRing-DJjkQoU4.js";import"./index-B1hzWEWI.js";import"./index-DjCW-TlU.js";import"./useFormValidation-BTtRPMAF.js";import"./useField-rzQ8CQUh.js";import"./Button-DJS_LvWc.js";import"./Hidden-BDS_rwuq.js";import"./useLabels-Bl4EQLSq.js";import"./useButton-CVyNe4Wj.js";import"./search-C9VaoIe6.js";import"./createLucideIcon-X-I_ue95.js";import"./ClearButton-BwCUr328.js";import"./Button-C8YLXKEl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQGhBMx9.js";import"./VisuallyHidden-B6dXGLX8.js";import"./x-C52Idzcm.js";import"./FieldError-BbrhXxES.js";import"./Text-VyJc00c9.js";import"./Text-BgxEb-sb.js";import"./RSPContexts-CZlKyDN8.js";import"./Collection-CTWoRlND.js";import"./index-BBJl7wpF.js";import"./DragAndDrop-R6YH2xmZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BoR3Iio9.js";import"./SelectionManager-DTN516oZ.js";import"./useEvent-Dv7LfemI.js";import"./useDescription-DRQZrp8o.js";import"./inertValue-DAZQPKEy.js";import"./useHighlightSelectionDescription-BMals4bN.js";import"./useUpdateEffect-BTkbnbeQ.js";import"./ListKeyboardDelegate-DKKEE7Yq.js";import"./useHasTabbableChild-ChdE9Euv.js";import"./Checkbox-DICUD4mf.js";import"./Form-Ct2ya3Wm.js";import"./check-EcwPEekn.js";import"./useToggleState-Cugotgny.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
