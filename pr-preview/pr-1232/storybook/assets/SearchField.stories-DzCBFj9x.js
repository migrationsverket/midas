import{r as m,f as l,j as t}from"./iframe-9FvbyuW0.js";import{S as d}from"./SearchField-BPGQMRIt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table--d_gf72I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DbV0Y6c3.js";import"./clsx-B-dksMZM.js";import"./Form-CxEXbquf.js";import"./useFocusRing-Vad-IAyW.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./Input-bNYEqfXu.js";import"./Hidden-DVuO0yGr.js";import"./Button-C6F5UViI.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./FieldError-DXeE9aRb.js";import"./Text-DiUsHtEy.js";import"./clsx-Ciqy0D92.js";import"./Text-rctLJTJW.js";import"./RSPContexts--6FiGTU6.js";import"./Group-BTtkthVR.js";import"./useControlledState-DTpS52De.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CDf8M08J.js";import"./useField-BA20b1Lr.js";import"./TextField.module-DdivwlC8.js";import"./search-3bz1hq7P.js";import"./createLucideIcon-BM_MsqvO.js";import"./x-DkE65F2h.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./Button-2CN5Xnme.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2w5ZOiK.js";import"./Collection-jHqWKKLK.js";import"./index-CygLUfk4.js";import"./DragAndDrop-WMLNebka.js";import"./getScrollParent-L3WWZsSI.js";import"./scrollIntoView-Cg5eRwi4.js";import"./SelectionIndicator-CSw75rQk.js";import"./SelectionManager-Bi6U6zzO.js";import"./useEvent-CbyPD6wK.js";import"./useDescription-BGTuXDEN.js";import"./inertValue-C6WkDcKr.js";import"./useHighlightSelectionDescription-CYXPGFYw.js";import"./useUpdateEffect-_5lb3g9b.js";import"./ListKeyboardDelegate-CMUv_TXp.js";import"./useHasTabbableChild-BisM9xla.js";import"./Checkbox-oDxWrAhJ.js";import"./check-DX3HpAMu.js";import"./useToggleState-D7efnJJC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
