import{r as m,f as l,j as t}from"./iframe-BUqHy7GG.js";import{S as d}from"./SearchField-B1PJUTp5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dm1CFBqM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKp7Diu5.js";import"./utils-DrdsiK-L.js";import"./useLocalizedStringFormatter-CvEuXf2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C7H44w70.js";import"./useFocusRing-CebfJ1br.js";import"./index-DEv5Wt7N.js";import"./index-DZDSHzQO.js";import"./useFormValidation-CbKAev3H.js";import"./useField-Bt7YmqoZ.js";import"./Button-CodW0JYq.js";import"./Hidden-N4_Hw_bF.js";import"./useLabels-Dw6biMU5.js";import"./useButton-CwpzBG5G.js";import"./search-BsqS88vp.js";import"./createLucideIcon-DBH6mYos.js";import"./ClearButton-3EctDzH0.js";import"./Button-C0V6-7WF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8scW4RRu.js";import"./VisuallyHidden-DMnJ-77G.js";import"./x-Cxd8KX91.js";import"./FieldError-CDxUPwIp.js";import"./Text-B9jmhAwE.js";import"./Text-6n5u0fKg.js";import"./RSPContexts-r592QdOJ.js";import"./Collection-Bw_hG3jl.js";import"./index-DOsODoS1.js";import"./DragAndDrop-BF5mQCtA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DCK9j9oG.js";import"./SelectionManager-CxDB_yOQ.js";import"./useEvent-ErruG-b9.js";import"./useDescription-B9Fe93xB.js";import"./inertValue-C--vyqO7.js";import"./useHighlightSelectionDescription-CV7aL_bT.js";import"./useUpdateEffect-Cm8Dy_I6.js";import"./ListKeyboardDelegate-DJkvH0e-.js";import"./useHasTabbableChild-pPb0IcFt.js";import"./Checkbox-DaYe9n80.js";import"./Form-COZwrKDi.js";import"./check-BDJ6T9P0.js";import"./useToggleState-CHLRl1V4.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
